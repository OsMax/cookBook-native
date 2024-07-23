import { View, Pressable, Text, Image } from "react-native";
import { selectUser, selectIsLogIn } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { styles } from "./Header.styles";
import { useEffect, useState } from "react";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = ({ navigation }) => {
  const user = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogIn);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      setShowMenu(false);
    }
  }, [isLogin]);
  return (
    <View style={[styles.container]}>
      {!isLogin && (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={styles.btnText}>LogIn</Text>
        </Pressable>
      )}
      {isLogin && (
        <>
          <Pressable style={styles.button} onPress={() => setShowMenu(true)}>
            <Text style={styles.btnText}>{user.name}</Text>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{ uri: user.avatarURL }}
            />
          </Pressable>
          <UserMenu user={user} showMenu={showMenu} setShowMenu={setShowMenu} />
        </>
      )}
    </View>
  );
};
