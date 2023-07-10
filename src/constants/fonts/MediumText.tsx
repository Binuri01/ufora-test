import React, { FunctionComponent } from 'react';
import {TextProps} from "./types";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 16px;
  font-family: PoppinsRegular;
`;

const MediumText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children} </StyledText>
};

export default MediumText;
