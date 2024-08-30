import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealDetail({
  meal,
  style,
  textStyle,
}: {
  meal: any;
  style: any;
  textStyle: any;
}) {
  return (
    <View style={[styles.detail, style]}>
      <Text style={[styles.detailItem, textStyle]}>{meal.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.affordability.toUpperCase()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
