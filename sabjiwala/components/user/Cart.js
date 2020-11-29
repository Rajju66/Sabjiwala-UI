import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,BackHandler, SafeAreaView, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native';
import commonStyle from '../common/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const lstSubjiwala = [{Id:1, Name:"Ranchhod", Number:"0000000000"},{Id:2, Name:"Vijay", Number:"1111111111"},
{Id:3, Name:"Ramubhai", Number:"2222222222"},{Id:4, Name:"Lalabhai", Number:"3333333333"}]

export const Cart = function(props)
{
  const [selectRider, setSelectRider] = useState('false')
  const CartItem = props.route != null && props.route.params != null && props.route.params.CartItem.length > 0 ? 
                        props.route.params.CartItem:
                        [];

  const Total =() => {
    let total = 0;
    for(let i=0;i < CartItem.length;i++)
    {
        if(CartItem[i].Qty > 0)
        {
          total += CartItem[i].Price * CartItem[i].Qty;
        }
    }
    return(
      <View style={{top:15}}>
          <Text style={{fontSize:30, fontWeight:"bold"}}> Rs {total} </Text>
      </View>
    )
  }

  const onClickNext=()=>
  {
    setSelectRider('true')
  }

  useEffect(() => {
    const backAction = () => {
      if(selectRider == 'true')
      {
        setSelectRider('false') 
      }
      else
      {        
        backHandler.remove()
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

  }, []);

  const goBack =() => 
  {
    setSelectRider('false') 
  }

  const onPlaceOrder =() =>{
  Alert.alert(
        "Confirm !!!",
        "Are you sure want to place order to this sabjiwala ?",
        [
          {
            text: "Cancel",style: "cancel"
          },
          { text: "OK", 
            onPress: () => {
                goBack();
                Alert.alert("Success","Order has been placed successfully !!!")
                props.navigation.navigate('Dashboard')                
              } 
          }
        ],
        { cancelable: false }
      );

  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0)' barStyle='default' />
          {selectRider == 'true' ? <View>
             <View style={commonStyle.backButtonPosition}>
              <View>
                  <TouchableOpacity style={commonStyle.backButtonPadding} 
                      onPress={() => goBack()}>
                      <Icon name="md-arrow-back" size={40} />    
                  </TouchableOpacity>
                </View>
             </View>
              <View  style={{top:"15%", paddingLeft:"5%",paddingRight:"5%", paddingBottom:"30%"}}>
                <ScrollView>
                {
                  lstSubjiwala.map((person, index)=>
                  <View style={{paddingBottom:15}}>
                    <Card style={{borderWidth:1, borderColor:"lightgray", elevation:5}}>
                    <Card.Title title={person.Name} subtitle="Sabjiwala" />
                    <Card.Content style={{flexDirection:"row"}}>
                      <Title style={{width:"90%"}}>{person.Number}</Title>
                      <Icon style={{}} name="call" size={30}/>
                    </Card.Content>
                    <View style={{borderBottomWidth:1, borderBottomColor:"lightgrey",paddingTop:10}}></View>
                    <Card.Actions style={{alignSelf:"center"}}>
                      <Button onPress={() => onPlaceOrder()}>Place Order</Button>
                    </Card.Actions>
                  </Card>
                  </View>
                  )
                }
                </ScrollView>
              </View>
          </View> 
          : null}
          {selectRider == 'false' ? <View style={{backgroundColor:'#d9ffe3', paddingLeft:"5%", height:"15%"}}>
              <View style={{top:"15%", flexDirection:"row"}}>
                <Icon name="home" size={30}/>
                <Text style={{fontSize:18, fontWeight:"bold", left:10}}>Delivery at</Text>                
              </View>
              <View style={{top:"15%", flexDirection:"row", paddingLeft:30}}>
                  <Text style={{fontSize:15, fontWeight:"bold", left:10}}>E/75 Tirupati society, New Ranip, 382480</Text>                
              </View>
          </View> : null}
          {selectRider == 'false' ? <View style={{backgroundColor:'#ebedeb', paddingLeft:"5%", height:"20%"}}>
            <View style={{paddingTop: 15}}>
              <Text style={{fontSize:15, fontWeight:"bold"}}>S U P P O R T   Y O U R   R I D E R</Text>                
              <Text style={{fontSize:13,top:10}}>Our riders are risking their lives to serve the nation. While we're doing our best to support them, we'd request you to tip them generously in these difficult times, if you can afford it.</Text>                
            </View>
            <View style={{paddingTop: "10%", flexDirection:"row"}}>
              <Icon style={{top:5}} name="call" size={20}/>
              <Text style={{fontSize:18, fontWeight:"bold", left:10}}>Malvi Rajendra,  9033345756</Text>
            </View>
          </View> : null}
         { selectRider == 'false' ? <View style={{paddingBottom:"80%"}}>
            {
              CartItem.length > 0 ? 
              <ScrollView>
              {
                CartItem.map((item, index)=>
                  <View style={{padding:5}} key={index}>
                    <View style={{paddingBottom:"10%", flexDirection:"row"}}>
                        <Icon style={{top:15,paddingRight:10}} name="checkmark-circle" size={15}/>
                        <Text style={[commonStyle.itemNameStyle,{width:"49%"}]}>{item.Name}</Text>
                        <Text style={commonStyle.itemPriceStyle}>{item.Price}/KG x {item.Qty}</Text>                           
                        <Text style={commonStyle.itemPriceStyle}>Rs. {item.Price*item.Qty}</Text>                           
                    </View>
                    <View style={{borderBottomWidth:1}}></View>
                  </View>
                )
              }
              </ScrollView>
              : null
            }
            </View> : null }  
            { selectRider == 'false' && CartItem.length > 0 ? 
              <View style={styles.btnPosition}>
                  <TouchableOpacity  style={[styles.ButtonContainer,{backgroundColor:"#009942"}]} 
                  onPress={()=> onClickNext()}>
                      <Text style={styles.ButtonText}> Next </Text>
                  </TouchableOpacity> 
                  <Total/>
              </View>
              : null
            }  
    </SafeAreaView>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  btnPosition: { position: 'absolute', bottom:30, right: 0, left: 0, flexDirection:"row", width:"65%"},
    ButtonContainer: {
        elevation: 50,
        backgroundColor: '#000',
        borderRadius: 0,
        paddingVertical: 10,
        marginHorizontal: 10, 
        top:10,
        elevation:7,
        borderRadius:25,
        width:"95%"     
    },
    ButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
});
