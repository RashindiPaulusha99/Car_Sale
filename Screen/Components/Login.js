import React from 'react'
import { Text,StyleSheet } from 'react-native';
import { NativeBaseProvider,Box,VStack,Heading,Button,FormControl,HStack,Input,Link,Center} from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
       <Center w="100%" bg="primary.400" style={styles.box1}>
          <Box safeArea p="2" py="8" w="90%" maxW="290" height='500'>
            <Heading paddingTop='10' size="lg" fontWeight="700" color="coolGray.800" _dark={{color: "warmGray.50"}} fontSize="50">
              LOGIN
            </Heading>
            <Heading mt="1" _dark={{color: "warmGray.200"}} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl paddingTop='5'>
                <FormControl.Label>Username</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl paddingTop='5'>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
                <Link paddingTop='5' _text={{fontSize: "xs",fontWeight: "500",color: "indigo.500"}} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button mt="2" colorScheme="indigo" style={styles.button}>
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center" style={styles.new_user}>
                <Text fontSize="md" color="coolGray.600" _dark={{color: "warmGray.200"}}>
                  Don't have an account.{"    "}
                </Text>
                <Link _text={{color: "indigo.500",fontWeight: "medium",fontSize: "md"}} href="#" >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
        </Box>
      </Center>
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
    borderBottomRightRadius:50
  },
  button:{
    borderRadius:80,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    fontSize:10,
    position:'relative',
    top:35,
    left:60,
    
  },
  new_user:{
    position:'relative',
    top:70,
  }
  
})