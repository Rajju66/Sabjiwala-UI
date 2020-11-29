import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export class splashscreen extends Component {
    state={
        isLoading: false
    }

    componentDidMount = async() =>
    {       
        this.setState({ isLoading: true });

        await AsyncStorage.getItem('userId').then(value =>
            this.setState({ userId: value })
            );
            if(this.state.userId != undefined && this.state.userId != null && this.state.userId != "")
            {                
                if (this.state.isLoading) {
                    setTimeout(() => {
                        this.props.navigation.replace('UserDrawer');
                        this.setState({ isLoading: false });   
                  }, 1000);
                }                             
            }
            else{
                setTimeout(() => {
                    this.props.navigation.replace('Covid');
                    this.setState({ isLoading: false });   
              }, 2000);
            }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.activityIndicatorSplash}>
                    <ActivityIndicator animating={this.state.isLoading} size="large" color="green"/>
                </View>
                <View style={styles.appLogo}>
                    <Image source={require('./../../images/sabjiwala.png')} 
                    style={{alignSelf:"center", width: 500, height: 350 }}/>
                </View>
 
                <View style={styles.appName}>
                    <Image source={require('./../../images/appname.png')} 
                    style={{alignSelf:"center", width: 300, height: 75 }}/>
                    <Image source={require('./../../images/tagline.png')} 
                    style={{alignSelf:"center", width: 300, height: 50 }}/>
                </View>
            </View>
        )
    }
}

export default splashscreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    appLogo: { position: 'absolute', top:"20%",right: 0, left: 0},
    appName: { position: 'absolute', bottom:"10%",right: 0, left: 0},
    activityIndicatorSplash: { position: 'absolute', bottom:"30%",right: 0, left: 0, zIndex:1 },
  });