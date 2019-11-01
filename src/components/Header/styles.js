import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: #000000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoContainer = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  color: #fff;
  background: ${colors.primary};
  height: 18px;
  width: 18px;
  border-radius: 9px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  bottom: 14px;
  right: -8px;
  overflow: hidden;
`;
