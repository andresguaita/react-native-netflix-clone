import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Popular } from "../components/Popular";
import { Search } from "../components/Search";


export const SearchScreen = () => {

  const [textValue, setTextValue] = useState('');


  return (
    <View style={{zIndex: -999}} >
      <View style={styles.inputContainer}>
        <View style={styles.inputBack}>

          <Icon
            name='search-outline'
            color='rgba(255, 255, 255, 0.51)'
            size={30}

          />

          <TextInput
            placeholder="Search for a show, movie, genre, etc"
            placeholderTextColor="#FFFFFF8A"
            style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            value={textValue}
            onChangeText={setTextValue}
          />

          <Icon
            name='mic-outline'
            color='rgba(255, 255, 255, 0.51)'
            size={30}

          />
        </View>
        
      </View>
      {

      textValue===''? <Popular/> : <Search name= {textValue}/>

      }
    </View>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 397,
    height: 46,
    left: 9,
    top: 20,
    zIndex: 999

  },
  inputBack: {
    backgroundColor: '#323232',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
 
})