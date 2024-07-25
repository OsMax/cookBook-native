import { View, Text, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";

export const CommentsList = ({ comments }) => {
  const user = useSelector(selectUser);
  return (
    <View style={{ width: "100%" }}>
      {comments.map((comment) => (
        <View
          key={comment._id}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            shadowColor: "#cc9898",
            shadowOffset: {
              width: 5,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            padding: 8,
            borderColor: "#ff9898",
          }}
        >
          {comment.owner === user._id && (
            <Pressable
              style={{ position: "absolute", top: 20, right: 10 }}
              onPress={() => console.log("edit press")}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                }}
                source={require("../../../assets/images/edit.png")}
              />
            </Pressable>
          )}
          <View
            style={{
              display: "flex",
              alignItems: "center",
              width: 70,
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={{ uri: comment.avatarURL }}
            />
            <Text style={{ fontSize: 22 }}>{comment.ownerName}</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 4,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: "100%", fontSize: 18 }}>
              {"  " + comment.commentText}
            </Text>
            <Text
              style={{ color: "#aaaaaa", fontSize: 12, textAlign: "right" }}
            >
              {comment.date.split("T")[0] +
                " " +
                comment.date.split("T")[1].split(":")[0] +
                ":" +
                comment.date.split("T")[1].split(":")[1]}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
