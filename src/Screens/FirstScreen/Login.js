import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, Dimensions, Linking, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const deviceHeight = Dimensions.get( 'window' ).height;
const deviceWidth = Dimensions.get( 'window' ).width;

const Login = ({navigation = useNavigation()}) => {

    const openWhatsApp = () => {
        Linking.openURL('whatsapp://send?text=hello&phone=+913124567829');
    };

    const openFacebook = () => {
        Linking.openURL('https://www.facebook.com');
    };

  return (
    <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor='darkred' barStyle='dark-content'/>
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={require('../../../assets/images/vegitable.jpg')} style={styles.i1} />
            </View>
            <View style={styles.signcontainer}>
                <View style={styles.sign}>
                    <Text style={styles.signtext}>Login In</Text>
                </View>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={openWhatsApp}>
                        <Ionicons name="logo-whatsapp" size={24} color="white" style={styles.whatlogo} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={openFacebook}>
                        <FontAwesome5 name="facebook-f" size={24} color="white" style={styles.facelogo}/>
                    </TouchableOpacity> */}
                </View>                
            </View>
            <View style={{marginVertical:12}}>
                <View style={styles.usercontainer}>
                    <Text style={styles.usertext}>Username</Text>
                    <TextInput  placeholderTextColor="white" keyboardType={'email-address'} style={styles.userinput}></TextInput>
                </View>
                <View style={styles.passcontainer}>
                    <Text style={styles.passtext}>Password</Text>
                    <TextInput  placeholderTextColor="white" keyboardType={'numbers-and-punctuation'} style={styles.passinput}></TextInput>
                </View>
                <View style={styles.forgotcontainer}>
                    <TouchableOpacity>
                    <Text style={styles.forgottext}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate("RecipeListScreen")} style={styles.signbtn}>
                    <Text style={{color:'black',fontSize:20,fontWeight:'700'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastContainer}>
                <Text style={styles.text1}>Don't have an Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                    <Text style={styles.text2}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'darkred',
    },
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    img:{
        // width:'auto',
    },
    i1:{
        width:deviceWidth*0.98,
        height:deviceHeight*0.45,
        marginTop:7,
        borderRadius:20,
    },
    signcontainer:{
        flexDirection:'row',
        width:deviceWidth/1.1,
        margin:20,
        display:'flex',
        // backgroundColor:'skyblue',
        justifyContent:'space-between'
    },
    signtext:{
        fontSize:23,
        fontWeight:'500',
        color:'white',
        width:deviceWidth/4,
    },
    logo:{
        flexDirection:'row',
        width:deviceWidth*0.07,
        alignItems:'center',
        alignContent:'flex-end',
        marginRight:10
        // backgroundColor:'yellow'
    },
    whatlogo:{
        
    },
    facelogo:{
       
    },
    usercontainer:{
        flexDirection:'column',
        padding:5,
        // width:deviceWidth/4,
        marginLeft:5,
    },
    userinput:{
        borderWidth:1,
        width:(deviceWidth)-35,
        height:40,
        paddingLeft:15,
        borderRadius:10,
        borderColor:'white',
        
    },
    usertext:{
        fontSize:17,
        marginBottom:9,
        color:'white',
    },
    passcontainer:{
        flexDirection:'column',
        padding:5,
        marginLeft:5,
    },
    passinput:{
        borderWidth:1,
        width:(deviceWidth)-35,
        height:40,
        paddingLeft:15, 
        borderRadius:10,
        borderColor:'white',
    },
    passtext:{
        fontSize:17,
        marginBottom:9,
        color:'white',
    },
    forgotcontainer:{
        alignItems: 'flex-end',
        margin:5,
    },
    forgottext:{
        fontSize:15,
        color:'white',
    },
    btnContainer:{
        alignItems:'center',
        borderRadius:15,
        justifyContent:'center',
        marginTop:18
    },
    signbtn:{
        backgroundColor:'white',
        width:deviceWidth/1.40,
        height:deviceHeight*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    btn:{
        height:80,
    },
    lastContainer:{
        flexDirection:'row',
        marginVertical:6,
    },
    text1:{
        fontSize:14,
        fontWeight:'600',
        color:'white',
    },
    text2:{
        fontSize:14.5,
        fontWeight:'900',
        marginLeft:5,
        color:'black',
    },
})
export default Login

