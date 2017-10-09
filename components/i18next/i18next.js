import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { I18n } from 'react-i18next';

import i18next from 'i18next';

// import i18n from './i18n';
// initialized i18next instance using reactI18nextModule


i18next
 .init({
   debug: false,
   resources: {
     en: {
       namespace1: {
         key: 'hello from namespace 1'
       },
       namespace2: {
         key: 'hello from namespace 2'
       }
     },
     de: {
       namespace1: {
         key: 'hallo von namespace 1'
       },
       namespace2: {
         key: 'hallo von namespace 2'
       }
     }
   }
 });

export default class i18n extends Component {
  render() {
    return (
      <I18n>
        {
          (t, { i18n }) => (
            <div>
              <h1>{t('appName')}</h1>
              <button
                onClick={() => { i18n.changeLanguage('de'); }}>{t('nav:linkDE')}
              </button>
              <button
                onClick={() => { i18n.changeLanguage('en'); }}>{t('nav:linkEN')}
              </button>
              <a
                href='https://github.com/i18next/react-i18next'
                target='_blank'
              >
                {t('nav:link1')}
              </a>
            </div>
          )
        }
      </I18n>
    )
  }
}
