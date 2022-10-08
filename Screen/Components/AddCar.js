import React from 'react'
import { View, Alert} from 'react-native'
import {NativeBaseProvider, Text,Input,VStack,Button} from 'native-base'

export default function AddCar({navigation}) {

  const[title,setTitle] = useState("");
  const[body,setBody] = useState("");
  const[id,setID] = useState("");

  const saveData=()=>{
      console.log(title+" "+body+" "+id)

      fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          body:JSON.stringify({
              title:title,
              body:body,
              userId:id
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
        <Text fontSize="lg" bold underline mt="10%" ml="40%">Add Data</Text>
        <VStack space={4} alignItems="center" mt="10%">
            <Input value={title} onChangeText={(e)=>{setTitle(e)}} size="md" mx="3" placeholder="Title" w="80%" />
            <Input value={body} onChangeText={(e)=>{setBody(e)}} size="md" mx="3" placeholder="Body" w="80%" />
            <Input value={id} onChangeText={(e)=>{setID(e)}} size="md" mx="3" placeholder="User ID" w="80%" />
            <Button onPress={() => saveData()} size="lg" colorScheme="secondary">Save Post</Button>
        </VStack>
    </NativeBaseProvider>
  )
}