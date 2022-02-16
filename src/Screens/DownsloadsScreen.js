import React from "react";
import { StyleSheet, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";

export const DownsloadsScreen = () => {
  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
        <Icon name='arrow-down' color='#000000' size={120}  style={{alignSelf: 'center'}}/>
      </View>
      <View>
        
      </View>
      <View style={{width: 295,height:46, marginTop: 10}}>
      <Text style={styles.textStyle}>Movies and TV shows that you download appear here.</Text>
      </View>
      <View style={{position: 'absolute'}}>
        <View style={styles.button}>
        <Text style={styles.textStyle2}>Find Something to Download</Text>
        </View>
      </View>
      
      </View>
      
  )
};

const styles = StyleSheet.create({
  iconContainer:{
    display: 'flex',
    justifyContent: 'center',
    height: 194,
    width: 194,
    backgroundColor: '#323232',
    borderRadius: 100,

  },
  textStyle:{
    color: 'white', 
    flexWrap: 'wrap', 
    textAlign : 'center', 
    fontSize: 19
  },
  textStyle2:{
    color: 'black', 
    textAlign : 'center', 
    fontSize: 15
  },
  button:{
    width: 295,
    height:46, 
    marginTop: 10, 
    top: 220,
    backgroundColor: 'white', 
    justifyContent:'center', 
    borderRadius: 6,

  }
})