import { Home } from "../screens/Home/Home";
import { RegistrationScreen } from "../screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { RecipesScreen } from "../screens/Recipes/RecipesSceen";
import { current } from "../redux/auth/authOperation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Stack = createStackNavigator();

export const StartApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    // const user = useSelector(selectUser);
    // if (!user.name) {
    //   navigation.navigate("Recipes");
    // }
  }, []);
  return (
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
        <Stack.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
