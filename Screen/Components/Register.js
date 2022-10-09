import React, { useState } from 'react'
import {StyleSheet,Alert } from 'react-native'
import { NativeBaseProvider,Box,VStack,Heading,Button,FormControl,Text,Input,Image,Center,Link} from "native-base";

export default function Register({navigation}) {

  const[fullname,setFullName]=useState("");
  const[username,setUserName]=useState("");
  const[password,setPassword]=useState("");

  const saveData=()=>{
    if(fullname=="" || username=="" || password==""){
      Alert.alert("All Fields Are Required !")
    }else{
      fetch('http://192.168.1.4/posts',{
        method:'POST',
        body:JSON.stringify({
            fullname:fullname,
            username:username,
            password:password
        }),
        headers:{
            'Content-type':'Application/json'
        },
    })
    .then(response => {Alert.alert("Save Successfully"),navigation.navigator("Login") })
    .catch((error) =>{Alert.alert("Error Accurated")} )
    }
    
  }

  return (
    <NativeBaseProvider>
      <Center w="100%" style={styles.box}>
        <Box safeArea p="2" w="90%" maxW="290" py="8" height='390'>
          <Heading size="lg" color="white" fontWeight="semibold" fontSize="50" >
            SIGN UP
          </Heading>
          <Heading mt="1" color='white' fontWeight="medium" size="xs" >
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl bg='rgba(0,0,0,0.6)' width='100%'>
              <Input placeholder='Full Name' color='white' marginBottom='3' marginLeft='3' marginRight='3' value={fullname} onChangeText={(e)=>{setFullName(e)}} variant="underlined"/>
            </FormControl>
            <FormControl bg='rgba(0,0,0,0.6)' width='100%'>
              <Input placeholder='Username' color='white' marginBottom='3' marginLeft='3' marginRight='3' value={username} onChangeText={(e)=>{setUserName(e)}} variant="underlined"/>
            </FormControl>
            <FormControl bg='rgba(0,0,0,0.6)' width='100%'>
              <Input placeholder='Password' color='white' marginBottom='3' marginLeft='3' marginRight='3' type="password" value={password} onChangeText={(e)=>{setPassword(e)}} variant="underlined"/>
            </FormControl>
            <Button mt="2" colorScheme="primary" style={styles.button} onPress={()=>saveData() }>
              Sign up
            </Button>
            <Text fontSize="md" color='white' style={styles.old_user}>
                  Already have an account.{"    "}
            </Text>
            <Link  onPress={()=>{navigation.navigate("Login")}} style={styles.login}>
                <Text mt="0" fontSize="md" fontWeight="medium" color="primary.500">
                    Login
                </Text>
              </Link>
          </VStack>
        </Box>
      </Center>
      <Image shadow={2} source={{
                  uri: 'https://img.futurecar.com/202205/20/l_628856ef95d07.jpg'
                 }} alt="Alternate Text" size="400" style={styles.bg_image}/> 
    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
  box:{
    position:'relative',
    borderBottomEndRadius:50,
    borderBottomLeftRadius:50,
    borderBottomStartRadius:50,
    borderBottomRightRadius:50,
    zIndex:2,
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  button:{
    borderRadius:80,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    fontSize:10,
    position:'relative',
    top:10,
    left:60
  },
  bg_image:{
    position:'absolute',
    top:0,
    height:700, 
  },
  old_user:{
    position:'relative',
    top:150,
  },
  login:{
    position:'relative',
    top:113,
    left:200
  }
})