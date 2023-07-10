import React, { FunctionComponent } from "react";
import { COLORS } from "../../constants/theme";
import MediumText from "../../constants/fonts/MediumText";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from "react-native";
import { View } from "react-native";
import google from "../Auth/components/assets/icons/google.png";
import apple from "../Auth/components/assets/icons/apple.png";
import SmallText from "../../constants/fonts/SmallText";

interface CustomImageProps {
    source: ImageSourcePropType;
}

const CustomImage: FunctionComponent<CustomImageProps> = ({ source }) => {
    return <Image source={source} />;
};

interface ImagesSectionProps {
    onPressGoogle: (event: GestureResponderEvent) => void;
    onPressApple: (event: GestureResponderEvent) => void;
}

const Authentication: FunctionComponent<ImagesSectionProps> = (props) => {
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
  

export default Authentication;