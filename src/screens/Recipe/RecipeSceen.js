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
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./RecipeSceen.styles";
import { logOut } from "../../redux/auth/authOperation";
import { useEffect } from "react";

export const RecipeScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState("");
  const [recipeText, setRecipeText] = useState("");
  const [image, setImage] = useState(null);

  const getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (result) {
      setAvatar(result.assets[0].uri);
    }
  };
  const submit = () => {
    console.log(recipeText);
    // dispatch(
    //   register({ avatar: avatar, info: { ingredients, recipeText } })
    // );
  };

  return (
    <>
      <ImageBackground
        style={styles.imgBack}
        source={require("../../../assets/images/background.webp")}
        resizeMode="cover"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.container}>
              <Pressable
                style={{
                  width: 25,
                  height: 25,
                  borderWidth: 2,
                  borderColor: "#000",
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ color: "#000", fontSize: 14 }}>X</Text>
              </Pressable>
              <Text style={styles.text}>Додавання рецепту</Text>
              <View style={styles.avatarContainer}>
                <View style={styles.avatarImg}>
                  {image ? (
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={{ uri: image }}
                    />
                  ) : (
                    <Text>Add image</Text>
                  )}
                </View>
                <Pressable onPress={getImage}>
                  <Image
                    style={styles.avatarBtn}
                    source={require("../../../assets/images/add.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.form}>
                <KeyboardAvoidingView
                  style={styles.inputContainer}
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={styles.inputIng}
                    placeholder="Інгредієнти"
                    onChangeText={setIngredients}
                    placeholderTextColor="#BDBDBD"
                  />
                  <TextInput
                    // inputMode="email"
                    multiline
                    numberOfLines={6}
                    style={[styles.inputCook]}
                    placeholder="Рецепт приготування"
                    onChangeText={setRecipeText}
                    placeholderTextColor="#BDBDBD"
                  />
                </KeyboardAvoidingView>
                <Pressable style={styles.singUpBtn} onPress={submit}>
                  <Text style={styles.singUpText}>Зберегти</Text>
                </Pressable>
              </View>
            </ScrollView>
            <StatusBar style="auto" />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      {/* {isLoade && <Loader />} */}
    </>
  );
};
