import React,{useState,useCallback} from 'react'
import {  Alert,StyleSheet} from 'react-native'
import {NativeBaseProvider,Center,Image, Text,Input,VStack,Button,Flex} from 'native-base'

import * as ImagePicker from 'react-native-image-picker';

import { ImagePickerModal } from './ImagePickerModal';
import { ImagePickerAvatar } from './ImagePickerAvatar';

export default function AddCar({navigation}) {

  const[date,setDate] = useState("");
  const[location,setLocation] = useState("");
  const[brand,setBrand] = useState("");
  const[price,setPrice] = useState(0.0);

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
              
              date:date,
              location:location,
              brand:brand,
              price:price
          }),
          headers:{
              'Content-type':'Application/json; charset=UTF-8'
          },
      })
      .then(response => {Alert.alert("Save Successfully")})
      .catch((error) =>{Alert.alert("Error Accurated")} )
  }

  return (
    <NativeBaseProvider >
        <Center w="100%"  height='100%' style={styles.body}>
        <Button onPress={() => navigation.navigate("ViewCars")}  style={styles.button1}>View All</Button>

          <Center width='100%' height='30%'>
            <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
            <ImagePickerModal isVisible={visible} onClose={() => setVisible(false)} onImageLibraryPress={onImageLibraryPress} onCameraPress={onCameraPress}/>
          </Center>

          <VStack space={4} alignItems="center" mt="25%" style={styles.details} >
           
              <Input value={date} onChangeText={(e)=>{setDate(e)}} size="md" placeholder="Date" w="80%" color='white' variant="underlined"/>
              <Input value={location} onChangeText={(e)=>{setLocation(e)}} size="md" mx="3" placeholder="Location" w="80%" color='white' variant="underlined"/>
              <Input value={brand} onChangeText={(e)=>{setBrand(e)}} size="md" mx="3" placeholder="Brand" w="80%" color='white' variant="underlined"/>
              <Input value={price} onChangeText={(e)=>{setPrice(e)}} size="md" mx="3" placeholder="Price" w="80%" color='white' variant="underlined"/>
            
          
            <Flex direction="row" mb="2" >
              <Button onPress={() => saveData()}  mt='2' style={styles.button}>Save</Button>
              <Button onPress={() => saveData()}  mt='2' style={styles.button2}>Clear</Button>
            </Flex>
            
          
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
    backgroundColor: '#00b894',
    marginBottom: 10, 
    borderTopLeftRadius:70,
    borderBottomRightRadius:70,
    width:150,
    top:10
  },
  button2: {
    backgroundColor: '#f0932b',
    marginBottom: 10,
    borderTopLeftRadius:70,
    borderBottomRightRadius:70,
    width:150,
    marginLeft:10,
    top:10
  },
  button1: {
    backgroundColor: '#218c74',
    top:15,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    width:100,
    marginLeft:250,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  details:{
    backgroundColor:'#1e272e',
    padding:10,
    borderTopEndRadius:60,
    borderTopLeftRadius:60,
    borderTopStartRadius:60,
    borderTopRightRadius:60,
    top:-5,
    height:320,
    width:380
  },
  body:{
    zIndex:1,
    backgroundColor:'white'
  }
});