import {Switch, Route, Redirect} from 'react-router-dom';
import AboutUs from './components/About-us';
import Bianco from './components/Bianco';
import Contact from './components/Contact';
import Products from './components/Products';
import theme from './themeConfig'
import {ThemeProvider} from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/bianco' />
        </Route>
        <Route path='/bianco'>
          <Bianco />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
