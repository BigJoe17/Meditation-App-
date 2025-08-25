import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { meditations } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Slider from '@react-native-community/slider'

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { top } = useSafeAreaInsets();

    const meditation = meditations.find(med => med.id === Number(id))

    if (!meditation) {
        return <Text>Meditation not found</Text>
    }
    return (
        <SafeAreaView className=" flex-1 bg-orange-500 p-4 justify-between">

            <View className="flex-1">

                <View className="flex-1">

                    <View className="flex-row  items-center justify-between p-10">
                        <AntDesign name="infocirlceo" size={20} color="black"

                        />

                        <View className="bg-gray-950 p-2 rounded-md">
                            <Text className="text-white font-semibold">Todays Meditation </Text>
                        </View>


                        <AntDesign
                            onPress={() => router.back()}
                            name="close"
                            size={24}
                            color="black"

                        />



                    </View>
                    <Text className="text-2xl mt-20 text-center text-zinc-800 font-semibold">{meditation?.title}</Text>
                </View>

                {/* play/pause Button */}

                <Pressable className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
                    <FontAwesome6 name="play" size={24} color="snow" />
                </Pressable>
                {/* Footer Player */}
                <View className="flex-1 ">

                    {/*footer Player  */}
                    <View className="mt-auto">
                        <View className="p-5 gap-5">
                            <View className="flex-row  justify-between">
                                <Feather name="airplay" size={24} color="#3A3937" />
                                <MaterialCommunityIcons name="cog-outline" size={24} color="#3A3937" />
                            </View>
                            {/* Playback controls */}
                            <View>
                                <Slider
                                    style={{ width: '100%', height: 40 }}
                                    value={0.5}
                                    onSlidingComplete={(value) => console.log(value)}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="#3A3937"
                                    maximumTrackTintColor="#3A3937"
                                    thumbTintColor="#3A3937"
                                />

                            </View>
                            <View className="flex-row justify-between">
                                <Text>3:45</Text>
                                <Text>5:00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

