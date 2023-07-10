import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image, TextInput } from "react-native";
import logo from "../assets/icons/logo.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Eyeoff from "../assets/icons/eye-off.png";
import Mail from "../assets/icons/mail.png"
import BigText from "../constants/fonts/BigText";
import MediumText from "../constants/fonts/MediumText";
import SmallText from "../constants/fonts/SmallText";
import { COLORS } from "../constants/theme";
import RegularButton from "../components/Buttons/RegularButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import XSmallText from "../constants/fonts/XSmallText";

interface CustomImageProps {
    source: ImageSourcePropType;
  }
  
  const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
    return <Image source={source} />;
  };

const CreateAccount: FunctionComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleNameChange = (text: string) => {
        setName(text);
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

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
                    <BigText className="">Create Account</BigText>
                    <MediumText className="flex-wrap">Create Account to get started</MediumText>
                </View>
            </View>

            {/* Bottom section */}
            <View className="px-10 mt-6">
                <View className="mb-1">
                    <XSmallText className="text-gray-600 mb-1">Name *</XSmallText>
                    <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-1 p-1">
                        <View className="p-2">
                            <Image source={User} />
                        </View>
                        <TextInput
                            placeholder="Saman Perera"
                            value={name}
                            onChangeText={handleNameChange}
                        />
                    </View>
                </View>

                <View className="mb-1">
                    <XSmallText className="text-gray-600 mb-1">Email / Phone Number *</XSmallText>
                    <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-1 p-1">
                        <View className="p-2">
                            <Image source={Mail} />
                        </View>
                        <TextInput
                            placeholder="samanperera@gmail.com"
                            value={email}
                            onChangeText={handleEmailChange}
                        />
                    </View>
                </View>

                <View className="mb-1">
                    <XSmallText className="text-gray-600 mb-1">Username *</XSmallText>
                    <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-1 p-1">
                        <View className="p-2">
                            <Image source={User} />
                        </View>
                        <TextInput
                            placeholder="SamanPerera"
                            value={username}
                            onChangeText={handleUsernameChange}
                        />
                    </View>
                </View>

                <View className="mb-1">
                    <XSmallText className="text-gray-600 mb-1">Password *</XSmallText>
                    <View className="flex flex-row items-center bg-transparent border rounded-2xl mb-1 p-1">
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
                    <Text className="text-xs mt-1">I agree to the Terms &amp; conditions and the privacy policy</Text>
                </View>

                {/* Button */}
                <View className="mt-2 items-center">
                    <RegularButton className="" onPress={() => {}}>
                        <Text className="text-white">Log In</Text>
                    </RegularButton>
                </View>

                <View className="mt-2 items-center">
                    <MediumText>
                        <Text className="text-sm items-center">Already have an account? Login</Text>
                    </MediumText>
                </View>
            </View>
        </View>
    </>
  )
}

export default CreateAccount