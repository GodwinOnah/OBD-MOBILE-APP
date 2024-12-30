import { ScrollView,View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import {Link,router} from 'expo-router';
import FormField from '../../components/FormField';

const Signup = () => {
    return (
        <SafeAreaView className="bg-primary, h-full" style={{backgroundColor:'skyblue'}}>
        <ScrollView contentContainerStyle={{height:'100%'}}>
              <View className="w-full h-full flex-1 items-center justify-center">
              <FormField
              title="Username"
              value=""
              placeholder="Username"
              handleChangeText={()=>{}}
              otherStyles={()=>{}}             
              />
              <FormField
              title="Email"
              value=""
              placeholder="Email address"
              handleChangeText={()=>{}}
              otherStyles={()=>{}}             
              />
              <FormField
              title="Phone"
              value=""
              placeholder="Mobile Number"
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
                  title="Signup"
                  handlePress={()=>router.push('/signin')}
                  containerStyle="w-[200px] h-[60px] mt-[50px] bg-deepgreen-100"
                  textStyles="text-white text-[30px] font-pregular p-auto"
                  isLoading={false}
                  />
               
              
                <CustomButton 
                    title="Login"
                    handlePress={()=>router.push('/signin')}
                    containerStyle=""
                    textStyles="italic underline text-[20px] text-ash mt-[40px]"
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
    

export default Signup