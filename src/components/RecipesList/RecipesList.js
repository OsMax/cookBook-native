import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "./RecipesList.styles";
import { ReadRecipe } from "../ReadRecipe/ReadRecipe";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPublic } from "../../redux/recipe/recipeOperation";
import { selectRecipes } from "../../redux/recipe/recipeSelector";
import { selectIsLogIn } from "../../redux/auth/authSelector";
import { recipesItem } from "../RecipesListItem/RecipesListItem";

export const RecipesList = ({ page, setPage, count, editShow }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [readRecipe, setReadRecipe] = useState(null);
  const recipes = useSelector(selectRecipes);
  const isLogIn = useSelector(selectIsLogIn);

  useEffect(() => {
    if (!(recipes.length % count)) dispatch(getPublic({ page, count }));
  }, [page]);
  return (
    <View style={styles.container}>
      <View style={styles.recipesList}>
        {/* <Text style={{ color: "#fff" }}>Recipes</Text> */}
        <FlatList
          style={{
            width: "98%",
            paddingBottom: 20,
            marginBottom: isLogIn ? 30 : 0,
          }}
          data={recipes}
          renderItem={({ item }) =>
            recipesItem({ navigation, item, editShow, setReadRecipe })
          }
          keyExtractor={(item) => item._id}
          onEndReached={() => {
            if (!(recipes.length % count)) setPage(page + 1);
          }}
        />
      </View>
      {readRecipe && (
        <ReadRecipe recipe={readRecipe} setReadRecipe={setReadRecipe} />
      )}
    </View>
  );
};
