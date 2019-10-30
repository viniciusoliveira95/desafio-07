import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalValue,
  OrderButton,
  OrderButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';
import colors from '../../styles/colors';

export default class Cart extends Component {
  state = { products: [] };
  // state = {
  //   products: [
  //     {
  //       id: 1,
  //       title: 'Tênis de Caminhada Leve Confortável',
  //       price: 179.9,
  //       image:
  //         'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  //     },
  //     {
  //       id: 2,
  //       title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
  //       price: 139.9,
  //       image:
  //         'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  //     },
  //     {
  //       id: 3,
  //       title: 'Tênis Adidas Duramo Lite 2.0',
  //       price: 219.9,
  //       image:
  //         'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  //     },
  //   ],
  // };

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.length ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Products>
                {products.map(product => (
                  <Product key={product.id}>
                    <ProductInfo>
                      <ProductImage source={{ uri: product.image }} />
                      <ProductDetails>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice>{product.price}</ProductPrice>
                      </ProductDetails>
                      <ProductDelete>
                        <Icon
                          name="delete-forever"
                          size={24}
                          color={colors.primary}
                        />
                      </ProductDelete>
                    </ProductInfo>
                    <ProductControls>
                      <ProductControlButton>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </ProductControlButton>
                      <ProductAmount value={String(1)} />
                      <ProductControlButton>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color={colors.primary}
                        />
                      </ProductControlButton>
                      <ProductSubtotal>R$ 540,00</ProductSubtotal>
                    </ProductControls>
                  </Product>
                ))}
              </Products>
              <TotalContainer>
                <TotalText>TOTAL</TotalText>
                <TotalValue>R$ 1619,10</TotalValue>
                <OrderButton>
                  <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
                </OrderButton>
              </TotalContainer>
            </ScrollView>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    );
  }
}
