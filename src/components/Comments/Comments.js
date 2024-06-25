import { View, Pressable, Text, TextInput } from "react-native";
import { selectIsLogIn } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addComment,
  getComments,
  checkNewComments,
} from "../../redux/comments/comOperation";
import { useDispatch } from "react-redux";
import { CommentsList } from "../CommentsList/CommentsList";

export const Comments = ({ recipeId }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogIn);
  const [commentText, setCommentText] = useState("");
  const [comments, setToComments] = useState([]);
  const intervalRef = React.useRef(null);

  const getAll = async () => {
    const { payload } = await dispatch(getComments({ recipeId }));

    setToComments(payload.comments);
  };

  const updateComments = ({ forAdd, forDel }) => {
    if (forDel.length) {
      setToComments(
        comments.filter(
          (comment) =>
            !forDel.some(
              (commentDel) =>
                commentDel._id.toString() === comment._id.toString()
            )
        )
      );
    }
    if (forAdd.length) {
      const map = new Map();
      comments.forEach((comment) => map.set(comment._id, comment));
      forAdd.forEach((comment) => map.set(comment._id, comment));

      setToComments(Array.from(map.values()));
    }
  };

  const checkComments = async () => {
    const currentComments = comments.map((comment) => {
      return { _id: comment._id, date: new Date(comment.date) };
    });
    const { payload } = await dispatch(
      checkNewComments({ recipeId, currentComments })
    );
    // console.log(payload);
    updateComments(payload);
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(checkComments, 5000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [comments]);

  const submit = async () => {
    const { payload } = await dispatch(addComment({ recipeId, commentText }));
    setToComments([...comments, payload.comment]);
  };
  return (
    <View style={{ width: "100%" }}>
      {isLogin && (
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              marginTop: 12,
              maxHeight: 44,
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
              paddingVertical: 6,
              paddingLeft: 8,
              paddingRight: 48,
            }}
            placeholder="Ваш комментарий"
            placeholderTextColor="#BDBDBD"
            onChangeText={setCommentText}
            multiline
            numberOfLines={2}
          />
          {commentText !== "" && (
            <Pressable
              style={{
                width: 44,
                height: 44,
                backgroundColor: "green",
                borderRadius: 10,
                position: "absolute",
                bottom: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={submit}
            >
              <Text style={{ fontSize: 22, color: "#fff" }}>✔</Text>
            </Pressable>
          )}
        </View>
      )}
      {comments.length && <CommentsList comments={comments} />}
    </View>
  );
};
