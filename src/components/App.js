import React from 'react';
import Header from './landing/Header';
import Bed from './landing/Bed';
import InfoForm from './landing/InfoForm';
import LangSelect from './LangSelect';
import { TranslationContext, translations } from '../contexts/translation/TranslationContext';
import './App.css';

function App() {
  const [lang, setLang] = React.useState('en');

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
        <Header />
        <Bed />
        <InfoForm />
      </TranslationContext.Provider>
      <LangSelect onLangSelect={setLang} />
    </div>
  );
}

export default App;
