import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    right: 10,
    // width: "100%",
    height: "100px",
    position: "absolute",
    top: 70,
  },
  menuText: {
    color: "#fff",
    textAlign: "right",
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
