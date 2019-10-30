import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  padding-bottom: 15px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  max-height: 25px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  text-align: center;
`;

export const TotalValue = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const OrderButton = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
`;
