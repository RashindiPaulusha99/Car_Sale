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
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '5%',
  },
  avatarImage: {
    height: 150,
    width: 200,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius:20
  },
  addButton: {
    height: 50,
    width: 50,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    left: 160,
    bottom: 20,
  },
  addButtonIcon: {
    height: 50,
    width: 50,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: '650',
    color: 'white',
    marginTop: 5,
  },
});