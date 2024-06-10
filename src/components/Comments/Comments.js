import { View, Pressable, Text, TextInput } from "react-native";
import { selectIsLogIn } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Comments = (recipeId) => {
  const isLogin = useSelector(selectIsLogIn);
  const [comment, setComment] = useState("");

  const submit = () => {
    console.log(comment);
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
            onChangeText={setComment}
            multiline
            numberOfLines={2}
          />
        )}
        {comment && (
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
