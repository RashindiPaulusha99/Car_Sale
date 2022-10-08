import React from 'react'
import { StyleSheet } from 'react-native';
import { NativeBaseProvider,Box,VStack,Heading,Button,FormControl,HStack,Input,Link,Center,Image,Text} from "native-base";


export default function Login({navigation}) {

  return (
    <NativeBaseProvider>
       <Center w="100%"  style={styles.box1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290" height='510'>
            <Heading paddingTop='1' size="lg" fontWeight="700" color='white' fontSize="50">
              LOGIN
            </Heading>
            <Heading mt="1" color='white' fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl bg='rgba(0,0,0,0.6)' width='100%'>
                <Input color='white' marginBottom='3' marginLeft='3' marginRight='3' size="sm" placeholder='Enter Username' variant="underlined" />
              </FormControl>
              <FormControl bg='rgba(0,0,0,0.6)'>
                <Input type="password" color='white' marginBottom='3' marginLeft='3' marginRight='3' size="sm" placeholder='Enter Password' variant="underlined"/>
              </FormControl>
              <FormControl>
              <Link paddingTop='20' _text={{fontSize: "sm",fontWeight: "500",color: "primary.500"}} alignSelf="center" mt="20">
                  Forget Password?
                </Link>
              </FormControl>
              <Button mt="2" colorScheme="primary" style={styles.button} onPress={()=>{
                  navigation.navigate("AddCar")
                }}>
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center" style={styles.new_user}>
                <Text fontSize="md" color='white'>
                  Don't have an account.{"    "}
                </Text>
                <Link  onPress={()=>{navigation.navigate("Register")}} >
                  <Text mt="0" fontSize="md" fontWeight="medium" color="primary.500">
                    Sign Up
                  </Text>
                </Link>
              </HStack>
            </VStack>
        </Box>
      </Center>
      <Image shadow={2} source={{
                  uri: 'https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-08/CC850%20HEADER.jpg?h=722a6ce8&itok=Y4CN8Y5Y'
                 }} alt="Alternate Text" size="400" style={styles.bg_image}/> 
    </NativeBaseProvider>
   
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:30,
    position:'relative',
    top:30,
    paddingTop:70,
  },
  box1:{
    position:'relative',
    borderBottomEndRadius:50,
    borderBottomLeftRadius:50,
    borderBottomStartRadius:50,
    borderBottomRightRadius:50,
    zIndex:2,
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  button:{
    borderRadius:80,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    fontSize:10,
    position:'relative',
    top:0,
    left:60,
    
  },
  new_user:{
    position:'relative',
    top:-10,
  },
  bg_image:{
    position:'absolute',
    top:0,
    height:700, 
  },
  
})