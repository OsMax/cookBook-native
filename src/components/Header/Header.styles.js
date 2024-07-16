import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    padding: 4,
    paddingTop: 30,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    border: 1,
    borderColor: "#FF6C00",
    width: "100%",
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    fontSize: 24,
    fontFamily: "Roboto-Black",
    borderColor: "#fff",
    justifyContent: "flex-end",
    gap: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FF6C00",
    textShadowColor: "#000", // Цвет тени
    textShadowOffset: { width: 2, height: 2 }, // Смещение тени
    textShadowRadius: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    right: 10,
    height: "100px",
    position: "absolute",
    top: 70,
  },
  menuText: {
    color: "#fff",
    textAlign: "right",
  },
});
