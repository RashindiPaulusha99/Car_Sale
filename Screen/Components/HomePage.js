import React from 'react';
import {StyleSheet} from 'react-native';
import { NativeBaseProvider,VStack,Heading,Button,Stack,Image, Divider, Center} from "native-base";


export default function HomePage() {
  return (
    <NativeBaseProvider>
       <VStack space={5} alignItems="center" >
          <Heading style={styles.heading}>𝓑𝓮𝓼𝓽𝓓𝓻𝓲𝓿𝓮</Heading>
          <Divider zIndex='2' bg="emerald.500" width='300' thickness="2" mx="2" orientation="horizontal" />
          <Heading style={styles.heading2} >𝘉𝘦𝘴𝘵 𝘊𝘢𝘳 𝘚𝘦𝘭𝘭𝘪𝘯𝘨 𝘈𝘯𝘥 𝘉𝘶𝘺𝘪𝘯𝘨 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮</Heading>
              <Stack mb="2.5" mt="400" direction={{base: "row",md: "column"}} space={2} mx={{base: "auto",md: "0"}}>
                <Button size="lg" style={styles.button} >Get Started</Button>
                
              </Stack>
              <Image shadow={2} source={{
                  uri: 'https://c0.wallpaperflare.com/preview/154/428/25/rolls-royce-spirit-of-ecstasy-car-phantom.jpg'
                 }} alt="Alternate Text" size="400" style={styles.bg_image}/> 
  
       </VStack>
       

    </NativeBaseProvider>
  
  )
}

const styles = StyleSheet.create({
    heading:{
      fontSize:60,
      position:'relative',
      top:30,
      paddingTop:70,
      zIndex:1,
      color:'white', 
    },
    heading2:{
      fontSize:15,
      position:'relative',
      top:-90,
      paddingTop:70,
      zIndex:1,
      color:'white', 
    },
    button:{
      width:200,
      borderRadius:80,
      zIndex:5,
      bottom:70,
      backgroundColor:'#12CBC4',
      fontSize:30
    },
    bg_image:{
      position:'absolute',
      top:0,
      height:700, 
    },
    box:{
      width:400,
      height:300,
      backgroundColor:'radial-gradient(circle at top,lightblue,#000)',
      zIndex:2,
      position:'absolute',
      bottom:-40,
      borderTopEndRadius:100,
    borderTopLeftRadius:100,
    borderTopStartRadius:100,
    borderTopRightRadius:100,
    
    }
})