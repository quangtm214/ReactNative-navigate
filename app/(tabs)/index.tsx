import { Image, StyleSheet, Platform } from "react-native";
import CategoriesScreen from "@/screen/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreem from "@/screen/MealOverViewScreem";
import MealDetailScreen from "@/screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Stack.Screen name="MealsOverView" component={MealOverViewScreem} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
