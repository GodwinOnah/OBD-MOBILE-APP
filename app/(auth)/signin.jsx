import { ScrollView,View, Text } from 'react-native'
import React from 'react'
import {Link,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import FormField from '../../components/FormField';

const Signin = () => {
  return (
    <SafeAreaView className="h-full"  style={{backgroundColor:'skyblue'}}>
    <ScrollView contentContainerStyle={{height:'100%'}}>
          <View className="w-full min-h-[85vh] flex-1 items-center justify-center">
            
              <FormField
              title="Email"
              value=""
              placeholder="Email address"
              handleChangeText={()=>{}}
              otherStyles={()=>{}}    
              />
               <FormField
              title="Password"
              value=""
              placeholder="Password"
              handleChangeText={()=>{}}
              otherStyles="with-[40px]"            
              />
              
              
            
              <CustomButton 
              title="Login"
              handlePress={()=>router.push('/home')}
              containerStyle="w-[100px] h-[60px] mt-[100px] bg-deepgreen-100"
              textStyles="text-white text-[30px] font-pregular p-auto"
              isLoading={false}
              />
            
            
              <Text className="text-ash italic mt-[40px]  text-[20px]" >
                New User? 
            </Text>  
            <CustomButton 
              title="Register"
              handlePress={()=>router.push('/signup')}
              containerStyle=""
              textStyles="underline ml-2  text-[20px] text-white"
              isLoading={false}
              />
             
        
              {/* <Link href="/home" style={{fontSize:40, marginTop:200, color:"white",backgroundColor:"black"}}>
                  <Text >
                    Start &gt;
                  </Text>
              </Link> */}            
          </View>  
    </ScrollView>
  </SafeAreaView>
  )
}

export default Signin

