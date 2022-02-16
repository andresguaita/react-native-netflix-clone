import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import { getDataApiPopular } from "../api/getPopularMovie";

export const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getDataApiPopular()
            .then(pop => {
                setPopular(pop)
            })
            .catch(e=>{
                console.log(e)
            })

    }, []);

    return (
        <ScrollView>
         <Text style={styles.textTitle}>Popular Searches</Text>
           { popular && popular.map(movie => (
           
           <View style={styles.listContainer} key={movie.id}>
               <Image
                   style={styles.imageSyle}
                   source={{ uri: `${movie.image}` }}
               />
               <View style={{width: 286, height: 83, display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>             
              <View style={{ width: '70%', justifyContent: 'center'}}>
              <Text style={styles.textStyle}>{movie.title}</Text>
              </View>
               <Icon name='caret-forward' size={30} color='white' style={{alignSelf: 'center', marginRight: 5}}/>
                   
               </View>
               
               
           </View>
           ))}
        </ScrollView>
        

    );
};

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 414,
        height: 83,
        backgroundColor: '#202020',
        marginBottom: 15,
    },
    imageSyle: {
        width: 128,
        height: 83,
    },
    textStyle:{
        color: 'white',
        marginLeft: 5, 
        fontSize: 16, 
        textAlign: 'left',
        flexWrap: 'wrap'
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        marginHorizontal: 9,
        marginBottom: 10
     }
})