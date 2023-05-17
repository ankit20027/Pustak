import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';


const PdfView = ({ pdfName, pdfSize, pdfClick }) => {
  return (
    <TouchableOpacity className="w-80 mt-12 py-3 px-8 flex-row justify-start items-center rounded-full border-2 border-slate-200" onPress={()=> {
        // on click on pdf
        pdfClick();
    }}>
        <Ionicons name='document-text-outline' size={32} color={"#BF1011"} />
        <View className="ml-3">
            <Text className="font-medium text-base" >{pdfName}</Text>
            <Text className="font-medium text-xs text-gray-400/80" >{pdfSize}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default PdfView