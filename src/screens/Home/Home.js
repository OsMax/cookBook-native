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
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { Footer } from "../../components/Footer/Footer";
import { Loader } from "../../components/Loader/Loader";
import Toast from "react-native-toast-message";

export const Home = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [editShow, setEditShow] = useState(false);

  const user = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogIn);
  const isLoade = useSelector(selectLoader);

  // const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    // console.log(user);
    if (isLogin) {
      Toast.show({
        type: "success",
        text1: "You are login",
        // text2: "You are login",
        visibilityTime: 1000,
      });
    }
  }, [user, isLogin]);
  return (
    <>
      <ImageBackground
        style={styles.imgBack}
        source={require("../../../assets/images/background.webp")}
        resizeMode="cover"
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Header navigation={navigation} />
          <RecipesList
            navigation={navigation}
            page={page}
            setPage={setPage}
            count={count}
            editShow={editShow}
          />
          {isLogin && (
            <Footer
              navigation={navigation}
              setPage={setPage}
              count={count}
              setEditShow={setEditShow}
            />
          )}

          {/* <StatusBar style="auto" /> */}
        </View>
      </ImageBackground>
      {isLoade && <Loader />}
    </>
  );
};
