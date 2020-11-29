import React, { Component, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ToastAndroid, Keyboard, ScrollView } from 'react-native';
import commonStyle from '../common/commonStyle';

export class login extends Component {

    state={
        email:'',
        password:'',
        validate:false,
        isSubmit:false, 
        userId:null,
        isLoading: false
    }

    async CheckLogin()
    {
        // Keyboard.dismiss()
        // this.setState({isSubmit:true})
        // if(this.state.email != "" && this.state.password != "" && 
        // this.state.isSubmit == true && this.state.validate == true)
        // {
        //     ToastAndroid.show("Successfully Login", ToastAndroid.LONG);
        // }
        this.props.navigation.replace('UserDrawer');
    }

    validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          this.setState({ email: text, validate : false })
        }
        else {
          this.setState({ email: text, validate : true })
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('./../../images/appname.png')} 
                    style={{alignSelf:"center", width: 300, height: 75, top:"20%" }}/>
                
                <View style={{top:"30%", paddingBottom:"100%"}}>
                    <View style={commonStyle.textInputView}>
                        <TextInput value={this.state.email}
                            onChangeText={(text) => this.validateEmail(text)} 
                            style={commonStyle.textInputStyle} keyboardType="email-address"
                            placeholder="Email" placeholderTextColor="lightgray"/>
                    
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
                        <TextInput value={this.state.password} secureTextEntry={true}
                            onChangeText={text => this.setState({password:text})} 
                            placeholderTextColor="lightgray"
                            style={commonStyle.textInputStyle} placeholder="Password"/>
                    
                        {
                            this.state.password == "" && this.state.isSubmit == true ? 
                            <Text style={commonStyle.validation}>Please Enter Password</Text> 
                            : null
                        }
                    </View>

                    <TouchableOpacity>
                            <Text style={styles.forgetPassword}>
                                Forgot Password ?
                            </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.CheckLogin()} style={commonStyle.appButtonContainer}>
                        <Text style={commonStyle.appButtonText}> Login </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Register")} style={{paddingTop:20}}>
                            <Text style={commonStyle.textLink}>Don't have an account ?</Text>
                    </TouchableOpacity>
                </View>   
                </ScrollView>             
            </View>
        )
    }
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
    forgetPassword:{paddingBottom:15, paddingRight:30,textAlign:"right",fontWeight:"bold",color:"black"}    
});