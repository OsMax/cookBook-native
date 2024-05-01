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
import { styles } from "./ReadRecipe.styles";
import { logOut, editUser } from "../../redux/auth/authOperation";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export const ReadRecipe = ({ recipe, setReadRecipe }) => {
  console.log(recipe);
  return (
    <View style={styles.containerModal}>
      <Modal
        visible={!!recipe}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowMenu(null)}
      >
        <View style={styles.modalContent}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text
                style={{
                  fontSize: 24,
                  color: "#FF6C00",
                  textShadowColor: "#000", // Цвет тени
                  textShadowOffset: { width: 1, height: 1 }, // Смещение тени
                  textShadowRadius: 2,
                }}
              >
                {recipe.name}
              </Text>
            </View>
            <Image
              style={{ width: 240, height: 200, borderRadius: 14 }}
              source={{ uri: recipe.imageUrl }}
            />
            <View style={{ width: "100%" }}>
              <Text>Ingredients:</Text>
              <View style={{ width: "100%", paddingLeft: 40 }}>
                {recipe.ingredients.map((ing) => (
                  <Text>{ing}</Text>
                ))}
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text>Coocking:</Text>
              <View style={{ width: "100%", paddingLeft: 40 }}>
                <Text>{recipe.cooking}</Text>
              </View>
            </View>
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
            onPress={() => setReadRecipe(null)}
          >
            <Text style={styles.btnText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
