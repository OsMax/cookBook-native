import { View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { getPublic, getMy } from "../../redux/recipe/recipeOperation";
import { styles } from "./Footer.styles";

export const Footer = ({ navigation, count, setEditShow }) => {
  const dispatch = useDispatch();

  const toAll = () => {
    setEditShow(false);
    dispatch(getPublic({ page: 1, count }));
  };

  const toMy = () => {
    setEditShow(true);
    dispatch(getMy({ page: 1, count }));
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>FOOTER</Text> */}
      <View
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          // gap: 20,
        }}
      >
        <Pressable
          onPress={toAll}
          style={{
            minWidth: 120,
            alignItems: "center",
            paddingVertical: 20,
            borderTopWidth: 2,
            borderLeftWidth: 1,
            borderRadius: 20,
            borderColor: "#FF6C00",
          }}
        >
          <Text style={{ color: "#FF6C00", fontSize: 18 }}>All recipes</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("AddRecipe")}
          style={{
            width: 80,
            height: 80,
            position: "relative",
            top: -24,
            margin: "auto",
            borderWidth: 2,
            borderColor: "#FF6C00",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FF6C00",
              fontSize: 50,
              textAlign: "center",
              // marginTop: 0, // Убираем верхний отступ
              // marginBottom: 0,
            }}
          >
            +
          </Text>
        </Pressable>
        <Pressable
          onPress={toMy}
          style={{
            minWidth: 120,
            alignItems: "center",
            paddingVertical: 20,
            borderTopWidth: 2,
            borderRightWidth: 1,
            borderRadius: 20,
            borderColor: "#FF6C00",
          }}
        >
          <Text style={{ color: "#FF6C00", fontSize: 18 }}>My recipes</Text>
        </Pressable>
      </View>
    </View>
  );
};
