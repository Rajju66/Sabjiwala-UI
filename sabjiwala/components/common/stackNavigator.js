import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Covid from "../authentication/covid";
import Dashboard from "../user/dashboard";
import Splash from "../common/splashscreen";
import UserDrawer from "../../routes/userDrawer";
const Stack = createStackNavigator();

class stackNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="Covid" component={Covid} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:true}}/>
            <Stack.Screen name="UserDrawer" component={UserDrawer} options={{headerShown:false}}/>
        </Stack.Navigator>
        
    );
  }
}

export default stackNavigator;
