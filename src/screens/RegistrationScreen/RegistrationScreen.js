import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./RegistrationScreen.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import { register } from "../../redux/auth/authOperation";
import { selectLoader } from "../../redux/auth/authSelector";
import { Loader } from "../../components/Loader/Loader";
// import * as FileSystem from "expo-file-system";

export const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const isLoade = useSelector(selectLoader);

  const getAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result) {
      setAvatar(result.assets[0].uri);
    }
  };

  const submit = () => {
    // console.log(avatar, name, email, password);
    dispatch(register({ avatar: avatar, info: { name, email, password } }));
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
                width: 25,
                height: 25,
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "#fff", fontSize: 14 }}>X</Text>
            </Pressable>
            <View style={styles.container}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatarImg}>
                  {avatar && (
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={{ uri: avatar }}
                    />
                  )}
                </View>
                <Pressable onPress={getAvatar}>
                  <Image
                    style={styles.avatarBtn}
                    source={require("../../../assets/images/add.png")}
                  />
                </Pressable>
              </View>
              <Text style={styles.text}>Реєстрація</Text>
              <View style={styles.form}>
                <KeyboardAvoidingView
                  style={styles.inputContainer}
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    onChangeText={setName}
                    placeholderTextColor="#BDBDBD"
                  />
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
                      {hidePass ? <Text>Показати</Text> : <Text>Скрити</Text>}
                    </Pressable>
                  </View>
                </KeyboardAvoidingView>
                <Pressable style={styles.singUpBtn} onPress={submit}>
                  <Text style={styles.singUpText}>Зареєстуватися</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("SingIn")}>
                  <Text style={styles.singInText}>
                    <Text>Вже є акаунт? </Text>
                    <Text style={{ textDecorationLine: "underline" }}>
                      Увійти
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
