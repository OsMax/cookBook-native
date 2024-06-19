import { View, Text, FlatList, Image } from "react-native";

export const CommentsList = ({ comments }) => {
  return (
    <View style={{ width: "100%" }}>
      {comments.map((comment) => (
        <View
          key={comment._id}
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <View>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={{ uri: comment.avatarURL }}
            />
            <Text>{comment.ownerName}</Text>
          </View>
          <View>
            <Text>{comment.commentText}</Text>
            <Text>
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
