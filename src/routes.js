import React from 'react';
import Dashboard from './layouts/dashboard/Dashboard';
import ComposeContainer from './containers/compose/ComposeContainer';
import InboxContainer from './containers/inbox/InboxContainer';
import DraftsContainer from './containers/drafts/DraftsContainer';
import TrashContainer from './containers/trash/Trash';
import SpamContainer from './containers/spam/SpamContainer';
import SignupContainer from './containers/signup/SignupContainer';
import LoginContainer from './containers/login/LoginContainer';
import NotFound from './components/not-found/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Dashboard><InboxContainer /></Dashboard>
    }, {
        path: '/compose',
        exact: true,
        main: () => <Dashboard><ComposeContainer /></Dashboard>
    }, {
        path: '/drafts',
        exact: true,
        main: () => <Dashboard><DraftsContainer /></Dashboard>
    }, {
        path: '/trash',
        exact: true,
        main: () => <Dashboard><TrashContainer /></Dashboard>
    }, {
        path: '/spam',
        exact: true,
        main: () => <Dashboard><SpamContainer /></Dashboard>
    }, {
        path: '/signup',
        exact: false,
        main: () => <SignupContainer />
    }, {
        path: '/login',
        exact: false,
        main: () => <LoginContainer />
    }, {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;