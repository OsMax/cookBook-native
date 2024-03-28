import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./Home.styles";

export const Home = ({ navigation }) => {
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.name) {
      navigation.navigate("Recipes");
    }
  }, []);
  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
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
          <Pressable
            style={styles.button}
            onPress={() => changeScreen("Posts")}
          >
            <Text>Posts</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};
