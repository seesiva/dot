import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
   // let todaysDate=;
    return (
      <View style={styles.container}>
      <Image source={ nalvarImage } />
      <Text style={{fontWeight: 'bold', color: 'red'}}>சிவாயநம</Text>
      <Text style={{fontWeight: 'bold'}}>தினம் ஒரு திருமுறை</Text>
        <Text>{ Date()}</Text>
    
      </View>
    );
  }
}
export const nalvarImage = require('./img/nalvar.png'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
