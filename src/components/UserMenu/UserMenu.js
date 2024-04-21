import { View, Pressable, Text, Image, Modal, Button } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./UserMenu.styles";
import { logOut } from "../../redux/auth/authOperation";

export const UserMenu = ({ user, showMenu, setShowMenu }) => {
  const dispatch = useDispatch();
  // console.log(user.name);
  return (
    <View style={styles.containerModal}>
      {/* <Button title="Open Modal" onPress={() => setModalVisible(true)} /> */}
      <Modal
        visible={showMenu}
        animationType="slide" // визначте тип анімації модального вікна (slide, fade, none)
        transparent={true} // встановіть прозорість модального вікна (true - прозорий, false - непрозорий)
        onRequestClose={() => setShowMenu(false)} // встановіть функцію, яка буде викликана при закритті модального вікна
      >
        {/* <View style={styles.modalContainer}> */}
        <View style={styles.modalContent}>
          {/* <Button title="Close Modal" onPress={() => setShowMenu(false)} /> */}
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
          <View>
            <Image
              style={{ width: 100, height: 100, borderRadius: 20 }}
              source={{ uri: user.avatarURL }}
            />
            <Text style={{ color: "#000", fontSize: 24 }}>~ {user.name} ~</Text>
          </View>
          {/* <Button title="LogOut" onPress={() => dispatch(logOut())} /> */}
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "#aaf",
              padding: 14,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={() => dispatch(logOut())}
          >
            <Text style={styles.btnText}>LogOut</Text>
          </Pressable>
        </View>
        {/* </View> */}
      </Modal>
    </View>
  );
};
