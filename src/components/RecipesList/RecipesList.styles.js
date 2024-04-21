import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    // height: "100%",
    flexGrow: 1,
    // backgroundColor: "red",
  },
  recipesList: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
