import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import { images } from '../../assets';

export function ImagePickerAvatar({ uri, onPress }) {
  return (
    <ImageBackground
      style={styles.imageBackground}>
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? { uri } : images.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
        <Text style={styles.usernameText}>Upload Image</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    top:45,
    height:230,
    backgroundColor:'white',
    width:330,
    paddingBottom:10,
    borderRadius:20
  },
  avatar: {
    alignItems: 'center',
    
  },
  avatarImage: {
    height: 180,
    width: 300,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 3,
    borderTopRightRadius:40,
    borderBottomLeftRadius:40,
    top:10
  },
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    left: 280,
    bottom: 30,
  },
  addButtonIcon: {
    height: 50,
    width: 50,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: '650',
    color: 'black',
    marginTop: 20,
  },
});