import styled from "styled-components";

const TextSmall = styled.Text`
  font-size: 30;
`;

const TextBig = styled.Text`
  font-size: 60;
  font-weight: bold;
`;

const FlexView = styled.View`
  flex: 1;
`;

const FlexCenterView = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30;
`;

const ChronoButton = styled.TouchableOpacity`
  width: 80%;
  height: 100;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const QuestionInput = styled.TextInput`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  background-color: #f0f0f0;
`;

export {
  TextSmall,
  TextBig,
  FlexView,
  FlexCenterView,
  ChronoButton,
  QuestionInput
};
