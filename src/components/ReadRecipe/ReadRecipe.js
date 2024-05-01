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

export const ReadRecipe = ({ item, setReadRecipe }) => {
  console.log(item._id);
  return (
    <View style={styles.containerModal}>
      <Modal
        visible={item}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowMenu(null)}
      >
        <View style={styles.modalContent}>
          <View>
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text>Ingredients:</Text>
            </View>
            <View>
              <Text>Coocking:</Text>
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
