import {
  View,
  Pressable,
  Text,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { styles } from "./ReadRecipe.styles";
import { useState } from "react";
import { Comments } from "../Comments/Comments";

export const ReadRecipe = ({ recipe, setReadRecipe }) => {
  const [showComments, setShowComments] = useState(false);

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
                  width: 420,
                  height: 320,
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
              <Pressable
                style={{
                  width: "100%",
                  marginTop: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
                onPress={() => setShowComments(!showComments)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    padding: 14,
                    color: "#FF6C00",
                    textShadowColor: "#000", // Цвет тени
                    textShadowOffset: { width: 1, height: 1 }, // Смещение тени
                    textShadowRadius: 2,
                    textDecorationLine: "underline",
                    // textDecorationLine: "underline",
                  }}
                >
                  {!showComments && "Show comments ↓"}
                  {showComments && "Close comments ↑"}
                </Text>
              </Pressable>
              {showComments && <Comments recipeId={recipe._id} />}
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
