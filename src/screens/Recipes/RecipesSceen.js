import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Pressable,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./RecipesSceen.styles";
import { logOut } from "../../redux/auth/authOperation";
import { useEffect } from "react";

export const RecipesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.avatarURL);

  const logOutBtn = () => {
    dispatch(logOut());
    navigation.navigate("Home");
  };
  useEffect(() => {}, [user]);
  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <View>
        <View style={styles.avatarImg}>
          {user.avatarURL && (
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: user.avatarURL }}
            />
          )}
        </View>
        {user && (
          <View>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        )}
        <Pressable style={styles.button} onPress={logOutBtn}>
          <Text>LOGOUT</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};
