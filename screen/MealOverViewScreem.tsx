import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "@/components/MealItem";
import Meal from "@/models/meal";
export default function MealOverViewScreem({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId)?.title;
    navigation.setOptions({ title: categoryTitle, headerBackTitle: "Back" });
  }, [catId, navigation]);

  const renderMealItem = ({ item }: { item: Meal }) => {
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem meal={mealItemProp} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
