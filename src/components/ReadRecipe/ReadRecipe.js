import {
  View,
  Pressable,
  Text,
  Image,
  Modal,
  // KeyboardAvoidingView,
  // Keyboard,
  // Platform,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./ReadRecipe.styles";
import { logOut, editUser } from "../../redux/auth/authOperation";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";

export const ReadRecipe = ({ recipe, setReadRecipe }) => {
  const cooking = recipe.cooking.split("\n");
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
                  fontSize: 28,
                  maxWidth: "90%",
                  color: "#FF6C00",
                  textShadowColor: "#000", // Цвет тени
                  textShadowOffset: { width: 1, height: 1 }, // Смещение тени
                  textShadowRadius: 2,
                }}
              >
                {recipe.name}
              </Text>
            </View>
            <ScrollView
              vertical
              style={{
                width: "100%",
                height: "90%",
              }}
              contentContainerStyle={{
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <Image
                style={{
                  width: 240,
                  height: 200,
                  borderRadius: 14,
                  marginTop: 12,
                }}
                source={{ uri: recipe.imageUrl }}
              />
              <View style={{ width: "100%", marginTop: 12 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    color: "#FF6C00",
                    textShadowColor: "#000", // Цвет тени
                    textShadowOffset: { width: 1, height: 1 }, // Смещение тени
                    textShadowRadius: 2,
                    // textDecorationLine: "underline",
                  }}
                >
                  Ingredients:
                </Text>
                <View style={{ width: "100%", paddingLeft: 10, marginTop: 8 }}>
                  {recipe.ingredients.map((ing) => (
                    <Text key={ing} style={{ fontSize: 16 }}>
                      • {ing}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={{ width: "100%", marginTop: 12 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    color: "#FF6C00",
                    textShadowColor: "#000", // Цвет тени
                    textShadowOffset: { width: 1, height: 1 }, // Смещение тени
                    textShadowRadius: 2,
                    // textDecorationLine: "underline",
                  }}
                >
                  Coocking:
                </Text>
                <View style={{ width: "100%", paddingLeft: 10, marginTop: 8 }}>
                  {cooking.map((line, index) => (
                    <Text key={`line_${index}`} style={{ fontSize: 16 }}>
                      {"   "}
                      {line}
                    </Text>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "#aaf",
              padding: 14,
              borderRadius: 10,
              alignItems: "center",
              // marginTop: 16,
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
