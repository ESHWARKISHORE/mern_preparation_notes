import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </View>
  );
}
