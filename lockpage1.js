import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
const Lockpage1 = ({navigation,route}) => {
    const [levelNo, setLevelNo] = useState(1)
    const [skipArr, setSkipArr] = useState([])
    const getSkipData = async () => {
        try {
          var jsonValue = await AsyncStorage.getItem('skip6');
          jsonValue != null ? JSON.parse(jsonValue) : null;
          if(jsonValue!=null){
             console.log("get json data lock page= ",jsonValue)
             setSkipArr(jsonValue)
            //  setSkipArr(jsonValue)
          }
        } catch (e) {
            console.log(e)
          // error reading value
        }
      };  
      useEffect(()=>{
        getSkipData()
        console.log('lock page=',skipArr)

      },[])

    // const { levelNo } = route.params;
    // console.log(levelNo);
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    const levelNumClick=(num)=>{
        navigation.navigate('level',{"levelNo":num})
        
    }
    const getLevel=async()=>{
            try{
              const value=await AsyncStorage.getItem('levelNo5')   
              if(value !== null){
                setLevelNo(parseInt(value))
                console.log('lock page',value)
              }
            }
            catch(e){
                console.log(e)
            }
    }
    useEffect(() => {
        navigation.addListener('focus', () => {
            getLevel()
        });

    }, [navigation]);
    return (
        <>
            <ImageBackground style={style.maincon} source={require('./img/background.jpg')}>
                <Text style={style.txt}>Select Puzzle</Text>
                <View style={style.mainrow}>
                    {

                        arr.map((item,index) => {

                             if (item == levelNo||skipArr.includes(item)) {
                                return (
                                    <Pressable style={style.levecont} key={index} onPress={() => levelNumClick(item)} >                                      
                                            <Text style={style.txt1}>{item}</Text>                               
                                    </Pressable>
                                )
                            }

                            if(item<levelNo){
                                return (
                                    <Pressable style={style.levecont} key={index}>
                                        <ImageBackground source={require('./img/tick.png')} style={style.img1}>
                                            <Text style={style.txt1}>{item}</Text>
                                        </ImageBackground>
                                    </Pressable>
                                )
                            }
                          
                            else{
                                return (
                                    <Pressable key={index}>
                                        <Image source={require('./img/lock.png')} style={style.img}></Image>
                                    </Pressable>
                                )
                            }

                           
                        })
                    }
                    {/* <Pressable style={style.levecont}>
                        <ImageBackground source={require('./img/tick.png')} style={style.img1}>
                            <Text style={style.txt1}>1</Text>
                        </ImageBackground>
                    </Pressable>
            
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image>
                    <Image source={require('./img/lock.png')} style={style.img}></Image> */}


                </View>
                <Pressable style={style.imgcont}>
                    <Image source={require('./img/next.png')} style={style.img2}></Image>
                </Pressable>
            </ImageBackground>
        </>
    )

}
export default Lockpage1;
const style = StyleSheet.create({
    maincon: {
        flex: 1,
        alignItems: 'center'

    },
    currentlevel:{
        height: 80,
        width: 80,
        margin: 5,
        borderColor: 'blck',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    img2: {
        height: 55,
        width: 55,
        margin: 20


    },
    imgcont: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        margin: 15,
        // backgroundColor:'green'

    },
    txt: {
        fontSize: 35,
        color: 'blue',
        margin: 10,
    },
    txt1: {
        fontSize: 50,
        color: 'black',
        textAlign: 'center',


    },
    maincol: {},
    mainrow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',

        // alignItems:'center'
    },
    img: {
        height: 70,
        width: 90,
        marginTop: 10

    },
    levecont: {
        height: 80,
        width: 80,
        margin: 5,
        borderColor: 'blck',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    img1: {
        height: 70,
        width: 70
    },
})