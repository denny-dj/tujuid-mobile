import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Login, Register, Splash, UploadPhoto,Home, Creator, Message, Profile, ChooseCreator, Chatting } from '../pages';
import { BottomNavigator } from '../components';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Creator" component={Creator} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name="ChooseCreator" component={ChooseCreator} options={{headerShown: false}} />
            <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;