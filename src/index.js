import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom'
import ColorProvider from './components/color-hooks';



ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);

