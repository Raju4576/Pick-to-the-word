import React from "react";
import Home from "./home";
import Levelpage from "./levelpage";
import Winscreen from "./winscreen";
import Lockpage1 from "./lockpage1";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App=()=>{
  return(
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="level" component={Levelpage} options={{headerShown:false}}/>
        <Stack.Screen name="win" component={Winscreen} options={{headerShown:false}}/>
        <Stack.Screen name="lock" component={Lockpage1} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      {/* <Home></Home> */}
      {/* <Levelpage></Levelpage> */}
      {/* <Winscreen></Winscreen> */}
      {/* <Lockpage1></Lockpage1> */}
    </>
  )
}
export default App