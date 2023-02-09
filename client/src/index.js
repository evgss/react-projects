import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./redux/Context";
import Favicon from "react-favicon";

const PF = 'http://teploplus-uk.ru/images/'
ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <Favicon url={PF+ 'favicon.ico'}/>
            <App/>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
