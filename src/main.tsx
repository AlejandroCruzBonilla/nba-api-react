import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import { NextUIProvider } from '@nextui-org/react';
import { UIProvider } from './context/ui/index.ts';
import MainLayout from './components/Layouts/MainLayout.tsx';

import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <UIProvider>
          <MainLayout>
						<AppRouter/>
          </MainLayout>
        </UIProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
