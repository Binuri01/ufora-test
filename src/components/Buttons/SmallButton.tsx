import React, { FunctionComponent } from "react";
import { COLORS } from "../../constants/theme";
import MediumText from "../../constants/fonts/MediumText";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const SmallButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity className="items-center justify-center bg-blue-500 px-2 py-2 rounded-xl w-40">
      <MediumText className="text-white"> {props.children}</MediumText>
    </TouchableOpacity>
  );
};

export default SmallButton;
