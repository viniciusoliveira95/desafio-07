import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const ProductContainer = styled.View`
  background: #fff;
  width: 220px;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProuductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.05, colors.primary)};
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
