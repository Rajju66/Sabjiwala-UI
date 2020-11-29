import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const currentLocationButton = function(props) {
    const cb = props.cb ? props.cb : () => console.log('Error............');
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={styles.locationBtn} onPress={() => { cb() }}>
                <Icon style={{alignSelf:'center', top:7}} name="locate" size={35} /> 
            </TouchableOpacity>             
        </View>
    )
}

export default currentLocationButton

const styles = StyleSheet.create({
    container: {
      zIndex:1,
      position:'absolute',
      width:50,
      height:50,
      right:"5%",
      bottom:"35%"
    },
    locationBtn:{
        borderWidth:0, 
        borderRadius:25,
        height:50,
        width:50,
        backgroundColor:'white',
        shadowOpacity:1.0,
        shadowColor:'#fff', elevation:10
    }
  });