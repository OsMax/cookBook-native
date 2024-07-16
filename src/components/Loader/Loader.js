import {
  View,
  ActivityIndicator,
} from "react-native";
import { styles } from "./Loader.styles";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6C00" />
      </View>
    </View>
  );
};
