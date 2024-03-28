import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./RecipesSceen.styles";

export const RecipesScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};
