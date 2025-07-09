# Dunamys - Site Oficial

Um site moderno e responsivo para o ministério Dunamys, construído com React, Vite, Tailwind CSS e seguindo os princípios SOLID e arquitetura MVC.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **PropTypes** - Validação de props em React
- **JavaScript ES6+** - Linguagem de programação moderna

## 🏗️ Arquitetura

O projeto segue uma arquitetura MVC (Model-View-Controller) com princípios SOLID:

### Estrutura de Pastas

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── common/         # Componentes comuns (Button, Card, etc.)
│   ├── navigation/     # Componentes de navegação (Header, Footer)
│   ├── sections/       # Seções de página (Hero, About, etc.)
│   └── forms/          # Componentes de formulário
├── controllers/        # Controladores (lógica de negócio)
├── models/            # Modelos de dados
├── services/          # Serviços (API, utilitários)
├── hooks/             # Custom hooks React
├── pages/             # Páginas da aplicação
├── layouts/           # Layouts de página
├── utils/             # Utilitários e helpers
└── styles/            # Estilos globais
```

### Princípios SOLID Aplicados

1. **Single Responsibility Principle (SRP)**: Cada componente, service e controller tem uma única responsabilidade
2. **Open/Closed Principle (OCP)**: Componentes são abertos para extensão, fechados para modificação
3. **Liskov Substitution Principle (LSP)**: Componentes podem ser substituídos por suas implementações
4. **Interface Segregation Principle (ISP)**: Interfaces específicas para diferentes necessidades
5. **Dependency Inversion Principle (DIP)**: Dependências são injetadas, não hardcoded

## 🎨 Design System

O projeto utiliza um design system consistente com:

- **Cores primárias**: Roxo (#d133ff) e Azul (#0ea5e9)
- **Tipografia**: Inter (primária) e Poppins (secundária)
- **Componentes**: Button, Card, Header, Footer, Hero
- **Animações**: Fade-in, slide-up, hover effects
- **Responsividade**: Mobile-first approach

## 📱 Funcionalidades

- [x] Homepage com hero section
- [x] Header responsivo com navegação
- [x] Footer com links e newsletter
- [x] Sistema de componentes reutilizáveis
- [x] Arquitetura MVC com controllers e services
- [x] Modelos de dados para Content e Event
- [x] Utilitários e helpers
- [x] Custom hooks para API
- [ ] Páginas de conteúdo (Blog, Mensagens, Eventos)
- [ ] Sistema de busca
- [ ] Formulários de contato
- [ ] Integração com API
- [ ] Sistema de autenticação
- [ ] Dashboard administrativo

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para execução

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd dunamys
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter (se configurado)

## 📦 Build de Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_BASE_URL=https://api.dunamys.com
VITE_APP_NAME=Dunamys
```

### Tailwind CSS

A configuração do Tailwind está em `tailwind.config.js` com:
- Cores personalizadas
- Fontes personalizadas
- Animações customizadas
- Plugins para forms e typography

## 📚 Documentação dos Componentes

### Button
Componente de botão reutilizável com variantes:
- `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`
- Tamanhos: `small`, `medium`, `large`
- Estados: `loading`, `disabled`

### Card
Componente de cartão com:
- Variantes: `default`, `elevated`, `outlined`, `primary`, `secondary`
- Padding configurável
- Efeitos de hover opcionais

### Header
Cabeçalho responsivo com:
- Navegação desktop e mobile
- Logo dinâmico
- Botão CTA
- Menu hambúrguer

### Footer
Rodapé completo com:
- Links organizados por categoria
- Redes sociais
- Newsletter signup
- Informações de copyright

## 🎯 Próximos Passos

1. **Implementar roteamento** com React Router
2. **Criar páginas de conteúdo** (Blog, Mensagens, Eventos)
3. **Desenvolver formulários** de contato e inscrição
4. **Integrar com API** para conteúdo dinâmico
5. **Implementar busca** e filtros
6. **Adicionar testes** unitários e de integração
7. **Configurar CI/CD** para deploy automático
8. **Otimizar performance** com lazy loading
9. **Implementar PWA** features
10. **Adicionar analytics** e monitoramento

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato:
- Email: contato@dunamys.com
- Website: https://dunamys.com

---

**Dunamys** - Transformando vidas através do poder de Deus 🙏