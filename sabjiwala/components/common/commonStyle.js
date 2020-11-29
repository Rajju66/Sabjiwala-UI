import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    floatingButton:{
        padding:25, 
        borderWidth:2, 
        height:75, 
        width:75, 
        borderRadius:50, 
        backgroundColor:"black"
    },
    ButtonContainer: {
        elevation: 50,
        backgroundColor: '#000',
        borderRadius: 0,
        paddingVertical: 10,
        marginHorizontal: 10, 
        top:10,
        elevation:7,
        borderRadius:25     
    },
    ButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    viewPosition: { 
        position: 'absolute', 
        bottom:10,
        right: 0, 
        left: 0, 
        flexDirection:"row"
    },
    validation:{
        fontSize:16,
        fontWeight: "bold",
        paddingLeft:40,
        color:"#ff5a30",
        paddingTop:5
      },
    txtInputMainView:{paddingTop:"10%",paddingLeft:50, flexDirection:"row"},
    txtInputSubView:{paddingLeft:20, bottom:10, width:"75%"},
    txtInputStyle:{borderBottomWidth:2, fontSize:20},

      appButtonContainer: {
        elevation: 8,
        backgroundColor: '#000',
        borderRadius: 0,
        paddingVertical: 20,
        marginHorizontal: 100,
        marginTop: 10,
        borderRadius:30
      },
      appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
      },
      textInputStyle:{
        paddingLeft:20,
        fontSize:18,
        marginHorizontal:20,
        height:50, 
        borderColor:'lightgray', 
        borderWidth:1,
        borderRadius:25,
      },
      textInputView:{
        paddingBottom:10
      },
      
    textLink:{
      paddingBottom:15,
      textAlign:"center",
      fontWeight:"bold",
      color:"black"
    },
    validation:{
      fontSize:16,
      fontWeight: "bold",
      paddingLeft:40,
      color:"#ff5a30",
      paddingTop:5
    },
    activityIndicatorSplash: { position: 'absolute', top:"70%",right: 0, left: 0, zIndex:1 },
    activityIndicator: { position: 'absolute', top:"50%",right: 0, left: 0, zIndex:1 },
    screenButtonContainer: {
      elevation: 8,
      backgroundColor: '#585858',
      borderRadius: 0,
      paddingVertical: 20,
      marginHorizontal:30,
      marginTop: "10%"
    },
    screenButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase'
    },
    backButtonPosition:{position: 'absolute',paddingTop:"30%"},
    backButtonPadding:{padding:25},
    itemBorderStyle:{borderWidth:1,elevation:1, borderColor:"lightgray", padding:10, paddingLeft:10, flexDirection:"row"},
    itemNameStyle:{fontSize:15, fontWeight:"bold", width:"40%", top:10},
    itemPriceStyle:{fontSize:15, fontWeight:"bold", width:"30%", top:10}
  });