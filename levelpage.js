import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, ToastAndroid, View, Text, Pressable, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Levelpage = ({ navigation, route }) => {
     const { levelNo } = route.params;
    const [curMixed, setCurMixed] = useState([])
    const [curTrueAns, setCurTrue] = useState([])
    const [curUserAns, setCurUserAns] = useState([])
    const [downindex, setdownindex] = useState([])
    const [skipArr, setSkipArr] = useState([])
    const [maxlevelNo, setLevelNo] = useState(1)
    const [nextlevelNo, setNextLevelNo] = useState(0)
    const [gameScore, setGameScore] = useState(0);

    const getscore = async () => {
        try {
            const value = await AsyncStorage.getItem('score3');
            if (value != null) {
                // console.log()
                setGameScore(parseInt(value))
                console.log('getscore=', value)
            }

        } catch (e) {
            console.log(e)
        }
    }

    const setscore = async (value) => {
        try {
            await AsyncStorage.setItem('score3', value.toString());
            console.log('setscore', value);
        } catch (e) {
            console.log(e);
        }
    };


    const getLevel = async () => {
        try {
            const value = await AsyncStorage.getItem('levelNo5');
            if (value !== null) {
                // console.log(value)
                setLevelNo(parseInt(value))
                console.log('getlevel=', value)
                // value previously stored
            }
        } catch (e) {
            console.log(e)
            // error reading value
        }
    };
    useEffect(() => {
        navigation.addListener('focus', () => {
            getLevel()
            getscore()

        });

        // console.log("level=", levelNo)
    }, [navigation]);

    const storeLevel = async (value) => {
        try {
            await AsyncStorage.setItem('levelNo5', value);
            console.log('storelevel=', value)
        } catch (e) {
            // saving error
        }
    };

    const img1 = [
        require('./img/level/pics-star6-1.jpg'),
        require('./img/level/pics-foot1-1.jpg'),
        require('./img/level/pics-sand1-1.jpg'),
        require('./img/level/pics-hot1-1.jpg'),
        require('./img/level/pics-ear1-1.jpg'),
        require('./img/level/pics-horse1-1.jpg'),
        require('./img/level/pics-key1-1.jpg'),
        require('./img/level/pics-cup1-1.jpg'),
        require('./img/level/pics-jump1-1.jpg'),
        require('./img/level/pics-ice1-1.jpg'),
        require('./img/level/pics-hand1-1.jpg'),
        require('./img/level/pics-jelly1-2.jpg'),
    ];

    const img2 = [
        require('./img/level/pics-art1-1.jpg'),
        require('./img/level/pics-ball1-2.jpg'),
        require('./img/level/pics-witch1-2.jpg'),
        require('./img/level/pics-dog2-1.jpg'),
        require('./img/level/pics-ring1-1.jpg'),
        require('./img/level/pics-shoe1-1.jpg'),
        require('./img/level/pics-board1-1.jpg'),
        require('./img/level/pics-cake1-2.jpg'),
        require('./img/level/pics-rope1-1.jpg'),
        require('./img/level/pics-box1-1.jpg'),
        require('./img/level/pics-shake1-1.jpg'),
        require('./img/level/pics-fish2-1.jpg'),
    ];





    const mixedAns = [
        "XLSFTTARHRTEYRTP",
        "FBONOKTIBYATLRLW",
        'SANDWIKHGWTBVCCH',
        'HOCCABNTDOGGOPLI',
        "EAWRKRLIFSNCBGQE",
        "HORHSEASHDOEWSYU",
        "KEDFYSBLSOWJKARD",
        "CKUQSPSCADKJJKGE",
        "JSUMAPRZDOPCBEDA",
        "LIHLPCSNEBSZCOAX",
        "HALNDJSHAASAKENB",
        "JFNELALYFGFIFDSH"
    ]
    const trueAns = [
        "START", "FOOTBALL", "SANDWICH",
        "HOTDOG", "EARRING", "HORSESHOES",
        "KEYBOARD", "CUPCAKE", "JUMPROPE",
        "ICEBOX", "HANDSHAKE", "JELLYFISH"
    ]
    const hint = [
        "first letter is S",
        "Last letter is L",
        "First leter is S",
        "Third letter is T",
        "Fifth letter is I",
        "Last letter is S",
        "Third letter is Y",
        "Third letter is P",
        "Fifth letter is R",
        "First letter is I",
        "Last letter is E",
        "Middle letter is Y"
    ]
    const row1click = (index, item) => {
        const temp = [...curUserAns];
        const temp1 = [...curMixed]
        const posTemp = [...downindex]
        for (var x = 0; x < curTrueAns.length; x++) {
            if (temp[x] === "") {
                temp[x] = item
                temp1[index] = ""
                posTemp[x] = index;
                break;
            }
        }
        setCurUserAns(temp);
        setCurMixed(temp1);
        setdownindex(posTemp)
        // console.log(temp)
        // console.log(temp.join(""))

    };
    const win = async () => {
        var string = curUserAns.join("").toString();
        var truestring = trueAns[levelNo - 1].toString();

        if (string === truestring) {
            // await AsyncStorage.removeItem('levelNo');
            // await AsyncStorage.removeItem('score');



            storeLevel((levelNo + 1).toString())
            setscore(gameScore + 50)




            navigation.navigate('win', { levelNo: levelNo });
            setCurUserAns([]);
            ToastAndroid.showWithGravity(
                'Well Done!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );

        } else {
            if (string.length === truestring.length) {
                ToastAndroid.showWithGravity(
                    'Wrong answer',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
            }
        }
    }

    useEffect(() => {
        win()

    }, [curUserAns])


    const user = (index, item) => {
        var tempUper = [...curUserAns];
        var tempdown = [...curMixed];
        var down = downindex[index];

        tempdown[down] = item;
        tempUper[index] = '';
        setCurUserAns(tempUper);
        setCurMixed(tempdown)
    }




    useEffect(() => {
        var tempArrMixed = mixedAns[levelNo - 1].split("")
        var tempArrTrue = trueAns[levelNo - 1].split("")
        setCurMixed(tempArrMixed)
        setCurTrue(tempArrTrue)

    }, [levelNo]);


    useEffect(() => {
        var temp = []
        for (var i = 0; i < curTrueAns.length; i++) {
            temp.push("")
        }
        setCurUserAns(temp)
        // console.log(temp)


    }, [curTrueAns])


    const refresh = () => {
        var tempArrMixed = mixedAns[levelNo - 1].split("")
        var tempArrTrue = trueAns[levelNo - 1].split("")
        setCurMixed(tempArrMixed)
        setCurTrue(tempArrTrue)
        var temp = []
        for (var i = 0; i < tempArrTrue.length; i++) {
            temp.push("")
        }
        setCurUserAns(temp)
        setdownindex([])
    }


    const hint1 = () => {
        const temp = gameScore - 20
        if (gameScore > 20) {
            Alert.alert('Hint', hint[levelNo - 1]);
            setGameScore(temp)
            // console.log('score=',temp)


        } else {
            Alert.alert('Hint', 'You have atleat 20 score')
        }
    }
    const skip = () => {
        Alert.alert('Skip', 'IF YOU SKIP THIS LEVEL LATER YOU CAN PLAY THIS LEVEL',
            [
                {
                    text: 'cancel',

                },
                {

                    
                    text: 'ok',
                    onPress: () => {

                        const temp = gameScore - 50
                        if (gameScore >= 50) {
                            setSkipArr([...skipArr, levelNo])
                            storeLevel((levelNo + 1).toString())
                            setNextLevelNo(levelNo + 1)
                            navigation.navigate('level', { "levelNo": levelNo+1 });
                            // Alert.alert('Hint', hint[levelNo - 1]);
                            setGameScore(temp)
                            // console.log('score=',temp)
                
                
                        } else {
                            Alert.alert('Skip', 'You have atleat 50 score')
                        }
                        // var temp = [...skipArr]
                        //temp.push(levelNo)
                        // console.log("temp = ",temp)
                        // setIsSkip(true)
                       
                    }
                }
            ]
        )
    }


    const storeSkipData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('skip6', jsonValue);
            console.log("json data stored=", jsonValue)
        }
        catch (e) {
            console.log(e)
        }
    }
    const getSkipData = async () => {
        try {
            var jsonValue = await AsyncStorage.getItem('skip6');
             jsonValue != null ? JSON.parse(jsonValue) : null;
            //     console.log("json data get = ",jsonValue)


            if (jsonValue != null) {
                setSkipArr(jsonValue)
            }
        } catch (e) {
            console.log(e)
            // error reading value
        }
    };
    useEffect(() => {


        // console.log("new",skipArr);
        storeSkipData(skipArr)

        //    console.log("temp",skipArr)
    }, [skipArr])
    useEffect(() => {
        getSkipData()
    }, [])

    return (
        <ImageBackground source={require('./img/main_bg_part.jpg')} style={styles.container}>
            <View style={styles.row1}>
                <Image source={require('./img/settings_button.png')} style={styles.imgsetting} />
                <View style={styles.col1}>
                    <Text style={styles.txt1} >Puzzle</Text>
                    <Text style={styles.txt2}>{levelNo}</Text>
                </View>
                <View style={styles.row2}>
                    <Image source={require('./img/coin_icon_old.png')} style={styles.img2} />
                    <Text style={styles.txt3}>287</Text>
                    <Pressable style={styles.cont}>
                        <Image style={styles.img3} resizeMode="center" source={require('./img/shop_icon.png')} />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.txt4}>Pick To Word</Text>
            <View style={styles.row3}>
                <Image source={img1[levelNo - 1]} resizeMode="stretch" style={styles.img4} />
                <Text style={styles.txt5}>+</Text>
                <Image source={img2[levelNo - 1]} style={styles.img4} resizeMode="stretch" />
            </View>
            <View style={styles.row4}>
                <Pressable onPress={refresh}>
                    <Image style={styles.img5} source={require('./img/undo_gamescreen.png')}></Image>
                </Pressable>
                <Pressable onPress={hint1}>
                    <Image style={styles.img5} source={require('./img/hint.png')}></Image>
                </Pressable>
            </View>
            <View style={styles.row5}>
                <Text style={styles.score1}>Your Score : {gameScore}</Text>

                <Pressable onPress={skip}>
                    <Image source={require('./img/skip.png')} style={styles.img5}></Image>

                </Pressable>
            </View>


            <View style={styles.footer}>
                <View style={styles.row11}>
                    {curUserAns.map((item, index) => (
                        <Pressable
                            style={[
                                styles.textcont,
                                item !== '' ? styles.clicked1 : null // Apply 'clickedUser' style conditionally
                            ]}
                            onPress={() => user(index, item)}
                            key={index}
                        >
                            <Text style={styles.txt6}>{item}</Text>
                        </Pressable>
                    ))}
                </View>

                <View style={styles.row12}>
                    {curMixed.map((item, index) => (
                        <Pressable
                            style={[
                                styles.textcont1,
                                item === '' ? styles.clicked : null // Apply 'clickedMixed' style conditionally
                            ]}
                            onPress={() => row1click(index, item)}
                            key={index}
                        >
                            <Text style={styles.txt6}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
                {/* <View style={styles.row12}>
                    {row2[levelNo - 1].map((item, index) => (
                        <Pressable style={styles.textcont1} key={index}  onPress={() => row2click(index)} >
                            <Text style={styles.txt6}>{item}</Text>
                        </Pressable>
                    ))}
                </View> */}
            </View>
        </ImageBackground>
    );
};

export default Levelpage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img5: {
        height: 50,
        width: 50,

    },
    score1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 60,
        fontFamily:"PlaywriteBEVLG-VariableFont_wght"

        // textAlign:'center'
    },
    row4: {
        width: '100%',
        // backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginTop: 75
    },
    row5: {
        width: '100%',
        // backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5
    },
    clicked: {
        backgroundColor: 'white'
    },
    clicked1: {
        backgroundColor: 'orange',
        borderColor: 'white',
        borderWidth: 1.5
    },
    row1: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        width: '100%',
        flex: 1,
        // marginTop: ,
    },
    row11: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        padding: 7,
        justifyContent: 'space-around',
        // marginTop: 20
    },
    row12: {
        // marginTop:16,
        flexDirection: 'row',
        backgroundColor: 'white',
        // padding: 10,
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    textcont: {
        height: 50,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center'
    },
    textcont1: {
        height: 50,
        width: 40,
        backgroundColor: 'orange',
        borderRadius: 5,
        justifyContent: 'center',
        margin: 2
    },
    txt6: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    img4: {
        height: 170,
        width: 150,
        borderColor: 'white',
        borderWidth: 4
    },
    row3: {
        flexDirection: 'row',
        marginTop: 60,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imgsetting: {
        height: 40,
        width: 55,
        borderRadius: 5
    },
    txt1: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    txt2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    txt3: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginLeft: 10
    },
    col1: {
        flexDirection: 'column',
    },
    row2: {
        flexDirection: 'row',
        backgroundColor: 'rgba(43,42,42,100)',
        height: 40,
        borderRadius: 55,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img2: {
        height: 25,
        width: 25,
        marginLeft: 10
    },
    txt4: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 3,
        backgroundColor: 'rgba(1,1,1,0.3)',
        width: '100%',
        textAlign: 'center',
        fontFamily:"PlaywriteBEVLG-VariableFont_wght"

    },
    txt5: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgba(1,1,1,0.6)'
    },
    img3: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'rgba(43,42,42,100)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});
