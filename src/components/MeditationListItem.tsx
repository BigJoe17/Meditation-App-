import { View, Text, Pressable} from "react-native";
import { Meditation } from "@/types";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";


export function MeditationListItem({ meditation }: { meditation: Meditation }) {

    return (

        <Link href={`/meditation/${meditation.id}`} asChild>
            <Pressable className="flex-row items-center gap-5">

                <View className=" bg-green-700 rounded-full p-2">
                    <FontAwesome name="check" size={18} color="white" />
                </View>

                <View className=" flex-1 p-5  border rounded-2xl border-gray-300">

                    <Text className="text-2xl font-semibold">{meditation.title}</Text>

                    <View className="flex-row items-center gap-2 mt-2">
                        <FontAwesome6 name="clock-rotate-left" size={16} color="#6B7280" />
                        <Text className="text-gray-500"> {meditation.duration} min</Text>
                    </View>
                    <Text className="text-blue-500">Start Meditation</Text>
                </View>

            </Pressable>
        </Link>
    );
}