import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // прозрачный черный цвет (50% прозрачности)
  },
  loaderContainer: {
    // backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  loaderText: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
