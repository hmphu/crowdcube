import React from 'react';
import { render } from 'react-dom';

import AppContainer from './components/AppContainer/index.jsx';

import './styles/main.less';

render(
  <div>
    <AppContainer />
  </div>,
  document.querySelectorAll('#rootElement')[0],
);
