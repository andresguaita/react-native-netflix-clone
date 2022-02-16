import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getMovieByName } from "../api/getMovieByName";


export const Search = ({ name }) => {

    const [searchMovies, setSearchMovies] = useState([]);

    const windowswith = Dimensions.get('window').width

    const {bottom }= useSafeAreaInsets()



    useEffect(() => {
        
        getMovieByName(name)
            .then(movies=> {
                setSearchMovies(movies)
             
            })
            .catch(e => {
                console.log(e)
            })

    }, [name]);


    return (
        
       

            <ScrollView
             
             > 
              <View style={{...styles.title, width: windowswith}}>
                  <Text style={{color: 'white', marginLeft: 10}}>TV SHOWS & MOVIES</Text>
              </View>
                 <View style={styles.container}>
                 {
                    searchMovies && searchMovies.map(movie=>
                       ( 
                       
                       <Image source={{uri: `${movie.image}`}} style={{...styles.imageContainer,  width: windowswith * 0.28,}} key={movie.id}/>
                       
                       )
                    )
                }
                 </View>
                
             </ScrollView>

    );
};

const styles= StyleSheet.create({

    container:{
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25,
        marginBottom: 95
    },
    imageContainer: {
        marginHorizontal: 10,
        height: 191,
        marginBottom: 25,
        
       
    },
    title:{
        height: 28,
        fontSize: 20,
        marginTop: 28,
        backgroundColor: '#323232',
        justifyContent: 'center'
    }
})