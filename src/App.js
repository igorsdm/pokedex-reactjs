import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './config/configReactotron';

import GlobalStyle from './styles/global';
import Routes from './routes';
import globalTheme from '~/styles/colors';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={globalTheme}>
            <Routes />
            <GlobalStyle />
          </ThemeProvider>
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
