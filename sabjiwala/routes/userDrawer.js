import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Dashboard from './../components/user/dashboard'
import Profile from './../components/user/Profile'
import Wallet from './../components/user/Wallet'
import OrderHistory from './../components/user/OrderHistory'
import Order from '../components/user/Order'
import Cart from '../components/user/Cart'
import Rewards from './../components/user/Rewards'
import Setting from './../components/user/Setting'
import Legal from './../components/user/Legal'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeTintColor:'white',
      activeBackgroundColor:'grey'}} initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Cart"  component={Cart}  />
        <Drawer.Screen name="Order"  component={Order} />
        <Drawer.Screen name="OrderHistory" component={OrderHistory} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Rewards" component={Rewards} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Legal" component={Legal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}