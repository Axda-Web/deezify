import StyledApp from './App.styled'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    body: '#FFF'
  },
  bgColors: {
    body: '#000'
  },
  fonts: {
    body: `'Roboto', sans-serif`
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyles />
        <h1>App</h1>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
