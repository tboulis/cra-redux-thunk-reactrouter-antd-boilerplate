import _ from 'lodash';
import LocalizedStrings from 'react-localization';

// Load all supported languages.
import languages from '../languages';

const defaultLanguage = 'gr';

// Set up localization.
const localization = new LocalizedStrings(languages);

// Translates a message.
// If the message contains placeholders, it also replaces them with the arguments.
const tr = (message, ...args) => {
  const trmessage = localization[message];
  if (_.isEmpty(args)) {
    return trmessage;
  }
  return localization.formatString(trmessage, ...args);
};

// Gets the displayed language.
const getLanguage = () => {
  return localization.getLanguage();
};

// Sets the displayed language.
const setLanguage = (language) => {
  return localization.setLanguage(language);
};

// Gets all available languages.
const getLanguages = () => {
  return localization.getAvailableLanguages();
};

export {
  defaultLanguage,
  getLanguage,
  getLanguages,
  setLanguage,
  tr
};
