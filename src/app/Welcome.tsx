import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageSourcePropType, Text, View, Image } from "react-native";
import logo from "../assets/icons/logo.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import BigText from "../constants/fonts/BigText";
import MediumText from "../constants/fonts/MediumText"
import SmallText from "../constants/fonts/SmallText"
import { COLORS } from "../constants/theme";
import RegularButton from "../components/Buttons/RegularButton";
import UnfilledButton from "../components/Buttons/UnfilledButton";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import SmallButton from "../components/Buttons/SmallButton";

//navigation
{/*import { RootStackParamList } from "../nav/RootStack";
import {StackScreenProps} from "@react-navigation-stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;*/}

interface CustomImageProps {
  source: ImageSourcePropType;
}

interface ImagesSectionProps {
  onPressGoogle: ((event: GestureResponderEvent) => void) | undefined;
  onPressApple: ((event: GestureResponderEvent) => void) | undefined;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
  return <Image source={source} />;
};

const ImagesSection: FunctionComponent<ImagesSectionProps> = (props) => {
  const { onPressGoogle, onPressApple } = props;

  return (
    <View className="items-center mt-5">
      <SmallText className="">Or continue with</SmallText>
      <View className="flex-row mt-1 justify-between w-32">
        <TouchableOpacity onPress={onPressGoogle}>
          <CustomImage source={google}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressApple}>
          <CustomImage source={apple} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface WelcomeProps {
  onPressGoogle: ((event: GestureResponderEvent) => void) | undefined;
  onPressApple: ((event: GestureResponderEvent) => void) | undefined;
}

//const Welcome: FunctionComponent<Props> = ({navigation}) => {
const Welcome: FunctionComponent<WelcomeProps> = (props) => {

  return (
    <>
      <StatusBar />
      {/* welcome container */}
      <View>
        {/* Top section */}
        <View className="items-center mt-40 justify-center">
          <CustomImage source={logo} />
          <View className="items-center mt-2">
            <BigText className="mb-1">Welcome!</BigText>
            <MediumText className="flex-wrap">Login to your account, </MediumText>
            <MediumText className="flex-shrink-0 mb-15">or Create Account to get started</MediumText>
          </View>
        </View>

        {/* Bottom section */}
        {/*Buttons */}
        <View className="flex-row mt-72 justify-between ml-6 mr-6">
          <SmallButton className="" onPress={() => {navigation.navigate("Login")}}>
            <Text className="text-white">Log In</Text>
          </SmallButton>

          <UnfilledButton className="bg-transparent" onPress={() => {}}>
            <Text className="text-blue-500">Create Account</Text>
          </UnfilledButton>
        </View>

        <ImagesSection 
          onPressGoogle={props.onPressGoogle} 
          onPressApple={props.onPressApple} 
        />
      </View>
    </>
  );
};

export default Welcome;
