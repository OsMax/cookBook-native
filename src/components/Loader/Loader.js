import {
  View,
  Pressable,
  Text,
  Image,
  Modal,
  Button,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperation";
import { styles } from "./Loader.styles";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6C00" />
        {/* <Text style={styles.loaderText}>{text}</Text> */}
      </View>
    </View>
  );
};
