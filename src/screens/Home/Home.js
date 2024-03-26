import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Button, View, Pressable } from "react-native";
import { styles } from "./Home.styles";

export const Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SingUp")}
        >
          <Text>LogUp</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text>LogIn</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => changeScreen("Posts")}>
          <Text>Posts</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
