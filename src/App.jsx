import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Meetings } from './components/sections/Meetings';
import { SuperClass } from './components/sections/SuperClass';
import { Generosity } from './components/sections/Generosity';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Meetings />
      <SuperClass />
      <Generosity />
      <Footer />
    </ThemeProvider>
  );
}

export default App;