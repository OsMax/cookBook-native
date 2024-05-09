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
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./RecipeSceen.styles";
import { addRecipe } from "../../redux/recipe/recipeOperation";
import { useRoute } from "@react-navigation/native";

export const RecipeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const recipe = route.params?.recipe;

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ing, setIng] = useState("");
  const [cooking, setCooking] = useState("");
  const [image, setImage] = useState(null);
  const [privStatus, setPriv] = useState(false);

  const addIngredient = () => {
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
    const newIngredients = ingredients.filter((item) => item !== ingName);
    setIngredients([...newIngredients]);
  };

  const submit = () => {
    // console.log({ img: image, recipeInfo: { name, ingredients, cooking } });
    dispatch(
      addRecipe({
        img: image,
        recipeInfo: { name, ingredients, cooking, privStatus },
      })
    );
  };
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name);
      setIngredients(recipe.ingredients);
      setCooking(recipe.cooking);
      setImage(recipe.imageUrl);
      setPriv(recipe.privStatus);
    }
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
                <View style={{ width: "100%", alignItems: "center" }}>
                  <KeyboardAvoidingView
                    style={styles.inputContainer}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      style={styles.inputIng}
                      placeholder="Назва"
                      onChangeText={setName}
                      value={name}
                      placeholderTextColor="#BDBDBD"
                    />
                  </KeyboardAvoidingView>
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
                </View>
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.form}>
                    <KeyboardAvoidingView
                      style={styles.inputContainer}
                      behavior={Platform.OS == "ios" ? "padding" : "height"}
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
                                key={ing}
                              >
                                <Text
                                  style={{
                                    color: "#fff",
                                  }}
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
                        value={cooking}
                        onChangeText={setCooking}
                        placeholderTextColor="#BDBDBD"
                      />
                      <TouchableOpacity
                        style={{
                          marginTop: 10,
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: 8,
                        }}
                        onPress={() => setPriv(!privStatus)}
                      >
                        <Checkbox value={privStatus} />
                        <Text
                          style={{
                            textDecorationLine: "underline",
                            color: "#66f",
                          }}
                        >
                          Тільки для мене
                        </Text>
                      </TouchableOpacity>
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
