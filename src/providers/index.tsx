'use client';

import React from 'react';
import ReactQueryProvider from './react-query-provider';
import { ToasterProvider } from './toaster-provider';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/source';
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      {/* <ReduxProvider> */}
      {/* <HigherOrderComponent> */}

      <ToasterProvider />
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>

      {/* </HigherOrderComponent> */}
      {/* </ReduxProvider> */}
    </ReactQueryProvider>
  );
};
