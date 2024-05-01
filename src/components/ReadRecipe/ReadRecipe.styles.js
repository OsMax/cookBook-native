import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    right: 10,
    width: "100%",
    height: 100,
    position: "absolute",
    top: 70,
  },
  menuText: {
    color: "#fff",
    textAlign: "right",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "90%",
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginTop: 16,
    textAlign: "center",
    color: "#000",
  },
  passContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  passBtn: {
    fontFamily: "Roboto-Black",
    position: "absolute",
    padding: 16,
    right: 16,
    bottom: 0,
    color: "#1B4371",
  },
  containerModal: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // колір фону модального вікна
  },
  modalContent: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    // borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
