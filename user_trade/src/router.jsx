import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import Neighborhood from "./pages/Neighborhood";
import NeighborhoodAdd from "./pages/NeighborhoodAdd";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
  
const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Neighborhood" component={Neighborhood} />
      <Stack.Screen name="NeighborhoodAdd" component={NeighborhoodAdd} />
    </Stack.Navigator>
  );
}


  const MainTab = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="홈" component={HomeTab} />
        <Tab.Screen name="검색" component={Search} />
        <Tab.Screen name="채팅" component={Chat} />
        <Tab.Screen name="프로필" component={Profile} />
      
      </Tab.Navigator>
    );
  };
  
  const Router = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainTab" component={MainTab} />
       
      </Stack.Navigator>
    );
  };
  export default Router;
