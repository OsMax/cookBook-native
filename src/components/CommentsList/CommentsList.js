import { View, Text, FlatList, Image } from "react-native";

export const CommentsList = ({ comments }) => {
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
