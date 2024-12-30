import { View, Text } from 'react-native'
import React from 'react'
import { Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
        <>
        <Stack>
        <Stack.Screen name="Signin" options={{headerShown:false}}/>
        <Stack.Screen name="Signup" options={{headerShown:false}}/>
        </Stack>
        <StatusBar style={{ style:"light",backgroundColor:"black"}}/> {/*Status bar from expo-status-bar*/}
        </>
    
  )
}

export default AuthLayout