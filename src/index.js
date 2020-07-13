import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { GlobalStyle } from './utils';
import { defaultTheme, darkTheme } from './utils';
import { SignUpModal } from './components';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Toggle DarkTheme
      </button>

      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
