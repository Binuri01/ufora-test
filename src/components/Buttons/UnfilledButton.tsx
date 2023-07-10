import React, { FunctionComponent } from 'react';
import {COLORS} from "../../constants/theme";
import MediumText from '../../constants/fonts/MediumText';
import styled from 'styled-components';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

interface ButtonProps{
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    children: React.ReactNode;
}

const UnfilledButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity className="items-center justify-center bg-transparent px-2 py-2 rounded-xl w-40 border-blue-500 border-2">
        <MediumText className="text-blue-500 "> {props.children}</MediumText>
    </TouchableOpacity>
  )
}

export default UnfilledButton