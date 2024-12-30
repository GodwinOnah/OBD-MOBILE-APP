import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs,Redirect} from 'expo-router';
import {icons} from '../../constants';

const TabIcon = ({color,icon,name,focused})=>{
        return(
        <View className="items-center justify-center gap-1 w-20 mt-2">
            <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-45 h-5"  
            />
            <Text className={`${focused?'font-psemibold':'font-pregular'}`}
                    style={{fontSize:8, color:{color}}}>
                {name}
            </Text>
        </View>
        )
}
const TabsLayout = () => {
  return (
    <>
    <Tabs 
    screenOptions={{
        tabBarShowLabel:false, //this will remove the default label
        tabBarActiveTintColor:'purple',
        tabBarInactiveTintColor:'white',
        tabBarStyle:{
            backgroundColor:"skyblue",
            height:50
        } 
            
  }}
    >
        {/* Home tab */}
        <Tabs.Screen 
        name="home" 
        options={{
            title:'Home',
            headerShown:false,
            tabBarIcon: ({color,focused})=>(
                    <TabIcon 
                        color={color}
                        icon={icons.home}
                        name="Home" 
                        focused={focused}                         
                            />
            )
            }}/>

             {/* Bookmark tab */}
            <Tabs.Screen 
        name="bookmark" 
        options={{
            title:'Bookmark',
            headerShown:false,
            tabBarIcon: ({color,focused})=>(
                    <TabIcon 
                        color={color}
                        icon={icons.bookmark}
                        name="Bookmark" 
                        focused={focused}                         
                            />
            )
            }}/>
            {/* Create tab */}
            <Tabs.Screen 
        name="create" 
        options={{
            title:'Create',
            headerShown:false,
            tabBarIcon: ({color,focused})=>(
                    <TabIcon 
                        color={color}
                        icon={icons.plus}
                        name="Create" 
                        focused={focused}                         
                            />
            )
            }}/>
            {/* Profile tab */}
            <Tabs.Screen 
        name="profile" 
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon: ({color,focused})=>(
                    <TabIcon 
                        color={color}
                        icon={icons.profile}
                        name="Profile" 
                        focused={focused}                         
                            />
            )
            }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout