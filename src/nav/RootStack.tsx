import React, {FunctionComponent} from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../app/Welcome";
import Login from "../app/Login";
import ForgotPassword from "../app/ForgotPassword";
import CreateAccount from "../app/CreateAccount";
import OTP from "../app/OTP";

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Login"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />

                <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{headerShown: false}}
                />  

                <Stack.Screen 
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{headerShown: false}}
                />  

                <Stack.Screen 
                    name="OTP"
                    component={OTP}
                    options={{headerShown: false}}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default RootStack;