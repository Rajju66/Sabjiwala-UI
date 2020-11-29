import React,{Component} from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./components/common/stackNavigator";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import Splash from './components/common/splashscreen'
import Covid from './components/authentication/covid'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import Dashboard from './components/user/dashboard'
import Order from './components/user/Order'
import SelectSabjiwala from './components/user/SelecteSubjiwala'
import UserDrawer from './routes/userDrawer'

const AppNavigator = createStackNavigator({
  Splash:{
    screen:Splash,
    navigationOptions:{
      headerShown:false
    }
  },
  Covid:{
    screen:Covid,
    navigationOptions:{
      headerShown:false
    }
  },
  Login:{
    screen:Login,
    navigationOptions:{
      headerShown:false
    }
  },
  Register:{
    screen:Register,
    navigationOptions:{
      headerShown:false
    }
  },
  Dashboard:{
    screen:Dashboard,
    navigationOptions:{
      headerShown:false
    }
  },
  UserDrawer:{
    screen:UserDrawer,
    navigationOptions:{
      headerShown:false
    }
  },
  Order:{
    screen:Order,
    navigationOptions:{
      headerShown:false
    }
  },
  SelectSabjiwala:{
    screen:SelectSabjiwala,
    navigationOptions:{
      headerShown:false
    }
  }
});

export default createAppContainer(AppNavigator);