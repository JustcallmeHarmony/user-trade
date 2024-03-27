import React from "react";
import { View,Text,StyleSheet, SafeAreaView } from 'react-native'
import Topbar from "../components/Topbar";


const Home = ({navigation}) => {
    return (
        <View>
            <SafeAreaView>
            <Topbar navigation={navigation}/>
            </SafeAreaView>
        </View>
    )
}




export default Home;