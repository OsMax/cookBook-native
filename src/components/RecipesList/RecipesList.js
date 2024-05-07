import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "./RecipesList.styles";
import { ReadRecipe } from "../ReadRecipe/ReadRecipe";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPublic } from "../../redux/recipe/recipeOperation";
import { selectRecipes } from "../../redux/recipe/recipeSelector";
import { selectIsLogIn } from "../../redux/auth/authSelector";
import { recipesItem } from "../RecipesListItem/RecipesListItem";

export const RecipesList = ({ navigation, page, setPage, count, editShow }) => {
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(10);
  const [readRecipe, setReadRecipe] = useState(null);
  const [showMore, setShowMore] = useState(true);

  const recipes = useSelector(selectRecipes);
  const isLogIn = useSelector(selectIsLogIn);

  const dispatch = useDispatch();
  // dispatch(getPublic({ page, count }));

  useEffect(() => {
    if (recipes.length % count) setShowMore(false);
    else setShowMore(true);

    dispatch(getPublic({ page, count }));
  }, [page]);
  return (
    <View style={styles.container}>
      <View style={styles.recipesList}>
        {/* <Text style={{ color: "#fff" }}>Recipes</Text> */}
        <FlatList
          style={{
            width: "95%",
            paddingBottom: 20,
            marginBottom: isLogIn ? 30 : 0,
          }}
          data={recipes}
          renderItem={({ item }) => recipesItem({ item, setReadRecipe })}
          keyExtractor={(item) => item._id}
        />
        {showMore && (
          <Pressable
            onPress={() => {
              setPage(page + 1);
              console.log(page);
            }}
          >
            <View>
              <Text style={{ padding: 10, fontSize: 16, color: "#fff" }}>
                Show more
              </Text>
            </View>
          </Pressable>
        )}
      </View>
      {readRecipe && (
        <ReadRecipe recipe={readRecipe} setReadRecipe={setReadRecipe} />
      )}
    </View>
  );
};
