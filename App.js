import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TocuableOpacity, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import * as MediaLibrary from 'expo-media-library';


export default class App extends React.Component {
  _mediaLibraryAsync = async() => {
    let { status } = await
    MediaLibrary.requestPermissionsAsync()
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: 'photo',
      })
      let video = await MediaLibrary.getAssetInfoAsync(media.assets[media.assets.length-1])

      console.log(video);
  };

  render() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
      <Button
        onPress={this._mediaLibraryAsync}
        title="Do MediaLibrary Stuff"/>
      </View>
    );      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  topBar: {
    paddingTop: 30,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#800',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const ImageView = () => {
  const imageViewStyle ={
    width: 100,
    height: 100,
  };
  return <View style={imageViewStyle}  />;
};