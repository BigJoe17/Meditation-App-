
import { View, Text, FlatList  } from "react-native";
import { meditations } from "@/data";
import { MeditationListItem } from "@/components/MeditationListItem";


export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      contentContainerStyle={{gap: 20 }}
      className="bg-white"
      contentContainerClassName="gap-5 p-3 "
      renderItem={({ item }) => <MeditationListItem meditation={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
