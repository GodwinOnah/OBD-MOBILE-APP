import { ScrollView,View, Text } from 'react-native'
import {React,useState} from 'react'
import {Link,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import FormField from '../../components/FormField';

const Signin = () => {

    const [form,setForm] = useState({email:"",password:""});
    const [isSubmitting,setIsSubmitting] = useState(false);
  
    return (
    <SafeAreaView className="h-full"  style={{backgroundColor:'black'}}>
    <ScrollView contentContainerStyle={{height:'100%'}}>
          <View className="w-full min-h-[85vh] flex-1 items-center justify-center">
            
              <FormField
              title="Email"
              value={form.email}
              placeholder="Email address"
              handleChangeText={(e)=>setForm({...form,email:e})}
              otherStyles=""    
              />
               <FormField
              title="Password"
              value={form.passwrod}
              placeholder="Password"
              handleChangeText={(e)=>setForm({...form,password:e})}
              otherStyles=""            
              />                     
              <CustomButton 
              title="Login"
              handlePress={()=>router.push('/home')}
              containerStyle="w-[60%] h-[60px] rounded-2xl border-[1px] border-gold-100 mt-[50px] bg-white-100"
              textStyles="text-black-100 text-[30px] font-pregular p-auto"
              isLoading={isSubmitting}
              />           
              <Text className="italic mt-[40px] text-white-100 text-[20px]" >
                New User? 
            </Text>  
               <Link href="/signup" className="underline text-deepgold-100   text-[20px]">
                  <Text >
                    Register
                  </Text>
              </Link>            
          </View>  
    </ScrollView>
  </SafeAreaView>
  )
}

export default Signin

