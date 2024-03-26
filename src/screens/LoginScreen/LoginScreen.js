import { StatusBar } from "expo-status-bar";
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
import { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const submit = () => {
    console.log(email, password);
  };

  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.screen}>
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
                <Text style={styles.singUpText}>Зареєстуватися</Text>
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
  );
};
