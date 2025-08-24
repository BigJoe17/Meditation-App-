import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

import { meditations } from "@/data";

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const meditation = meditations.find(med => med.id === Number(id))

    if (!meditation) {
        return <Text>Meditation not found</Text>
    }
    return (
        <Text>{meditation?.title}</Text>
    )
}