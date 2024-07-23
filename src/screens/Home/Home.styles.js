import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    borderColor: "#000",
  },
  button: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    fontSize: 24,
    fontFamily: "Roboto-Black",
    borderWidth: 1,
    marginTop: 20,
    borderColor: "#fff",
  },
  imgBack: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
