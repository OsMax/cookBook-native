import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import {
  Text,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./LoginScreen.styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logIn } from "../../redux/auth/authOperation";
import { selectLoader, selectIsLogIn } from "../../redux/auth/authSelector";
import { Loader } from "../../components/Loader/Loader";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const dispatch = useDispatch();

  const isLoade = useSelector(selectLoader);
  const isLogin = useSelector(selectIsLogIn);

  const submit = () => {
    dispatch(logIn({ email, password }));
  };
  useEffect(() => {
    if (isLogin) {
      navigation.navigate("Home");
    }
  }, [isLogin]);

  return (
    <>
      <ImageBackground
        style={styles.imgBack}
        source={require("../../../assets/images/background.webp")}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.screen}>
            <Pressable
              style={{
                width: 24,
                height: 24,
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 50,
                right: 10,
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "#fff", fontSize: 14 }}>X</Text>
            </Pressable>
            <View style={styles.container}>
              <Text style={styles.text}>Увійти</Text>
              <View style={styles.form}>
                <KeyboardAvoidingView
                  style={styles.inputContainer}
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    inputMode="email"
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    onChangeText={setEmail}
                    placeholderTextColor="#BDBDBD"
                  />
                  <View style={styles.passContainer}>
                    <TextInput
                      secureTextEntry={hidePass}
                      style={styles.input}
                      placeholder="Пароль"
                      onChangeText={setPassword}
                      placeholderTextColor="#BDBDBD"
                    />
                    <Pressable
                      style={styles.passBtn}
                      onPressIn={() => setHidePass(false)}
                      onPressOut={() => setHidePass(true)}
                    >
                      <Text>Показати</Text>
                    </Pressable>
                  </View>
                </KeyboardAvoidingView>
                <Pressable style={styles.singUpBtn} onPress={submit}>
                  <Text style={styles.singUpText}>Увійти</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("SingUp")}>
                  <Text style={styles.singInText}>
                    <Text>Немає акаунту? </Text>
                    <Text style={{ textDecorationLine: "underline" }}>
                      Зареєструватися
                    </Text>
                  </Text>
                </Pressable>
              </View>
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      {isLoade && <Loader />}
    </>
  );
};
