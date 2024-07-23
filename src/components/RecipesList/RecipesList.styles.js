import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 4,
    borderRadius: 24,
    overflow: "hidden",
  },
  recipesList: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
