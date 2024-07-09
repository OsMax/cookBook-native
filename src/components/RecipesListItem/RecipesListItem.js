import { Text, View, Image, Dimensions, Pressable } from "react-native";

export const recipesItem = ({ navigation, item, editShow, setReadRecipe }) => {
  const date = item.date.split("T")[0];
  const widthIteminfo = Dimensions.get("window").width * 0.95 - 158;

  return (
    <>
      <Pressable
        style={{
          alignItems: "center",
          maxWidth: 440,
          borderRadius: 20,
          marginTop: 10,
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
        onPress={() => setReadRecipe(item)}
      >
        <Image
          style={{ width: "100%", height: 240 }}
          source={{ uri: item.imageUrl }}
        />
        <View
          style={{
            width: widthIteminfo,
            padding: 6,
            width: "100%",
            top: -1,
            backgroundColor: "#fffefe",
          }}
        >
          <Text
            style={{
              color: "#FF6C00",
              fontSize: 32,
              marginTop: 10,
              textShadowColor: "#999",
              textShadowOffset: { width: 1, height: 1 }, // Смещение тени
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              padding: 8,
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: 4,
              columnGap: 6,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {item.ingredients.map((ing) => (
              <Text
                key={item._id + ing}
                style={{
                  fontSize: 20,
                  backgroundColor: "#FF6C22",
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  color: "#fff",
                }}
              >
                {ing}
              </Text>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              paddingRight: 8,
              alignItems: "flex-end",
            }}
          >
            <Text>{date}</Text>
          </View>
        </View>
      </Pressable>
      {editShow && (
        <Pressable
          style={{ position: "absolute", top: 20, right: 10 }}
          onPress={() => navigation.navigate("AddRecipe", { recipe: item })}
        >
          <Image
            style={{
              width: 25,
              height: 25,
            }}
            source={require("../../../assets/images/edit.png")}
          />
        </Pressable>
      )}
    </>
  );
};
