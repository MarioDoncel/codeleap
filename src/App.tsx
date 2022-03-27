import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { queryClient } from './config/queryClient';
import { Router } from './routes';
import store from './store';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
