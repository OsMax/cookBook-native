import { Text, View, ScrollView } from "react-native";
import { styles } from "./RecipesList.styles";

export const RecipesList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.recipesList}>
        <Text style={{ color: "#fff" }}>Recipes</Text>
      </View>
    </ScrollView>
  );
};
