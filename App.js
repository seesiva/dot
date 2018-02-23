import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import data from './dbstore/data.json'
export default class App extends React.Component {

  render() {
   // let todaysDate=;

    return (
      <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'red'}}>சிவாயநம{"\n"}</Text>
      <Text style={{fontWeight: 'bold', color: 'green'}}> திருவளர்  பெருந்துறை  சிவோன்மத்தன்</Text>
      <Text style={{fontWeight: 'bold', color: 'green'}}> திருவடி போற்றி போற்றி {"\n\n"}</Text>
      <Image source={ nalvarImage } />
      <Text style={{fontWeight: 'bold', color:'blue'}}>{"\n\n"}நால்வர் பொற்றாள்  எம் உயிர்த்துணையே </Text>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>{"\n\n"}தினம் ஒரு திருக்கோவையார்{"\n\n"}</Text>
       {/*<Text>{ Date()}</Text>*/}
        <Button
         onPress={() => {
           let x=data.json;
           var array = [];
           for (let prop in data) {
            // console.log(prop);
            array.push(data[prop]);
          }
          console.log(data["songs"].length);
          Alert.alert(data["songs"][3].song);
        }}
title="இன்றைய திருமுறை"
  color="#841584"
  accessibilityLabel="இன்றைய திருமுறை"
/>
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
