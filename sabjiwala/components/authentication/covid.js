import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CommonStyle from './../common/commonStyle'

export class covid extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.delLogo}>
                    <Image source={require('./../../images/delivery.png')} 
                    style={{alignSelf:"center", width: 200, height: 350 }}/>
                    <View style={{paddingTop:"20%"}}>
                        <Image source={require('./../../images/safety.png')} 
                        style={{alignSelf:"center", width: 350, height: 50 }}/>
                    </View>
                </View>
                <View style={styles.btnPosition}>
                    <TouchableOpacity  style={styles.ButtonContainer} 
                    onPress={()=>this.props.navigation.push("Login")}>
                        <Text style={styles.ButtonText}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.ButtonContainer} 
                    onPress={()=>this.props.navigation.push("Register")}>
                        <Text style={styles.ButtonText}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default covid


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#009942"
    },
    delLogo: { position: 'absolute', top:"10%",right: 0, left: 0},
    btnPosition: { position: 'absolute', bottom:30, right: 0, left: 0, flexDirection:"row"},
    ButtonContainer: {
        elevation: 50,
        backgroundColor: '#000',
        borderRadius: 0,
        paddingVertical: 10,
        marginHorizontal: 10, 
        top:10,
        elevation:7,
        borderRadius:25,
        width:"45%"     
    },
    ButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
  });