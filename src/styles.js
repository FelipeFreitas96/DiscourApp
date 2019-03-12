import styled from "styled-components";

const TextSmall = styled.Text`
  font-size: 20;
`;

const TextBig = styled.Text`
  font-size: 50;
  font-weight: bold;
`;

const FlexView = styled.View`
  flex: 1;
`;

const RowView = styled.View`
  flex: 1;
  flex-direction: row;
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
  height: 30;
  padding: 0;
  background-color: #f0f0f0;
  text-align: center;
  font-size: 20;
  color: gray;
`;

const QuestionButton = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  height: 30;
  padding: 0;
  background-color: #f0f0f0;
`;

export {
  TextSmall,
  TextBig,
  FlexView,
  RowView,
  FlexCenterView,
  ChronoButton,
  QuestionInput,
  QuestionButton
};
