import React from 'react'
import { Text,StyleSheet } from 'react-native';
import { NativeBaseProvider,Box,VStack,Heading,Button,FormControl,HStack,Input,Link,Center} from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
       <Center w="100%"  color="gray.500" style={styles.box}>
          <Box safeArea p="2" py="8" w="90%" maxW="290" >
            <Heading size="lg" fontWeight="700" color="coolGray.800" _dark={{color: "warmGray.50"}}>
              Welcome
            </Heading>
            <Heading mt="1" _dark={{color: "warmGray.200"}} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Username</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
                <Link _text={{fontSize: "xs",fontWeight: "500",color: "indigo.500"}} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button mt="2" colorScheme="indigo">
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{color: "warmGray.200"}}>
                  I'm a new user.{" "}
                </Text>
                <Link _text={{color: "indigo.500",fontWeight: "medium",fontSize: "sm"}} href="#">
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
  box:{
    position:'relative',
    borderBottomEndRadius:50,
    borderBottomLeftRadius:50,
    borderBottomStartRadius:50,
    borderBottomRightRadius:50
  },
  
})