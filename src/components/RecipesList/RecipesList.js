import { View, FlatList } from "react-native";
import { styles } from "./RecipesList.styles";
import { ReadRecipe } from "../ReadRecipe/ReadRecipe";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPublic } from "../../redux/recipe/recipeOperation";
import { selectRecipes } from "../../redux/recipe/recipeSelector";
import { recipesItem } from "../RecipesListItem/RecipesListItem";

export const RecipesList = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [readRecipe, setReadRecipe] = useState(null);

  const recipes = useSelector(selectRecipes);

  const dispatch = useDispatch();
  // dispatch(getPublic({ page, count }));

  useEffect(() => {
    dispatch(getPublic({ page, count }));
  }, [page]);
  return (
    <View style={styles.container}>
      <View style={styles.recipesList}>
        {/* <Text style={{ color: "#fff" }}>Recipes</Text> */}
        <FlatList
          style={{ width: "95%", marginBottom: 30 }}
          data={recipes}
          renderItem={({ item }) => recipesItem({ item, setReadRecipe })}
          keyExtractor={(item) => item._id}
        />
      </View>
      {readRecipe && (
        <ReadRecipe item={readRecipe} setReadRecipe={setReadRecipe} />
      )}
    </View>
  );
};
