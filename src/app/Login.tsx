import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image, TextInput } from "react-native";
import logo from "../assets/icons/logo.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Eyeoff from "../assets/icons/eye-off.png";
import BigText from "../constants/fonts/BigText";
import MediumText from "../constants/fonts/MediumText";
import SmallText from "../constants/fonts/SmallText";
import { COLORS } from "../constants/theme";
import RegularButton from "../components/Buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import XSmallText from "../constants/fonts/XSmallText";
import Authentication from "../components/Auth/Authentication";

interface CustomImageProps {
  source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

const Login: FunctionComponent<LoginProps> = ({onPressLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (text: string) => {
        setUsername(text);
      };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
      <StatusBar />

      <View>
        {/* Top section */}
        <View className="items-center mt-40 justify-center">
          <CustomImage source={logo} />
          <View className="items-center mt-2">
            <BigText className="mb-1">Login</BigText>
            <MediumText className="flex-wrap">Login to your account </MediumText>
          </View>
        </View>

        {/* Bottom section */}
        <View className="px-10 mt-32">
            <View className="">
                <XSmallText className="text-gray-600 mb-1">Username / Email / Phone Number</XSmallText>
                <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-2 p-1">
                    <View className="p-2">
                        <Image source={User} />
                    </View>
                    <TextInput
                        placeholder="Username / Email / Phone Number"
                        value={username}
                        onChangeText={handleUsernameChange}
                    />
                </View>
            </View>

            <View className="flex-col">
                <XSmallText className="text-gray-600 mb-1">Password</XSmallText>
                <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-2 p-1">
                    <View className="p-2">
                        <Image source={Password} />
                    </View>
                    <TextInput
                        className="text-x2"
                        placeholder="*********"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={handlePasswordChange}
                    />
                    <TouchableOpacity className="flex justify-end ml-40">
                        <Image source={Eyeoff} />
                    </TouchableOpacity>

                </View>
                
                <View className="mt-0 ml-48">
                    <SmallText>
                        <Text className="text-blue-500">Forgot Password?</Text>
                    </SmallText>
                </View>
            </View>

            {/* Button */}
            <View className="mt-7 items-center">
                <RegularButton className="" onPress={() => {}}>
                    <Text className="text-white">Log In</Text>
                </RegularButton>
            </View>
            <View className="mt-3">
                <MediumText>
                    <Text className="text-sm items-center">Don't have an account? Create Account</Text>
                </MediumText>
            </View>
        </View>

    </View>

    </>
  );
};

export default Login;
