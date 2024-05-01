import {
  View,
  Pressable,
  Text,
  Image,
  Modal,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./UserMenu.styles";
import { logOut, editUser } from "../../redux/auth/authOperation";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export const UserMenu = ({ user, showMenu, setShowMenu }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(`${user.name}`);
  const [email, setEmail] = useState(`${user.email}`);
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [avatar, setAvatar] = useState(`${user.avatarURL}`);
  const [edit, setEdit] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const getAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result) {
      setAvatar(result.assets[0].uri);
    }
    if (result.assets[0].uri !== user.avatarURL) setEdit(true);
  };
  // console.log(user.name);
  const submit = () => {
    const data = { info: {} };
    if (avatar !== user.avatarURL) data.avatar = avatar;
    if (name !== user.name) data.info.name = name;
    if (email !== user.email) data.info.email = email;

    if (newPassword && newPassword === newPassword2)
      data.info.password = newPassword;

    dispatch(editUser(data));
    setEdit(false);
    // setAvatar(user.avatarURL);
  };

  useEffect(() => {
    // console.log("avatar", avatar.split(":")[0]);
    if (
      name !== user.name ||
      email !== user.email ||
      // avatar.split(":")[0] !== "http" ||
      (newPassword2 && newPassword && newPassword2 === newPassword)
    ) {
      setEdit(true);
      if (newPassword !== newPassword2) {
        setEdit(false);
      }
    } else {
      setEdit(false);
    }
  }, [user, name, email, newPassword, newPassword2]);
  return (
    <View style={styles.containerModal}>
      <Modal
        visible={showMenu}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowMenu(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Pressable
              style={{
                width: 24,
                height: 24,
                borderWidth: 2,
                borderColor: "#555",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onPress={() => setShowMenu(false)}
            >
              <Text style={{ color: "#555", fontSize: 14 }}>X</Text>
            </Pressable>
            <View style={{ alignItems: "center", width: "100%" }}>
              <View>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 20 }}
                  source={{ uri: avatar }}
                />
                <Pressable onPress={getAvatar}>
                  <Image
                    style={{
                      position: "absolute",
                      bottom: 4,
                      right: -12,
                      width: 25,
                      height: 25,
                      backgroundColor: "#fff",
                      borderRadius: 5,
                    }}
                    source={require("../../../assets/images/edit.png")}
                  />
                </Pressable>
              </View>
              {/* <Text style={{ color: "#000", fontSize: 24 }}>~ {name} ~</Text> */}
              <KeyboardAvoidingView
                style={styles.inputContainer}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#888"
                  onChangeText={setName}
                  value={name}
                />
                <TextInput
                  style={styles.input}
                  inputMode="email"
                  placeholder="Email"
                  placeholderTextColor="#888"
                  onChangeText={setEmail}
                  value={email}
                />
                <View style={styles.passContainer}>
                  <TextInput
                    secureTextEntry={hidePass}
                    style={styles.input}
                    placeholder="Змінити пароль"
                    onChangeText={setNewPassword}
                    placeholderTextColor="#888"
                  />
                  <Pressable
                    style={styles.passBtn}
                    onPressIn={() => setHidePass(false)}
                    onPressOut={() => setHidePass(true)}
                  >
                    {hidePass ? <Text>Показати</Text> : <Text>Скрити</Text>}
                  </Pressable>
                </View>
                <View style={styles.passContainer}>
                  <TextInput
                    secureTextEntry={hidePass}
                    style={styles.input}
                    placeholder="Підтвердити пароль"
                    onChangeText={setNewPassword2}
                    placeholderTextColor="#888"
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
              {edit && (
                <Pressable
                  style={{
                    width: "90%",
                    backgroundColor: "#FF6C00",
                    padding: 14,
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 16,
                  }}
                  onPress={() => {
                    submit();
                  }}
                >
                  <Text style={{ color: "#fff" }}>Save change</Text>
                </Pressable>
              )}
            </View>

            <Pressable
              style={{
                width: "100%",
                backgroundColor: "#aaf",
                padding: 14,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 16,
              }}
              onPress={() => dispatch(logOut())}
            >
              <Text style={styles.btnText}>LogOut</Text>
            </Pressable>
          </View>
          {/* </View> */}
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
