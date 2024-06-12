import { View, Pressable, Text, TextInput } from "react-native";
import { selectIsLogIn } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addComment } from "../../redux/comments/comOperation";
import { useDispatch } from "react-redux";

export const Comments = ({ recipeId }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogIn);
  const [commentText, setCommentText] = useState("");
  const [comments, setToComments] = useState([]);

  const submit = async () => {
    const { payload } = await dispatch(addComment({ recipeId, commentText }));
    setToComments([...comments, payload.comment]);
  };
  return (
    <View style={{ width: "100%" }}>
      <View style={{ width: "100%" }}>
        {/* <Text>All comments will be here</Text> */}
        {isLogin && (
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
            placeholder="Your comment"
            placeholderTextColor="#BDBDBD"
            onChangeText={setCommentText}
            multiline
            numberOfLines={2}
          />
        )}
        {commentText && (
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
    </View>
  );
};
