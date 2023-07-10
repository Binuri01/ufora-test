import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image, TextInput } from "react-native";
import logo from "../assets/icons/logo.png";
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

const OTP: FunctionComponent = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    const [num5, setNum5] = useState("");
    const [num6, setNum6] = useState("");

    const handleNum1Change = (text: string) => {
        setNum1(text);
    };

    const handleNum2Change = (text: string) => {
        setNum2(text);
    };

    const handleNum3Change = (text: string) => {
        setNum3(text);
    };

    const handleNum4Change = (text: string) => {
        setNum4(text);
    };

    const handleNum5Change = (text: string) => {
        setNum5(text);
    };

    const handleNum6Change = (text: string) => {
        setNum6(text);
    };

  return (
    <>
        <StatusBar />

        <View>
            {/* Top section */}
            <View className="items-center mt-40 justify-center">
            <CustomImage source={logo} />
                <View className="items-center mt-2 p-2">
                    <BigText className="mb-1">OTP</BigText>
                    <MediumText className="flex-wrap">Please enter the OTP sent to your Email</MediumText>
                </View>
            </View>

            {/*Bottom section */}
            <View className="flex-row px-10 mt-60 justify-between">
                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num1}
                            onChangeText={handleNum1Change}
                        />
                    </View>
                </View>

                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num2}
                            onChangeText={handleNum2Change}
                        />
                    </View>
                </View>

                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num3}
                            onChangeText={handleNum3Change}
                        />
                    </View>
                </View>

                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num4}
                            onChangeText={handleNum4Change}
                        />
                    </View>
                </View>

                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num5}
                            onChangeText={handleNum5Change}
                        />
                    </View>
                </View>

                <View className="mb-1 items-center">
                    <View className="flex flex-row bg-transparent border rounded-2xl mb-2 w-12 h-16">
                        <TextInput
                            className = "text-center p-4"
                            placeholder="0"
                            value={num6}
                            onChangeText={handleNum6Change}
                        />
                    </View>
                </View>
            </View>
            {/* Button */}
            <View className="mt-7 items-center px-16">
                <RegularButton className="" onPress={() => {}}>
                    <Text className="text-white">Verify</Text>
                </RegularButton>
            </View>

            <View className="mt-7 items-center">
                <MediumText>
                    <Text className="text-sm items-center">Didn't receive an OTP? Resend OTP</Text>
                </MediumText>
            </View>
        </View>
    </>
  )
}

export default OTP