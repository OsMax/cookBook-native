import { View, Pressable, Text } from "react-native";
import { styles } from "./Header.styles";

export const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SingUp")}
      >
        <Text style={styles.btnText}>LogUp</Text>
      </Pressable> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SingIn")}
      >
        <Text style={styles.btnText}>LogIn</Text>
      </Pressable>
    </View>
  );
};
