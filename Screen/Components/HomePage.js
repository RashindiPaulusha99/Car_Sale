import React from 'react';
import {StyleSheet} from 'react-native';
import { NativeBaseProvider,VStack,Heading,Button,Stack} from "native-base";


export default function HomePage() {
  return (
    <NativeBaseProvider>
       <VStack space={5} alignItems="center">
          <Heading style={styles.heading}>Best Car Buying And Selling Platform</Heading>

              <Stack mb="2.5" mt="400" direction={{base: "row",md: "column"}} space={2} mx={{base: "auto",md: "0"}}>
                <Button size="lg" >LOGIN</Button>
                <Button size="lg" colorScheme="secondary">REGISTER</Button>
              </Stack>
       </VStack>
       

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
})