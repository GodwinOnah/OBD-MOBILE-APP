import { ScrollView,View, Text } from 'react-native'
import {React,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/customButton';
import {Link,router} from 'expo-router';
import FormField from '../../components/FormField';

const Signup = () => {
    const [form,setForm] = useState({username:"",email:"",phone:"",password:"",confirmPassword:""});
    const [isSubmitting,setIsSubmitting] = useState(false);
    return (
        <SafeAreaView className="h-full" style={{backgroundColor:'black'}}>
        <ScrollView contentContainerStyle={{height:'100%'}}>
              <View className="w-full min-h-[85vh] flex-1 items-center justify-center">
              <FormField
              title="Username"
              value={form.username}
              placeholder="Username"
              handleChangeText={(e)=>setForm({...form,username:e})}
              otherStyles=""             
              />
              <FormField
              title="Email"
              value={form.email}
              placeholder="Email address"
              handleChangeText={(e)=>setForm({...form,email:e})}
              otherStyles=""             
              />
              <FormField
              title="Phone"
              value={form.phone}
              placeholder="Mobile Number"
              handleChangeText={(e)=>setForm({...form,phone:e})}
              otherStyles=""            
              />
               <FormField
              title="Password"
              value={form.password}
              placeholder="Enter password"
              handleChangeText={(e)=>setForm({...form,password:e})}
              otherStyles="with-[40px]"       
              />
               <FormField
              title="Confirm Password"
              value={form.confirmPassword}
              placeholder="Re-enter password"
              handleChangeText={(e)=>setForm({...form,confirmPassword:e})}
              otherStyles="with-[40px]"       
              />
                  <CustomButton 
                  title="Register"
                  handlePress={()=>router.push('/signin')}
                  containerStyle="w-[40%] h-[60px] rounded-2xl border-[1px] border-gold-100 mt-[50px] bg-white-100"
                  textStyles="text-black-100 text-[30px] font-pregular p-auto"
                  isLoading={false}
                  />             
               <Link href="/signin" className="underline text-deepgold-100 mt-7  text-[20px]">
                  <Text >
                   Login
                  </Text>
              </Link>         
              </View>      
        </ScrollView>
      </SafeAreaView>
      )
    }
    
export default Signup