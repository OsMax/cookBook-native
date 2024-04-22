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
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelector";
import { styles } from "./RecipeSceen.styles";
import { logOut } from "../../redux/auth/authOperation";
import { useEffect, useRef } from "react";

export const RecipeScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);
  const [ing, setIng] = useState("");
  const [recipeText, setRecipeText] = useState("");
  const [image, setImage] = useState(null);

  const addIngredient = (item) => {
    setIngredients([...ingredients, ing]);
    setIng("");
  };

  const getImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (result) {
      setImage(result.assets[0].uri);
    }
  };

  const delIng = (ingName) => {
    // console.log(ingName);
    // setIngredients(...ingredients.filter((item) => item !== ingName));
    const newIngredients = ingredients.filter((item) => item !== ingName);
    setIngredients([...newIngredients]);
  };

  const submit = () => {
    // dispatch(
    //   register({ avatar: avatar, info: { ingredients, recipeText } })
    // );
  };
  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [ingredients]);

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
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
              >
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
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <ScrollView
                    horizontal
                    ref={scrollViewRef}
                    style={{ width: "95%" }}
                  >
                    <Pressable
                      style={{
                        width: "100%",
                        display: "flex",
                        // flexWrap: "wrap",
                        flexDirection: "row",
                        gap: 4,
                      }}
                    >
                      {ingredients.map((ing) => {
                        return (
                          <View
                            style={{
                              padding: 10,
                              backgroundColor: "#FF6C00",
                              borderRadius: 20,
                              display: "flex",
                              flexDirection: "row",
                              gap: 10,
                            }}
                          >
                            <Text
                              style={{
                                color: "#fff",
                              }}
                              key={ing}
                            >
                              {ing}
                            </Text>
                            <Pressable
                              style={{
                                width: 20,
                                height: 20,
                                borderWidth: 2,
                                borderColor: "#fff",
                                borderRadius: 12,
                                alignItems: "center",
                                justifyContent: "center",
                                // position: "absolute",
                              }}
                              onPress={() => delIng(ing)}
                            >
                              <Text style={{ color: "#fff", fontSize: 10 }}>
                                X
                              </Text>
                            </Pressable>
                          </View>
                        );
                      })}
                    </Pressable>
                  </ScrollView>
                  <View style={styles.form}>
                    <KeyboardAvoidingView
                      style={styles.inputContainer}
                      behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >
                      <TextInput
                        style={styles.inputIng}
                        placeholder="Додати інгредієнт"
                        value={ing}
                        onChangeText={setIng}
                        placeholderTextColor="#BDBDBD"
                        onSubmitEditing={addIngredient}
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
                </View>
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
