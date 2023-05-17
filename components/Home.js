import React from 'react';
import { Text, View } from 'react-native';
import TopBar from './TopBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PdfView from './PdfView';


const Home = () => {
    return (
        <View className="flex-col h-screen">
            <TopBar />
            <View className="flex-grow flex-col items-center" >
                <PdfView pdfName={"Pdf ka naam"} pdfSize={"20.2Mb"} pdfClick={() => {
                    // On pdf click
                }} />
            </View>
            <View className="h-20 flex-row justify-around">
                <Ionicons name='folder-open-outline' size={32} />
                <Ionicons name='folder-open-outline' size={32} />
            </View>
        </View>
    );
}

export default Home;