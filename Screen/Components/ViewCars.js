import React, { useEffect, useState } from 'react'
import { View, Text,TouchableOpacity ,FlatList,StyleSheet,} from 'react-native'

export default function ViewCars() {
  const[posts,setPosts] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
        
    })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Load All</Text>
      <FlatList
      style={styles.item}
        data={posts}
        renderItem={({item})=>
            <TouchableOpacity style={{borderWidth:1,marginBottom:'5%'}} onPress={()=>navigation.navigate("Update",{obj:item})}>
              <Text style={{fontWeight:'bold'}}>{item.title}</Text>
              <Text>{item.body}</Text>
            </TouchableOpacity>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color:'black'
    },
  });