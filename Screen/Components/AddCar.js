import React,{useState,useCallback} from 'react'
import { View, Alert,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import {NativeBaseProvider,Center,Stack,Icon, Text,Input,VStack,Button,Flex,Pressable} from 'native-base'

import * as ImagePicker from 'react-native-image-picker';

import { ImagePickerModal } from './ImagePickerModal';
import { ImagePickerAvatar } from './ImagePickerAvatar';

export default function AddCar({navigation}) {

  const[brand,setBrand] = useState("");
  const[fuelType,setFuelType] = useState("");
  const[seats,setSeats] = useState("");
  const[transmissionType,setTransmissionType] = useState("");
  const[price,setPrice] = useState(0.0);
  const[distance,setDistance] = useState(0);

  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;


  const saveData=()=>{

      fetch('http://localhost:4000/car',{
          method:'POST',
          body:JSON.stringify({
              brand:brand,
              fuelType:fuelType,
              seats:seats,
              transmissionType:transmissionType,
              price:price,
              distance:distance
          }),
          headers:{
              'Content-type':'Application/json; charset=UTF-8'
          },
      })
      .then(response => {Alert.alert("Save Successfully")})
      .catch((error) =>{Alert.alert("Error Accurated")} )
  }

  return (
    <NativeBaseProvider>
        <Center w="100%" bg="primary.400">
          <Text fontSize="40" bold mt="10%" ml="3%" color='white'>Add Car</Text>

          <Center width='100%' height='50%' bg='red.200'>
         
          <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
          </Center>

          <VStack space={4} alignItems="center" mt="10%">
          <Flex direction="row" mb="2.5" mt="1.5" >
            <Input value={brand} onChangeText={(e)=>{setBrand(e)}} size="md" mx="3" placeholder="Brand" w="40%" color='white' variant="underlined"/>
            <Input value={fuelType} onChangeText={(e)=>{setFuelType(e)}} size="md" mx="3" placeholder="Fuel Type" w="40%" color='white' variant="underlined"/>
          </Flex>
          <Flex direction="row" mb="2.5" mt="1.5" >
            <Input value={seats} onChangeText={(e)=>{setSeats(e)}} size="md" mx="3" placeholder="Seats" w="40%" color='white' variant="underlined"/>
            <Input value={transmissionType} onChangeText={(e)=>{setTransmissionType(e)}} size="md" mx="3" placeholder="Transmission Type" w="40%" color='white' variant="underlined"/>
          </Flex>    
          <Flex direction="row" mb="2.5" mt="1.5" >
            <Input value={price} onChangeText={(e)=>{setPrice(e)}} size="md" mx="3" placeholder="Price" w="40%" color='white' variant="underlined"/>
            <Input value={distance} onChangeText={(e)=>{setDistance(e)}} size="md" mx="3" placeholder="Distance" w="40%" color='white'variant="underlined" />
          </Flex>    
          <Button onPress={() => saveData()} size="lg" colorScheme="secondary">Save Car</Button>
          
          
          </VStack>
        </Center>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});