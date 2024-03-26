import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  container: {
    position: "relative",
    backgroundColor: "#fff",
    height: 489,
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    alignItems: "center",
  },

  text: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
  form: {
    marginTop: 32,
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
  },
  singUpBtn: {
    width: "90%",
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  singUpText: {
    fontFamily: "Roboto-Black",
    fontSize: 16,
    color: "#fff",
  },
  imgBack: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  singInText: {
    fontFamily: "Roboto-Black",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
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
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
});
