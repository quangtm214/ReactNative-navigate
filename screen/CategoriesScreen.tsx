import CategoryGidTitle from "@/components/CategoryGidTitle";
import { CATEGORIES } from "@/data/dummy-data";
import Category from "@/models/category";
import React from "react";
import { FlatList, ListRenderItem, Text } from "react-native";

export default function CategoriesScreen({ navigation }: { navigation: any }) {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView", {
        categoryId: item.id,
        title: item.title,
      });
    };

    return (
      <CategoryGidTitle
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key={2}
    />
  );
}
