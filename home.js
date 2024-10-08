import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";



const Home = ({navigation}) => {
    const [leveNo,setLevelNo]=useState(0)

    const getlevel=async()=>{
        const value=await AsyncStorage.getItem('levelNo5')
        if(value!=null){
            setLevelNo(value)
            
        }
    }
    useEffect(()=>{
        getlevel()
        console.log('home page',leveNo)


    },[])
    return (
        <>
            <ImageBackground source={require('./img/background.jpg')} style={style.container} >
                <View style={style.maincol}>
                    <Text style={style.txt1}>Pick to Word</Text>
                    <ImageBackground resizeMode="stretch" source={require('./img/blackboard_main_menu.png')} style={style.img1}>
                        <View style={style.ccol}>
                            <Pressable onPress={()=>navigation.navigate('level' ,{'levelNo':1})}>
                                <Text style={style.txt2}>Continue</Text>
                            </Pressable>
                            <Pressable onPress={()=>navigation.navigate('lock',{'leveNo':1})}>
                                <Text style={style.txt2}>Puzzles</Text>
                            </Pressable>
                            <Pressable onPress={()=>navigation.navigate('win',{'leveNo':1})}>
                                <Text style={style.txt2}>Buy Pro</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                    <View style={style.row1}>
                        {/* <Text>this is row</Text>  */}
                        <View style={style.ccol1}>
                            <Text style={style.txt3}>Ad</Text>
                            <Image source={require('./img/ltlicon.png')} style={style.img2}></Image>


                        </View>

                        <View style={style.ccol2}>
                            <View style={style.row2}>
                                <View style={style.cont}>
                                <Image style={style.img3} source={require('./img/shareus.png')}></Image>
                                </View>
                                <View style={style.cont}>
                                <Image style={style.img3} resizeMode="stretch" source={require('./img/emailus.png')}></Image>

                                </View>

                            </View>
                            
                            <View style={style.cont1}>
                                    <Text style={style.txt4}>Privacy Policy</Text>
                                </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}
export default Home
const style = StyleSheet.create({

    container: {
        flex: 1
    },
    cont: {
        height: 40,
        width: 40,
        backgroundColor: 'grey',
        borderRadius: 5,
        margin:7,
        alignItems:'center',
        justifyContent:'center'
    },
    cont1:{
        width:100,
        borderWidth:2,
        borderColor:'black',
        padding:4

    },
    row1: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'black',
        marginTop: 20,
        justifyContent: 'space-between'

    },
    maincol: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    txt1: {
        color: 'blue',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 35,
        fontFamily:"PlaywriteBEVLG-VariableFont_wght"
    },
    img1: {
        height: 480,
        width: 340,
        margin: 10,
    },
    ccol: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 160,
        // backgroundColor:'green',
        height: 130,


    },
    ccol1: {
        flexDirection: 'column',
        marginLeft: 25,
    },
    ccol2: {
        flexDirection: 'column',
        // backgroundColor:'orange',
        marginTop:20,
        alignItems:'center',
        marginRight:20
    },
    txt2: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        fontFamily:"PlaywriteBEVLG-VariableFont_wght"

    },
    txt3: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    },
    img2: {
        height: 80,
        width: 80,


    },
    row2: {
        flexDirection: 'row'
    },
    img3:{
        height:30,
        width:30
    },
    txt4:{
        fontSize:13,
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    }

})