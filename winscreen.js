import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Winscreen = ({navigation,route}) => {
    const [ans,setans]=useState([])
    const [coin,setcoin]=useState(10)
    const {levelNo}=route.params
    console.log('win screen levelno',levelNo);
    // const [levelNo,setLevelNo] = useState(0)

    // const getLevel = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('levelNo');
    //       if (value !== null) {
    //         setLevelNo(parseInt( value))
    //         // value previously stored
    //       }
    //     } catch (e) {
    //       // error reading value
    //     }
    //   };
    useEffect(() => {
        
            var temp = trueAns[levelNo - 1].split("");
            setans(temp);
            console.log(temp);
        
    }, [levelNo]);

    // const ans = [
    //     ['A', 'B', 'C', 'D', 'M', 'N', 'O', 'P'],
    //     ['Q', 'R', 'S', 'T', 'C', 'D', 'E', 'F'],
    //     ['I', 'J', 'K', 'L', 'U', 'V', 'W', 'X'],
    //     ['Y', 'Z', 'A', 'B', 'V', 'W', 'X', 'Y'],
    //     ['R', 'S', 'T', 'U', 'E', 'F', 'G', 'H'],
    // ];
    const trueAns = [
        "START", "FOOTBALL", "SANDWICH",
        "HOTDOG", "EARRING", "HORSESHOES",
        "KEYBOARD", "CUPCAKE", "JUMPROPE",
        "ICEBOX", "HANDSHAKE", "JELLYFISH"
    ]
    
    // useEffect(()=>{
    //     var temp=trueAns[levelNo-1].split("")
    //     setans(temp)
    //     console.log(temp)

    // },[])
    const onward=()=>{
        navigation.navigate('level',{'levelNo':levelNo+1})
        const temp=coin+50;
        setcoin(temp)
    }

    const storecoin=(value)=>{
        try{
            
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <>
            {/* <Text>this is win screen</Text> */}
            <ImageBackground source={require('./img/winscreen_bg.jpg')} style={styles.container}>

                <Text style={styles.txt}>Well Done!</Text>
                <View style={styles.cont}>

                    <View style={styles.row}>
                        <Pressable style={styles.cir}>
                            <Image source={require('./img/applovin_ic_warning_outline.png')} style={styles.img1}></Image>

                        </Pressable>
                    </View>
                    <Text style={styles.txt1}>The word was</Text>
                    {/* <View style={styles.row11}>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>
                        <Pressable style={styles.textcont}>
                            <Text style={styles.txt6}>A</Text>
                        </Pressable>

                    </View> */}
                    <View style={styles.row11}>
                    {ans.map((item, index) => (
                        <Pressable style={styles.textcont}  key={index} >
                            <Text style={styles.txt6}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
                    <Text style={styles.txt1}>Coin earned</Text>
                    <View style={styles.row2}>
                        <Image source={require('./img/coin_icon_old.png')} style={styles.img2}></Image>
                        <Text style={styles.txt2}>50</Text>

                    </View>
                    <ImageBackground source={require('./img/daily_win_bonus.png')} style={styles.img3}>
                        <Text style={styles.txt3}>Dalily First win bonus</Text>
                    </ImageBackground>

                </View>
                <Pressable style={styles.cont1} onPress={onward}>
                    <Text style={styles.txt4}>Onward!</Text>
                </Pressable>

            </ImageBackground>
        </>
    )
}
export default Winscreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center'
    },
    cont1: {
        backgroundColor: 'green',
        margin: 'auto',
        padding: 20,
        borderRadius: 20
    },
    txt4: {
        fontSize: 30,
        color: 'white'

    },
    cir:{
        backgroundColor:'red',
        borderRadius:17,
        padding:5
    },
    img3: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:100,
        height: 40,
        width: 300
    },
    txt3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    },
    row2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    img2: {
        height: 50,
        width: 50
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        // alignItems:'flex-end'
        justifyContent: 'flex-end',
        padding:10
        // backgroundColor: 'rgba(1,1,1,0.3)'
    },
    txt6: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textcont: {
        height: 50,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        // alignItems:'center'
        justifyContent: 'center'
    },
    img1: {
        height: 25,
        width: 25,
    },
    txt1: {
        fontSize: 30,
    },
    txt2: {
        fontSize: 30,
        marginLeft: 3
    },

    txt: {
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 3,
        width: '100%',
        textAlign: 'center',
        marginTop: 80
    },
    cont: {
        // flex:1,
        backgroundColor: 'rgba(1,1,1,0.3)',
        marginTop: 50,
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    row11: {
        flexDirection: 'row',
        // backgroundColor:'orange',
        padding: 7,
        justifyContent: 'space-around',
        width: '100%'

    },

})