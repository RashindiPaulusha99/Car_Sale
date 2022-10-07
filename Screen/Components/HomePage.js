import React from 'react';
import {StyleSheet} from 'react-native';
import { NativeBaseProvider,VStack,Heading,Button,Stack,Image} from "native-base";


export default function HomePage() {
  return (
    <NativeBaseProvider>
       <VStack space={5} alignItems="center" >
          <Heading style={styles.heading}>Best Car Buying And Selling Platform</Heading>

              <Stack mb="2.5" mt="400" direction={{base: "row",md: "column"}} space={2} mx={{base: "auto",md: "0"}}>
                <Button size="lg" style={styles.button}>LOGIN</Button>
                <Button size="lg" style={styles.button} colorScheme="secondary">REGISTER</Button>
              </Stack>
              <Image shadow={2} source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg'
                 }} alt="Alternate Text" size="400" style={styles.bg_image}/>     
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
      zIndex:1,
      color:'white'
    },
    button:{
      width:150,
      borderRadius:80,
      zIndex:1
    },
    bg_image:{
      position:'absolute',
      top:0,
      height:700,
      
    }
})