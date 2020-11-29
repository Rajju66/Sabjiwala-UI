import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, StatusBar, ToastAndroid, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import GetLocation from 'react-native-get-location'
import CurrentLocationButton from '../common/currentLocationButton'
import {Picker} from '@react-native-community/picker';
import { SearchBar, Divider } from 'react-native-elements';
import commonStyle from '../common/commonStyle'

const lstProducts = [
  {Id:1, Name: "Apple", ProductType:0, Price:100, Qty:0},
  {Id:2, Name: "Banana", ProductType:0, Price:40, Qty:0},
  {Id:3, Name: "Kiwi", ProductType:0, Price:25, Qty:0},
  {Id:4, Name: "Watermelon", ProductType:0, Price:50, Qty:0},
  {Id:5, Name: "Orange", ProductType:0, Price:40, Qty:0},
  {Id:6, Name: "Mango", ProductType:0, Price:40, Qty:0},
  {Id:7, Name: "PineApple", ProductType:0, Price:40, Qty:0},
  {Id:8, Name: "Dragon Food", ProductType:0, Price:40, Qty:0},
  {Id:9, Name: "Graps", ProductType:0, Price:40, Qty:0},
  {Id:10, Name: "Papaya", ProductType:0, Price:40, Qty:0},
  {Id:11, Name: "Batata", ProductType:1, Price:50, Qty:0},
  {Id:12, Name: "Onion", ProductType:1, Price:70, Qty:0},
  {Id:13, Name: "Garlic", ProductType:1, Price:80, Qty:0},
  {Id:14, Name: "Lady Finger", ProductType:1, Price:35, Qty:0},
  {Id:15, Name: "eggplant", ProductType:1, Price:30, Qty:0},
  {Id:16, Name: "Wheat", ProductType:2, Price:120, Qty:0},
  {Id:17, Name: "Rice", ProductType:2, Price:90, Qty:0},
  {Id:18, Name: "Poha", ProductType:2, Price:30, Qty:0},
  {Id:19, Name: "Coconut Oil", ProductType:2, Price:145, Qty:0},
  {Id:20, Name: "Dry Fruits", ProductType:2, Price:620, Qty:0},
  {Id:21, Name: "Milk", ProductType:3, Price:28, Qty:0},
  {Id:22, Name: "Bread", ProductType:3, Price:30, Qty:0},
  {Id:23, Name: "Toast", ProductType:3, Price:10, Qty:0},
  {Id:25, Name: "Khari", ProductType:3, Price:10, Qty:0},
  {Id:26, Name: "Buttermilk", ProductType:3, Price:12, Qty:0},
];

export class dashboard extends Component {

  constructor(props) {
    super(props);
    this.state={
        item:'0',
        props:'',
        region:null,
        productList:[],
        SelectedProduct:[],
        NumberOfItem:0,
        search:'',
        subjiMarkers: [{
            uid:1,
            title: 'Ranchhod',
            coordinates: {
                latitude: 23.0847561,
                longitude: 72.5642447,
            },
          },
          {
            uid:2,
            title: 'Fruits wala',
            coordinates: {
              latitude: 23.0872196,
              longitude: 72.5601374
            },  
          },
          {
            uid:3,
            title: 'sabjiwala',
            coordinates: {
              latitude: 23.0859908,
              longitude: 72.5606351
            },  
          },
          {
            uid:3,
            title: 'Kaka',
            coordinates: {
              latitude: 23.0837044,
              longitude: 72.5594255
            },  
          },
          {
            uid:3,
            title: 'Ghansyam',
            coordinates: {
              latitude: 23.0915082,
              longitude: 72.5662173
            },  
          }
        ],
        dairyMarker:[{
            uid:1,
            title: 'Ganesh Dairy',
            coordinates: {
              latitude: 23.0877807,
              longitude: 72.5589493
            }
          },
          {
            uid:2,
            title: 'Mother Dairy',
            coordinates: {
              latitude: 23.0870654,
              longitude: 72.5637706
            }
          },
          {
            uid:3,
            title: 'Murlidhar Dairy',
            coordinates: {
              latitude: 23.0808074,
              longitude: 72.5614917
            }
          }
      ],
        groceryMarker:[{
          uid:1,
          title: 'Rajkamal',
          coordinates: {
            latitude: 23.0855301,
            longitude: 72.558406 
          }
        },
        {
          uid:1,
          title: 'Charbhuja',
          coordinates: {
            latitude: 23.0891337,
            longitude: 72.5621348
          }
        },
      ]
    }
  }

    componentDidMount()
    {
        this._getLocationAsyn();
        let data = lstProducts.filter(p => {
          return p.ProductType == 0 ;
         });
         this.setState({productList:data, NumberOfItem : 0, SelectedProduct:[]});
    }

    _getLocationAsyn = async() =>{
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true
        })
        .then(location => {
            let region = {
                latitude:location.latitude,
                longitude:location.longitude,
                latitudeDelta:0.009,
                longitudeDelta:0.009
            }
            this.setState({region:region})
        })
        .catch(error => {
            const { code, message } = error;
            ToastAndroid.show(message, ToastAndroid.SHORT);
        })
    }

    centerMap()
    {
        const {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta } = this.state.region;

            this.map.animateToRegion({
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta
            })
    }

    onSelectProductType(productType)
    {
      this.setState({item : productType})
      let data = lstProducts.filter(p => {
        return p.ProductType == productType ;
      }); 
      this.setState({productList:data});  
      this.props.navigation.navigate('Order',{productList:data.length > 0 ? data : 0})
    }

    gotoCart()
    {
      let productList = this.state.productList.filter(p => {
        return p.Qty > 0 ;
       });
      this.props.navigation.navigate('Order',{productList:productList.length > 0 ? productList : 0})
    }

    updateSearch = (search) => {
      this.setState({ search });      
      if(search != undefined && search != '')
      {
        this.props.navigation.navigate('SelectItem')
      }
    };

    onClearSearch = () =>{
      this.setState({ search : '' });
    }

    render() {
      const { search } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0)' barStyle='default' />
                <MapView
                    style={{width:"100%",height:"70%"}}
                    initialRegion={this.state.region}
                    showsCompass={true}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    rotateEnabled={false}
                    mapType="terrain"
                    provider={PROVIDER_GOOGLE}
                    ref={(map) => {this.map = map}}
                    >
                        {
                            this.state.subjiMarkers.map((sabji,index) => (
                                <MapView.Marker.Animated key={index}
                                coordinate={sabji.coordinates}
                                anchor={{x : 0.35,y: 0.32}}
                                ref={sabji => {this.sabji = sabji}}
                                style={{width:50, height:50}}
                                title={sabji.title}>
                
                                    <Image source={require('./../../images/mapmarker.png')} 
                                        style={{width: 50, height: 50 }}/>
                    
                                </MapView.Marker.Animated>
                            ))
                        }
                        {
                            this.state.dairyMarker.map((dairy,index) => (
                                <MapView.Marker.Animated key={index}
                                coordinate={dairy.coordinates}
                                anchor={{x : 0.35,y: 0.32}}
                                ref={dairy => {this.dairy = dairy}}
                                style={{width:50, height:50}}
                                title={dairy.title}>
                
                                    <Image source={require('./../../images/dairy.png')} 
                                        style={{width: 40, height: 40 }}/>
                    
                                </MapView.Marker.Animated>
                            ))
                        }
                        {
                            this.state.groceryMarker.map((dairy,index) => (
                                <MapView.Marker.Animated key={index}
                                coordinate={dairy.coordinates}
                                anchor={{x : 0.35,y: 0.32}}
                                ref={dairy => {this.dairy = dairy}}
                                style={{width:50, height:50}}
                                title={dairy.title}>
                
                                    <Image source={require('./../../images/grocery.png')} 
                                        style={{width: 60, height: 60 }}/>
                    
                                </MapView.Marker.Animated>
                            ))
                        }
                </MapView>
                <View style={commonStyle.backButtonPosition}>
                    <TouchableOpacity style={commonStyle.backButtonPadding} 
                        onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name="menu" size={40} />    
                    </TouchableOpacity>
                </View>
                <CurrentLocationButton cb={() => { this.centerMap() }}/>
                <View style={{padding:10}}>
                  <View style={{paddingBottom:10}}>
                        <Text style={{textAlign:"center",fontSize:24, fontWeight:"bold", color:"gray"}}>What you want?</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black' }} />
                  <SearchBar
                      placeholder="Type Here..."
                      onChangeText={this.updateSearch}
                      value={search}
                      round={true}
                      showLoading={true}
                      onClear={this.onClearSearch}
                      containerStyle={styles.searchbarStyle}
                    />
                  <View style={{flexDirection:"row"}}>
                    <View style={{width:"50%", padding: 5}}>
                      <TouchableOpacity style={styles.ButtonContainer}
                      onPress={()=>this.onSelectProductType(0)}>
                          <Text style={styles.ButtonText}>Fruits</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{width:"50%", padding: 5}}>
                      <TouchableOpacity style={styles.ButtonContainer}
                      onPress={()=>this.onSelectProductType(1)}>
                          <Text style={styles.ButtonText}>Vegetables</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection:"row"}}>
                    <View style={{width:"50%", padding: 5}}>
                      <TouchableOpacity style={styles.ButtonContainer}
                      onPress={()=>this.onSelectProductType(2)}>
                          <Text style={styles.ButtonText}>Grossery</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{width:"50%", padding: 5}}>
                      <TouchableOpacity style={styles.ButtonContainer}
                      onPress={()=>this.onSelectProductType(3)}>
                          <Text style={styles.ButtonText}>Dairy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </View>
        )
    }
}

export default dashboard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
    },
    dropDownStyle:{borderWidth:1,borderColor:"lightgray", marginBottom:15},
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
  searchbarStyle:{backgroundColor:"white", borderTopColor:"white", borderBottomColor:"white"}
  });