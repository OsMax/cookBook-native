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
import {
  selectUser,
  selectIsLogIn,
  selectLoader,
} from "../../redux/auth/authSelector";
import { styles } from "./Home.styles";
import { Header } from "../../components/Header/Header";
import { Recipes } from "../../components/Recipes/Recipes";
import { Footer } from "../../components/Footer/Footer";
import { Loader } from "../../components/Loader/Loader";

export const Home = ({ navigation }) => {
  const user = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogIn);
  const isLoade = useSelector(selectLoader);

  useEffect(() => {
    if (isLogin) {
      // navigation.navigate("Recipes");
      console.log("11111");
    }
  }, [user, isLogin]);
  return (
    <>
      <ImageBackground
        style={styles.imgBack}
        source={require("../../../assets/images/background.webp")}
        resizeMode="cover"
      >
        {/* <View> */}
        <Header navigation={navigation} />
        <Recipes />
        {isLogin && <Footer />}

        <StatusBar style="auto" />
        {/* </View> */}
      </ImageBackground>
      {isLoade && <Loader />}
    </>
  );
};
