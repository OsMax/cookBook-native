import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./Home.styles";
import { Header } from "../../components/Header/Header";
import { Recipes } from "../../components/Recipes/Recipes";

export const Home = ({ navigation }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.name) {
      // navigation.navigate("Recipes");
      console.log("11111");
    }
  }, [user]);
  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      {/* <View> */}
      <Header navigation={navigation} />
      <Recipes />

      <StatusBar style="auto" />
      {/* </View> */}
    </ImageBackground>
  );
};
