import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopBar = () => {
    const ls = ["Currently Reading", "All Books"];
    const [currSel, setCurrSel ] = useState(0);
    return (
        // refactor as top bar
        <View className="pt-8 pl-8 bg-blue-400 rounded-br-[120px]">
            <TouchableOpacity style={{ width: 36, height: 36 }} onPress={() => {
                // on click on search
            }}>
                <View>
                    <Ionicons name='search-outline' color="#D8D8D8" size={26} />
                </View>
            </TouchableOpacity>
            <View className="pb-10">
                <View className="flex-row mt-10 mb-4 ml-1">
                    <Text className="font-bold text-4xl text-white">My Books</Text>
                    <Text className="font-extralight text-4xl text-gray-100 opacity-50 "> |</Text>
                </View>
                <View className="flex-row mt-3">
                    {ls.map((val, idx) =>
                        <TouchableOpacity className={`mr-4 py-2 align-baseline rounded-full ${(currSel == idx)?"bg-[#5C9BE3] px-5":"ml-2"}`} onPress={() => {
                            setCurrSel(idx);
                            //  on click of reading buttons
                        }}>
                            <Text className="font-medium antialiased text-xl text-white">{val}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

export default TopBar