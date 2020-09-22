import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Metrics, Colors} from '@shared';

const Row = styled.View`
    flex-direction: row;
    alignItems: center;
`;

const RightText = styled.Text`
    color: ${Colors.Text.textAcient};
    fontSize: ${Metrics.FontSize.h6}px;
    paddingLeft: 10px;
    textAlign: left;
`;
export {Row,RightText};