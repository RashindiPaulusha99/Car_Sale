import React, { useEffect, useState } from 'react'
import { TouchableOpacity ,FlatList,StyleSheet} from 'react-native'
import {Image,NativeBaseProvider,Center,Flex,HStack,Stack,Heading,Box,AspectRatio,Pressable,Text} from 'native-base'


export default function ViewCars({navigation}) {
  const[posts,setPosts] = useState([]);
  const [selected, setSelected] = React.useState(1);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
        
    })

  return (
    <NativeBaseProvider style={styles.container}>
      
      <Center style={styles.center}>
      <Text style={styles.title}>Cars Store</Text>
      <FlatList style={styles.item} data={posts}
        renderItem={({item})=>
            <TouchableOpacity style={styles.touchableArea} onPress={()=>navigation.navigate("UpdateDeleteCar",{obj:item})}>
              <Center width='100%' style={styles.carLog} >
              <Box alignItems="center">
                  <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                      borderColor: "coolGray.600",backgroundColor: "gray.700"}} 
                      _web={{shadow: 2,borderWidth: 0}} 
                      _light={{backgroundColor: "gray.50"}}>
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{uri: "https://www.mercedes-benz.ie/passengercars/mercedes-benz-cars/coupe/range-overview/_jcr_content/swipeableteaserbox/par/swipeableteaser_1902035350/asset.MQ6.12.20210702110103.jpeg"}} alt="image" />
                      </AspectRatio>
                          <Center bg="#00b894"     
                            _text={{color: "warmGray.50",fontWeight: "700",fontSize: "xs"}} 
                              position="absolute" bottom="0" px="3" py="1.5">
                            OWNER CAR
                          </Center>
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">Mercides Benz</Heading>

                          <Text fontSize="xs" _light={{color: "red.600"}} fontWeight="bold"  mt="-1" ml="-1">
                          
                            $500
                          </Text>
                      </Stack>
                      <Text fontWeight="400">
                        Bengaluru (also called Bangalore) is the center of India's high-tech
                        industry. The city is also known for its parks and nightlife.
                      </Text>
                      <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                          <Text _light={{color: "blue.500"}} fontWeight="bold">
                            Colombo
                          </Text>
                        </HStack>
                        <HStack alignItems="center">
                          <Text color="coolGray.600" _dark={{color: "warmGray.200"}} fontWeight="400">
                            2022/02/12
                          </Text>
                        </HStack>
                      </HStack>
                    </Stack>
                  </Box>
                </Box>
              </Center>
              
            </TouchableOpacity>
        }
      />
      </Center>

      <Box flex={1} bg="#55efc4" safeAreaTop width="100%" maxW="400" height="10%" alignSelf="center" style={styles.footer}>
        
        <HStack style={{backgroundColor:'#00b894'}} alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => navigation.navigate("HomePage")}>
            <Center>
              
              <Text color="white"  fontSize="15">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => navigation.navigate("ViewCar")}>
            <Center>
              
              <Text color="white" fontSize="15">
                ViewCar
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => navigation.navigate("AddCar")}>
            <Center>
              
              <Text color="white" fontSize="15">
                AddCar
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => navigation.navigate("Login")}>
            <Center>
              
              <Text color="white" fontSize="15">
                Login
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>  

    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 1,
    },
    center:{
      backgroundColor:'black',
      
    },
    item: {
      backgroundColor: 'black',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color:'white',
      alignContent:'center',
      paddingTop:20
    },
    touchableArea:{
      borderWidth:1,
      marginBottom:10,
      borderRadius:10,
    },
    heading:{
      fontWeight:'bold',
      fontSize:25,
    },
    image:{
      width:300,
      height:150,
    },
    price:{
      fontSize:20,
      color:'black',
      fontWeight:'bold',
    },
    carLog:{
      alignItems:'center'
    },
    text:{
      fontWeight:'bold',
    },
    footer:{
      zIndex:2,
      position:'absolute',
      bottom:-10
    },
    buttonIcon: {
      width: 30,
      height: 30,
      margin: 10,
    },
    
  });