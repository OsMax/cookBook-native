import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Home } from "./src/screens/Home/Home";
import { RegistrationScreen } from "./src/screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingUp"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingIn"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
});
