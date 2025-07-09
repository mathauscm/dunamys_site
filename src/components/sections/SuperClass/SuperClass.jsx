import React from 'react';
import { Container, Card } from '../../common';
import {
  SuperClassContainer,
  SuperClassHeader,
  SuperClassIcon,
  SuperClassBadge,
  SuperClassTitle,
  SuperClassSubtitle,
  SuperClassContent,
  SuperClassDescription,
  SuperClassHighlight,
} from './SuperClass.styles';

export const SuperClass = () => {
  return (
    <SuperClassContainer id="superclass">
      <Container>
        <SuperClassHeader>
          <SuperClassIcon>📖</SuperClassIcon>
          <SuperClassBadge>LIVING SCHOOL</SuperClassBadge>
        </SuperClassHeader>
        
        <SuperClassContent>
          <SuperClassTitle>SuperClasse</SuperClassTitle>
          <SuperClassSubtitle>Prepare-se para o Avivamento!</SuperClassSubtitle>
          
          <SuperClassDescription>
            SuperClasse é a turma presencial da graduação <strong>LIVING SCHOOL</strong>, 
            um Curso interdenominacional e modular, idealizado para capacitar os filhos de Deus para a vida cristã.
          </SuperClassDescription>
          
          <SuperClassDescription>
            Ensinando os principais pilares do cristianismo de maneira dinâmica e objetiva. 
            A SuperClasse ensinará os fundamentos bíblicos mais importantes para sua construção espiritual.
          </SuperClassDescription>

          <Card>
            <SuperClassHighlight>
              Os módulos são ministrados aos finais de semana, uma vez por mês.
            </SuperClassHighlight>
          </Card>
        </SuperClassContent>
      </Container>
    </SuperClassContainer>
  );
};