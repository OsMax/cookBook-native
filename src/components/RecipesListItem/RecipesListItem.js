import { Text, View, Image, Dimensions, Pressable } from "react-native";

export const recipesItem = ({ navigation, item, editShow, setReadRecipe }) => {
  const date = item.date.split("T")[0];
  // console.log(editShow);
  const widthIteminfo = Dimensions.get("window").width * 0.95 - 158;

  return (
    <>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          borderWidth: 2,
          borderRadius: 20,
          borderColor: "#FF6C00",
          marginTop: 10,
          padding: 4,
          backgroundColor: "#ffefef",
        }}
        onPress={() => setReadRecipe(item)}
      >
        <Image
          style={{ width: 150, height: 140, borderRadius: 14 }}
          source={{ uri: item.imageUrl }}
        />
        <View
          style={{
            // flexGrow: 1,
            width: widthIteminfo,
            padding: 4,
            height: "100%",
            // alignItems: "center",
            // flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#FF6C00",
              fontSize: 20,
              textShadowColor: "#999", // Цвет тени
              textShadowOffset: { width: 1, height: 1 }, // Смещение тени
              textShadowRadius: 2,
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: "100%",
              maxHeight: "100%",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                // width: "100%",
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
                    backgroundColor: "#FF6C00",
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
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
                alignItems: "flex-end",
                paddingRight: 4,
              }}
            >
              <Text>{date}</Text>
            </View>
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
