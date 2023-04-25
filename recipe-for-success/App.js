import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const PlaceholderImage = require('./assets/Recipe2.png');
const Box1Image = require('./assets/Meal.png');
const Box2Image = require('./assets/Chat.png');


export const Box1 = ({ imageSource }) => {
  return (
    <View
      style={{
        width: 525,
        height: 240,
        backgroundColor: '#ffffba',
        borderWidth: 1,
        borderColor: 'black',
        margin: 15, 
        borderRadius: 18,
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Image source={imageSource} style={{ width: '100%', height: '70%' }} />
      <Text style={{fontSize: 22, color: '#000', fontStyle: 'bold', marginBottom: 10}}>Recommended Meals</Text>
    </View>
  );
};

export const Box2 = ({ imageSource }) => {
  return (
    <View
      style={{
        width: 525,
        height: 240,
        backgroundColor: '#ffffba',
        borderWidth: 1,
        borderColor: 'black',
        margin: 10, 
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={imageSource} style={{ width: '100%', height: '70%' }} />
      <Text style={{fontSize: 22, color: '#000', fontStyle: 'bold', marginBottom: 10}}>Chats</Text>
    </View>
    );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Box1 imageSource={Box1Image} />
        <Box2 imageSource={Box2Image}/>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 8,
  },
  image: {
    width: 525,
    height: 240,
    borderRadius: 18,
  },
});
