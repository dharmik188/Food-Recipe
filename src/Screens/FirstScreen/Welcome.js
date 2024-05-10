import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const deviceHeight = Dimensions.get( 'window' ).height;
const deviceWidth = Dimensions.get( 'window' ).width;

const Welcome = ({navigation = useNavigation()}) => {
  return (
    <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor='#00BFFF' barStyle='dark-content'/>
        <View style={styles.v1}>
            <View style={{}}>
            <Text style={{color:'white',fontSize:38,fontStyle:'normal'}}>
                Let's Get Started!
            </Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={require('../../../assets/images/welcome.png')} style={styles.img}/>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate("Signup")} style={styles.signbtn}>
                    <Text style={{color:'black',fontSize:20,fontWeight:'700'}}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastConatiner}>
                <Text style={{color:'white',fontSize:14}}>Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                    <Text style={{color:'black',fontSize:14,fontWeight:'700'}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:'#00BFFF',
        alignItems: "center",
    },
    v1:{
        flex:1,
        alignItems:'center',
        marginTop:30,
        
    },
    imgContainer:{
       alignItems:'center',
       marginTop:deviceHeight*0.20
    },
    img:{
        width:deviceWidth/1.35,
        height:deviceHeight*0.32,
        borderRadius:20, 
    },
    btnContainer:{
        // backgroundColor:'pink',
        alignItems:'center',
        borderRadius:15,
        justifyContent:'center',
        position:'absolute',
        bottom:70,
    },
    signbtn:{
        backgroundColor:'white',
        width:deviceWidth/1.35,
        height:deviceHeight*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    lastConatiner:{
        flexDirection:'row',
        padding:8,
        position:'absolute',
        bottom:35
        
    },
})