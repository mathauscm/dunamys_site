# Instruções para o Projeto Dunamys

## 📋 Resumo do Projeto

O site Dunamys foi criado com uma arquitetura moderna e organizada, seguindo os princípios SOLID e padrões MVC. O projeto está pronto para ser executado e desenvolvido.

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
cd dunamys
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 3. Build para Produção
```bash
npm run build
```

## 🏗️ Arquitetura Implementada

### Estrutura MVC com SOLID

#### **Models** (`src/models/`)
- `Content.js` - Modelo para artigos, mensagens e conteúdo
- `Event.js` - Modelo para eventos e conferências

#### **Views** (`src/components/`)
- `common/` - Componentes reutilizáveis (Button, Card)
- `navigation/` - Header e Footer
- `sections/` - Seções da página (Hero)
- `forms/` - Formulários (ainda não implementado)

#### **Controllers** (`src/controllers/`)
- `ContentController.js` - Lógica de negócio para conteúdo
- `EventController.js` - Lógica de negócio para eventos

#### **Services** (`src/services/`)
- `ApiClient.js` - Cliente HTTP para API
- `ContentService.js` - Serviço para gerenciar conteúdo
- `EventService.js` - Serviço para gerenciar eventos

### Princípios SOLID Aplicados

1. **Single Responsibility**: Cada classe tem uma única responsabilidade
2. **Open/Closed**: Componentes abertos para extensão, fechados para modificação
3. **Liskov Substitution**: Implementações podem ser substituídas
4. **Interface Segregation**: Interfaces específicas para diferentes necessidades
5. **Dependency Inversion**: Dependências são injetadas

## 🎨 Design System

### Cores
- **Primary**: #d133ff (Roxo)
- **Secondary**: #0ea5e9 (Azul)
- **Gradientes**: Usado no hero e CTAs

### Tipografia
- **Principal**: Inter
- **Secundária**: Poppins

### Componentes Implementados

#### Button
```jsx
<Button variant="primary" size="medium" loading={false}>
  Texto do Botão
</Button>
```

Variantes: `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`
Tamanhos: `small`, `medium`, `large`

#### Card
```jsx
<Card variant="default" padding="medium" hover={true}>
  Conteúdo do Card
</Card>
```

Variantes: `default`, `elevated`, `outlined`, `primary`, `secondary`

## 📱 Funcionalidades Implementadas

### ✅ Completas
- Homepage com hero section responsivo
- Header com navegação mobile/desktop
- Footer com links e newsletter
- Sistema de componentes reutilizáveis
- Arquitetura MVC completa
- Modelos de dados estruturados
- Serviços para API (mock)
- Utilitários e helpers
- Custom hooks para API
- Configuração completa do Tailwind

### 🔄 Próximos Passos

1. **Implementar React Router** para navegação
2. **Criar páginas adicionais**:
   - `/sobre` - Sobre o ministério
   - `/mensagens` - Lista de mensagens
   - `/eventos` - Lista de eventos
   - `/blog` - Blog/artigos
   - `/contato` - Formulário de contato

3. **Integrar com API real**:
   - Implementar backend com Express.js
   - Conectar com banco de dados
   - Implementar autenticação

4. **Adicionar funcionalidades**:
   - Sistema de busca
   - Formulários de contato
   - Newsletter
   - Sistema de comentários

## 🔧 Configuração

### Variáveis de Ambiente
Copie `.env.example` para `.env` e configure:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Dunamys
```

### Tailwind CSS
Configuração personalizada com:
- Cores do ministério
- Animações customizadas
- Componentes utilitários
- Responsividade mobile-first

## 📚 Guia de Desenvolvimento

### Adicionando Nova Página
1. Criar componente em `src/pages/`
2. Adicionar rota (quando implementar Router)
3. Adicionar link no Header/Footer

### Adicionando Novo Componente
1. Criar pasta em `src/components/`
2. Implementar componente com PropTypes
3. Adicionar ao index.js do diretório
4. Documentar props e uso

### Adicionando Novo Serviço
1. Criar classe em `src/services/`
2. Implementar métodos necessários
3. Adicionar ao index.js
4. Criar controller correspondente

### Adicionando Novo Modelo
1. Criar classe em `src/models/`
2. Implementar propriedades e métodos
3. Adicionar factory methods
4. Adicionar ao index.js

## 🛡️ Boas Práticas Implementadas

### Código Limpo
- Nomes descritivos
- Funções pequenas e focadas
- Comentários onde necessário
- Consistência de estilo

### React
- Componentes funcionais
- Hooks personalizados
- PropTypes para validação
- Separação de responsabilidades

### CSS/Tailwind
- Classes utilitárias
- Componentes reutilizáveis
- Design system consistente
- Responsividade mobile-first

### Organização
- Estrutura de pastas clara
- Barrel exports (index.js)
- Separação de concerns
- Documentação completa

## 📊 Métricas do Projeto

- **Componentes**: 7 componentes criados
- **Páginas**: 1 página (Home) implementada
- **Modelos**: 2 modelos de dados
- **Serviços**: 3 serviços implementados
- **Controllers**: 2 controllers
- **Utilitários**: 20+ funções helper
- **Hooks**: 2 custom hooks

## 🎯 Roadmap

### Fase 1 (Atual) ✅
- Estrutura básica
- Homepage
- Componentes essenciais
- Arquitetura MVC

### Fase 2 (Próxima)
- Roteamento
- Páginas de conteúdo
- Formulários
- Integração com API

### Fase 3 (Futuro)
- Autenticação
- Dashboard admin
- Otimizações
- Testes automatizados

## 📞 Suporte

Para dúvidas sobre o projeto:
1. Consulte esta documentação
2. Veja os comentários no código
3. Entre em contato com a equipe

---

**Projeto desenvolvido com ❤️ para o Ministério Dunamys**