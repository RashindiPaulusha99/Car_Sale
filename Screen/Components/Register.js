import React from 'react'
import {StyleSheet } from 'react-native'
import { NativeBaseProvider,Box,VStack,Heading,Button,FormControl,HStack,Input,Link,Center} from "native-base";


export default function Register() {
  return (
    <NativeBaseProvider>
      <Center w="100%" bg="primary.400" style={styles.box}>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{color: "warmGray.50"}} fontWeight="semibold" fontSize="50" >
            REGISTER
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{color: "warmGray.200"}} fontWeight="medium" size="xs" >
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Full Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo" style={styles.button}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
  box:{
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
    top:55,
    left:60
  }
})