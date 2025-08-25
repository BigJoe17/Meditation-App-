import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { meditations } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Slider from '@react-native-community/slider'
// @ts-ignore
import audio from '@assets/meditations/audio1.mp3'




export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const player = useAudioPlayer(audio);
    const status = useAudioPlayerStatus(player)

    const meditation = meditations.find(med => med.id === Number(id))

    // Debug: Add console.log to see what values we're getting
    // console.log('Audio Status:', {
    //     currentTime: status.currentTime,
    //     duration: status.duration,
    //     playing: status.playing
    // });

    const formatSeconds = (timeValue: number | null) => {
        if (!timeValue || timeValue === 0) return '0:00';
        
        // Try both seconds and milliseconds format
        let totalSeconds: number;
        
        // If the value is very large, it's likely in milliseconds
        if (timeValue > 1000) {
            totalSeconds = Math.floor(timeValue / 1000);
        } else {
            // Otherwise, it's already in seconds
            totalSeconds = Math.floor(timeValue);
        }
        
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    if (!meditation) {
        return <Text>Meditation not found</Text>
    }
    return (
        <SafeAreaView className=" flex-1 bg-orange-500 p-4 justify-between">

            <View className="flex-1">
-
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

                <Pressable onPress={() => player.playing ? player.pause() : player.play()} className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
                    <FontAwesome6
                        name={status.playing ? "pause" : "play"}
                        size={24}
                        color="snow"
                    />
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
                                    value={status.duration && status.currentTime ? status.currentTime / status.duration : 0}
                                    onSlidingComplete={(value) => {
                                        if (status.duration) {
                                            player.seekTo(value * status.duration);
                                        }
                                    }}
                                    minimumValue={0}
                                    maximumValue={1}
                                    minimumTrackTintColor="#3A3937"
                                    maximumTrackTintColor="#D1D5DB"
                                    thumbTintColor="#3A3937"
                                />
                            </View>
                            <View className="flex-row justify-between">
                                <Text className="text-zinc-700 font-medium">
                                    {formatSeconds(status.currentTime || 0)}
                                </Text>
                                <Text className="text-zinc-700 font-medium">
                                    {formatSeconds(status.duration || 0)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

