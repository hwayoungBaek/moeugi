
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <View style={styles.background}>
      <Text style={styles.headline_text}>Grid View Images</Text>
      <Text style={styles.explore_text}>Click on an image to view in full screen mode</Text>
      
      {/* Basic Usage */}
      <GridImageView data={[ 'favicon.png', 'favicon.png', 'favicon.png', 'favicon.png' ]} />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600'
  },
});
