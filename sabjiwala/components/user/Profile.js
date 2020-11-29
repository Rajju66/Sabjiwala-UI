import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, SafeAreaView } from 'react-native'
import commonStyle from '../common/commonStyle'
import Icon from 'react-native-vector-icons/Ionicons'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fName : 'Rajendra',
        lName : 'Malvi',
        email : 'malviraj6@gmail.com',
        mobile : '9033345756',
        address : 'E/75, Tirupati Soc., New Ranip',
        pincode : '382480'
    };
  }

  onPressLogout()
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
                this.props.navigation.replace('Login');
            } 
          }
        ],
        { cancelable: false }
      ); 
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar translucent backgroundColor='rgba(0,0,0,0)' barStyle='default' />
        <ScrollView>
          <View style={{position: 'absolute',paddingTop:"30%"}}>
              <TouchableOpacity style={{padding:25}} 
                  onPress={() => this.props.navigation.goBack()}>
                  <Icon name="md-arrow-back" size={40} />    
              </TouchableOpacity>
          </View>
                <View style={{alignSelf:"center", paddingTop:"30%"}}>
                    <Icon name="ios-person" size={100}/>
                </View>
                <View style={{paddingTop:"10%", paddingBottom:"10%"}}>
                    <View style={commonStyle.textInputView}>
                        <TextInput style={styles.textInputStyle} value={this.state.fName}
                        onChangeText={text => this.setState({fName:text})}
                        placeholderTextColor="black" placeholder="Firstname" />
                        {
                            this.state.fName == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Firstname</Text> 
                            : null
                        }

                    </View>
                    <View style={commonStyle.textInputView}>
                        <TextInput style={styles.textInputStyle} value={this.state.lName}
                        onChangeText={text => this.setState({lName:text})}
                        placeholderTextColor="lightgray" placeholder="Lastname" editable={false}/>
                    
                        {
                            this.state.lName == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Lastname</Text> 
                            : null
                        }
                    </View>
                    <View style={commonStyle.textInputView}>
                        <TextInput keyboardType="email-address" value={this.state.email}
                        onChangeText={(text) => this.validateEmail(text)}
                        style={styles.textInputStyle} 
                        placeholderTextColor="lightgray" placeholder="Email" editable={false}/>
                        {
                            this.state.email != "" && this.state.validate == false ? 
                            <Text style={commonStyle.validation}>Please enter valid email</Text> 
                            : null
                        }
                        {
                            this.state.email == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Email</Text> 
                            : null
                        }
                    </View>
                    <View style={commonStyle.textInputView}>
                        <TextInput keyboardType="number-pad" maxLength={10} value={this.state.mobile}
                        onChangeText={(text) => this.validateNumber(text)} 
                        style={styles.textInputStyle} 
                        placeholderTextColor="lightgray" placeholder="Mobile" editable={false}/>
                    
                        {
                            this.state.mobile == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter mobile</Text> 
                            : null
                        }
                        {
                            this.state.mobile.length < 0 || this.state.isValidate == false ? 
                                <Text style={commonStyle.validation}>Please enter valid number</Text> 
                            : null
                        }
                    </View>
                    <View style={commonStyle.textInputView}>
                        <TextInput style={styles.textInputStyle} value={this.state.address}
                        onChangeText={text => this.setState({address:text})} 
                        placeholderTextColor="lightgray" placeholder="Address" editable={false}/>

                        {
                            this.state.address == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Address</Text> 
                            : null
                        }
                    </View>
                    <View style={commonStyle.textInputView}>
                        <TextInput keyboardType="number-pad" style={styles.textInputStyle} value={this.state.pincode}
                        onChangeText={text => this.setState({pincode:text})} 
                        placeholderTextColor="lightgray" placeholder="Pincode" editable={false}/>
                    
                        {
                            this.state.pincode == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Pincode</Text> 
                            : null
                        }
                    </View>

                    <TouchableOpacity style={[commonStyle.ButtonContainer,{ marginHorizontal:50}]}
                    onPress={() => this.onPressLogout()}>
                        <Text style={commonStyle.ButtonText}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
      } ,
      textInputStyle:{
        paddingLeft:20,
        fontSize:18,
        marginHorizontal:20,
        height:50, 
        borderColor:'lightgray', 
        borderWidth:1,
        borderRadius:25,
        color:'#656565'
      }   
});
