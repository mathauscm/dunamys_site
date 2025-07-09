import React from 'react';
import { Container } from '../../common';
import {
  GenerosityContainer,
  GenerosityHeader,
  GenerosityTitle,
  GenerositySubtitle,
  GenerosityVerse,
  GenerosityContent,
  GenerosityDescription,
  QRCodeContainer,
  QRCodePlaceholder,
  QRCodeText,
  PixInfo,
  PixLabel,
  PixCode,
  PixTitle,
} from './Generosity.styles';

export const Generosity = () => {
  return (
    <GenerosityContainer id="generosity">
      <Container>
        <GenerosityHeader>
          <GenerosityTitle>Generosidade</GenerosityTitle>
          <GenerositySubtitle>"A alma generosa prosperará!"</GenerositySubtitle>
          <GenerosityVerse>Provérbios 11.25</GenerosityVerse>
        </GenerosityHeader>
        
        <GenerosityContent>
          <GenerosityDescription>
            <strong>Faça parte desse chamado!</strong><br />
            Oferte e contribua para o avanço do Reino de Deus na Serra da Ibiapaba.
          </GenerosityDescription>
          
          <QRCodeContainer>
            <QRCodePlaceholder>📱</QRCodePlaceholder>
            <QRCodeText>
              Leia o QR code com<br />
              seu celular, no<br />
              aplicativo do seu banco
            </QRCodeText>
          </QRCodeContainer>

          <PixInfo>
            <PixLabel>PIX CNPJ:</PixLabel>
            <PixCode>39.263.139/0001-63</PixCode>
            <PixTitle>Comunidade Dunamys</PixTitle>
          </PixInfo>
        </GenerosityContent>
      </Container>
    </GenerosityContainer>
  );
};