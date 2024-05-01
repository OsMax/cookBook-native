import { View, Text, Pressable } from "react-native";
import { styles } from "./Footer.styles";

export const Footer = ({ navigation }) => {
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
          onPress={() => {
            console.log("all");
          }}
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
          onPress={() => {
            console.log("my");
          }}
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
