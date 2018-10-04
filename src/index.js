import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { IntlProvider, addLocaleData } from 'react-intl';
import viLocaleData from 'react-intl/locale-data/vi';
import translations from './i18n/locales/translations';
addLocaleData(viLocaleData);

const locale = window.location.search.replace('?locale=', '') || 'en'

const messages = translations[locale];

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: {
            main: '#ff5722',
        },
    },
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <IntlProvider locale={locale} key={locale} messages={messages}>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>
</MuiThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
