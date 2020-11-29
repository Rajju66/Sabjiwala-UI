import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import commonStyle from '../common/commonStyle';
import {Picker} from '@react-native-community/picker';

export class register extends Component {
    state = {
        fName : '',
        lName : '',
        email : '',
        mobile : '',
        address : '',
        pincode : '',
        type:'',
        category:'',
        password : '',
        validate : false,
        isValidate: true,
        isSubmit: false,
    }

    componentDidMount()
    {
        this.setState({validate:false,isSubmit:false});
    }

    validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          this.setState({ email: text, validate : false })
        }
        else {
          this.setState({ email: text, validate : true })
        }
      }

    registerUser()
    {  
        this.setState({isSubmit:true})

        if (this.state.fName != "" && this.state.lName != "" && 
        this.state.email != "" && this.state.mobile != "" && this.state.mobile.length == 10 && this.state.isValidate == true && 
        this.state.address != "" && this.state.pincode != "" && this.state.type != "" && this.state.password != "" && 
        this.state.isSubmit == true && this.state.validate == true)
        {
            firebase.database().ref('UsersList/').push({
               fname : this.state.fName,
               lname : this.state.lName,
               email : this.state.email,
               mobile : this.state.mobile,
               address : this.state.address,
               pincode : this.state.pincode,
               type : this.state.type,
               category : this.state.category,
               password : this.state.password,
               createDate : Date.now()
            }).then((data)=>{
                this.setState({
                    fName : '',
                    lName : '',
                    email : '',
                    mobile : '',
                    address : '',
                    pincode : '',
                    password : ''
                });
                this.props.navigation.replace('Login');
                ToastAndroid.show("Successfully Registered", ToastAndroid.LONG);
            }).catch((error)=>{
                alert(error)
            })
        }
    }

    validateNumber = (text) => {
        let reg = /^[6-9][0-9]{9}$/;
        if (reg.test(text) === false) {
          this.setState({ mobile: text, isValidate : false })
        }
        else {
          this.setState({ mobile: text, isValidate : true })
        }
    }

    onSelectType(itemValue)
    {
      if(itemValue == "0")
        this.setState({type: itemValue, category:0})   
      else
        this.setState({type: itemValue, category:''})
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>

                    <View>
                        <Text style={{fontSize:30,textAlign:'center',paddingTop : "20%", paddingBottom: 50}}>Register Now</Text>
                        <View style={commonStyle.textInputView}>
                            <TextInput style={commonStyle.textInputStyle} value={this.state.fName}
                            onChangeText={text => this.setState({fName:text})}
                            placeholderTextColor="lightgray" placeholder="Firstname"/>
                            {
                                this.state.fName == "" && this.state.isSubmit == true ? 
                                <Text style={commonStyle.validation}>Please Enter Firstname</Text> 
                                : null
                            }

                        </View>
                        <View style={commonStyle.textInputView}>
                            <TextInput style={commonStyle.textInputStyle} value={this.state.lName}
                            onChangeText={text => this.setState({lName:text})}
                            placeholderTextColor="lightgray" placeholder="Lastname"/>
                        
                            {
                                this.state.lName == "" && this.state.isSubmit == true ? 
                                <Text style={commonStyle.validation}>Please Enter Lastname</Text> 
                                : null
                            }
                        </View>
                        <View style={commonStyle.textInputView}>
                            <TextInput keyboardType="email-address" value={this.state.email}
                            onChangeText={(text) => this.validateEmail(text)}
                             style={commonStyle.textInputStyle} 
                             placeholderTextColor="lightgray" placeholder="Email"/>
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
                            style={commonStyle.textInputStyle} 
                            placeholderTextColor="lightgray" placeholder="Mobile"/>
                        
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
                            <TextInput style={commonStyle.textInputStyle} value={this.state.address}
                            onChangeText={text => this.setState({address:text})} 
                            placeholderTextColor="lightgray" placeholder="Address"/>

                            {
                                this.state.address == "" && this.state.isSubmit == true ? 
                                <Text style={commonStyle.validation}>Please Enter Address</Text> 
                                : null
                            }
                        </View>
                        <View style={commonStyle.textInputView}>
                            <TextInput keyboardType="number-pad" style={commonStyle.textInputStyle} value={this.state.pincode}
                            onChangeText={text => this.setState({pincode:text})} 
                            placeholderTextColor="lightgray" placeholder="Pincode"/>
                        
                            {
                                this.state.pincode == "" && this.state.isSubmit == true ? 
                                <Text style={commonStyle.validation}>Please Enter Pincode</Text> 
                                : null
                            }
                        </View>
                        <View style={styles.dropDownStyle}>
                          <Picker
                              selectedValue={this.state.type}
                              style={{height: 50, width: "100%"}}
                              onValueChange={(itemValue, itemIndex) =>
                                this.onSelectType(itemValue)
                              }>
                              <Picker.Item label="Please Select Type" value="" />
                              <Picker.Item label="Buyer" value="0" />
                              <Picker.Item label="Vendor" value="1" />
                            </Picker>                            
                        </View>
                        <View style={{paddingBottom:10}}>
                          {
                            this.state.type == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Select Type</Text> 
                            : null
                          }
                        </View>
                        {
                          this.state.type == 1 ?
                          <View style={styles.dropDownStyle}>
                            <Picker
                                selectedValue={this.state.category}
                                style={{height: 50, width: "100%"}}
                                onValueChange={(itemValue, itemIndex) =>
                                  this.setState({category : itemValue})
                                }>
                                <Picker.Item label="Sabjiwala" value="0" />
                                <Picker.Item label="Groccery" value="1" />
                                <Picker.Item label="Dairy" value="2" />
                            </Picker>
                          </View> : null
                        }
                        <View style={commonStyle.textInputView}>
                            <TextInput style={commonStyle.textInputStyle} value={this.state.password}
                            onChangeText={text => this.setState({password:text})} 
                            secureTextEntry={true} placeholderTextColor="lightgray"
                             placeholder="Password"/>
                        
                            {
                                this.state.password == "" && this.state.isSubmit == true ? 
                                <Text style={commonStyle.validation}>Please Enter Password</Text> 
                                : null
                            }
                        </View>

                        <TouchableOpacity  style={commonStyle.appButtonContainer} onPress={()=> this.registerUser()}>
                            <Text style={commonStyle.appButtonText}> Register </Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Login")} style={{paddingTop:20}}>
                            <Text style={commonStyle.textLink}>Back to Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}

export default register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    textStyle:{
      paddingTop : 20,
      paddingBottom: 15,
      textAlign:'center',
      fontSize:30,
      fontFamily:'open sans'
    },
    dropDownStyle:{borderWidth:1,borderColor:"lightgray", marginBottom:10, borderRadius:30,
    marginHorizontal:20  
  }
  });