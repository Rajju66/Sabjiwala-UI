import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar,Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-ionicons'

export function DrawerContent (props) {

  const onPressLogout = () =>
  {
    Alert.alert(
      "Logout",
      "Are you you want to logout ?",
      [
        {
          text: "Cancel",style: "cancel"
        },
        { text: "OK", 
          onPress: () => {
              props.navigation.replace('Login');
          } 
        }
      ],
      { cancelable: false }
    ); 
  }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <View style={{flexDirection:"row", marginTop:15}}>
                        <Icon name="ios-contact" size={65}/>
                        <View style={{marginLeft:15, flexDirection:"column"}}>
                          <Title style={styles.title}>Malvi Rajendra</Title>
                          <Caption style={styles.caption}> malviraj6@gmail.com </Caption>
                        </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.topDrawerSection}>
                        <DrawerItem 
                            icon={({color,size}) =>(
                                <Icon name="md-person" color={color} size={size}/>
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Dashboard')}}/>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      paddingBottom:20      
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingBottom:20
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    topDrawerSection:{
      paddingLeft:15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

