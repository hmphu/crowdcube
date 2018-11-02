import React from 'react';
import { render } from 'react-dom';

import AppContainer from './containers/AppContainer';
import './styles/main.less';

render(<AppContainer />, document.querySelectorAll('#rootElement')[0]);
