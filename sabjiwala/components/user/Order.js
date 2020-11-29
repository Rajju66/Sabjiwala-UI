import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import commonStyle from '../common/commonStyle';

const lstProducts = [
  {Id:1, Name: "Apple", ProductType:0, Price:100, Qty:0},
  {Id:2, Name: "Banana", ProductType:0, Price:40, Qty:0},
  {Id:3, Name: "Kiwi", ProductType:0, Price:25, Qty:0},
  {Id:4, Name: "Watermelon", ProductType:0, Price:50, Qty:0},
  {Id:5, Name: "Orange", ProductType:0, Price:40, Qty:0},
  {Id:6, Name: "Batata", ProductType:1, Price:50, Qty:0},
  {Id:7, Name: "Onion", ProductType:1, Price:70, Qty:0},
  {Id:8, Name: "Garlic", ProductType:1, Price:80, Qty:0},
  {Id:9, Name: "Lady Finger", ProductType:1, Price:35, Qty:0},
  {Id:10, Name: "eggplant", ProductType:1, Price:30, Qty:0},
  {Id:11, Name: "Wheat", ProductType:2, Price:120, Qty:0},
  {Id:12, Name: "Rice", ProductType:2, Price:90, Qty:0},
  {Id:13, Name: "Poha", ProductType:2, Price:30, Qty:0},
  {Id:14, Name: "Coconut Oil", ProductType:2, Price:145, Qty:0},
  {Id:15, Name: "Dry Fruits", ProductType:2, Price:620, Qty:0},
  {Id:16, Name: "Milk", ProductType:3, Price:28, Qty:0},
  {Id:17, Name: "Bread", ProductType:3, Price:30, Qty:0},
  {Id:18, Name: "Toast", ProductType:3, Price:10, Qty:0},
  {Id:19, Name: "Khari", ProductType:3, Price:10, Qty:0},
  {Id:20, Name: "Buttermilk", ProductType:3, Price:12, Qty:0},
];

export const Order = function(props) {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedQty, updateQty] = React.useState([]);
  const SelectedProduct = props.route != null && props.route.params != null && props.route.params.productList.length > 0 ? 
                        props.route.params.productList:
                        [];

   const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} key={item.Id} style={[styles.item, style]}>
        <View style={{width:"40%", paddingTop:10}}>
          <Text>{item.Name}</Text>
        </View>
        <View style={{width:"30%", paddingTop:10}}>
          <Text style={styles.titlePrice}>{item.Price} Rs x {item.Qty}</Text>
        </View>
        <View style={{width:"30%", flexDirection:"row"}}>
          <TouchableOpacity disabled={item.Qty == 0 ? true : false}
          onPress={(event) => removeProducts(event, item)}>
              <Icon name="ios-remove-circle" size={35} />    
          </TouchableOpacity>
          <Text style={{padding:8, fontSize:16, fontWeight:"bold"}}>{item.Qty}</Text>
          <TouchableOpacity onPress={(event) => addProducts(event, item)}>
              <Icon name="ios-add-circle" size={35} />    
          </TouchableOpacity>
        </View>   
      
      
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.Id === selectedId ? "#fff" : "#ffff";

    return (
      <View>
          <Item
                item={item}
                onPress={() => setSelectedId(item.Id)}
                style={{ backgroundColor }}
            />
      </View>
    );
  };

  const Total =() => {
    let total = 0;
    for(let i=0;i < SelectedProduct.length;i++)
    {
        if(SelectedProduct[i].Qty > 0)
        {
          total += SelectedProduct[i].Price * SelectedProduct[i].Qty;
        }
    }
    return(
      <View style={{top:15}}>
          <Text style={{fontSize:30, fontWeight:"bold"}}> Rs {total} </Text>
      </View>
    )
  }

  const removeProducts = (item,index) => 
  {
    SelectedProduct[index].Qty -= 1;
    updateQty([...selectedQty,SelectedProduct])
  }

  const addProducts = (item,index) =>
  {
      SelectedProduct[index].Qty += 1;
      updateQty([...selectedQty,SelectedProduct])
  }

  const removeItemFromCart = (index) =>{
    SelectedProduct.splice(index,1)
  }

  const onClickConfirmOrder = ()=>
  {
    let data = SelectedProduct.filter(p => {
      return p.Qty > 0 ;
    }); 
    if(data != null && data.length > 0)
    {
      props.navigation.navigate('Cart',{CartItem : data})
    }
    else
    {
      alert("Please select atleast one item !!!")
    }
  }

  return (
      <SafeAreaView style={styles.container}>
          <StatusBar translucent backgroundColor='rgba(0,0,0,0)' barStyle='default' />
          <View style={commonStyle.backButtonPosition}>
              <View>
                <TouchableOpacity style={commonStyle.backButtonPadding} 
                    onPress={() => props.navigation.goBack()}>
                    <Icon name="md-arrow-back" size={40} />    
                </TouchableOpacity>
              </View>
          </View>
            <View style={{top:"15%", paddingLeft:"5%",paddingRight:"5%", paddingBottom:"50%"}}>
              <ScrollView>
              {
                SelectedProduct.map((item, index)=>
                  <View style={{padding:5}} key={index}>
                    <View style={commonStyle.itemBorderStyle}>
                        <Text style={commonStyle.itemNameStyle}>{item.Name}</Text>
                        <Text style={commonStyle.itemPriceStyle}>{item.Price}/KG</Text> 
                        <View style={{width:"30%", flexDirection:"row"}}>
                          <TouchableOpacity disabled={item.Qty == 0 ? true : false}
                          onPress={() => removeProducts(item,index)}>
                              <Icon name="ios-remove-circle" size={35} />    
                          </TouchableOpacity>
                          <Text style={{padding:8, fontSize:16, fontWeight:"bold"}}>{item.Qty}</Text>
                          <TouchableOpacity onPress={() => addProducts(item,index)}>
                              <Icon name="ios-add-circle" size={35} />    
                          </TouchableOpacity>
                        </View>   
                    </View>
                  </View>
                )
              }
          </ScrollView>
            </View>       
          { SelectedProduct.length > 0 ? 
          <View style={styles.btnPosition}>
              <TouchableOpacity  style={styles.ButtonContainer} 
              onPress={()=> onClickConfirmOrder()}>
                  <Text style={styles.ButtonText}> Confirm Order </Text>
              </TouchableOpacity>              
              <Total/>
          </View>
           : null
           }          
      </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth:1,
    borderColor:"lightgrey",
    flexDirection:"row",
    elevation:7
  },
  titlePrice:{
    fontWeight:"bold"
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
