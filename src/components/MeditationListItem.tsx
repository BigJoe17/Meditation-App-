import { View, Text } from "react-native";
import { Meditation } from "@/types";

export function MeditationListItem({ meditation }: { meditation:Meditation }) {

  return (
    <View className="p-5  border rounded-2xl border-gray-300">
      <Text className="text-2xl font-semibold">{meditation.title}</Text>
  
    </View>
  );
}