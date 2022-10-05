import React from 'react';
import {StyleSheet } from 'react-native';
import { NativeBaseProvider, Box ,Center,Image,VStack,Heading,Button,Icon} from "native-base";


export default function HomePage() {
  return (
    <NativeBaseProvider>
       <VStack space={5} alignItems="center">
          <Heading style={styles.heading}>Buy Your Car</Heading>

          <Button size="lg" variant="subtle" colorScheme="secondary" style={styles.button}>
            GET STARTED  >
          </Button>
       </VStack>
       

    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
    heading:{
      fontSize:45,
      position:'relative',
      top:25,
      paddingTop:60,
    },
    button:{
      position:'absolute',
      top:600,
    }
})