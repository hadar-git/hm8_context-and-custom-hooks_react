import ChooseLanguage from './ChooseLanguage';
import { useI18nContext } from './I18nContext';

function App() {
  const { language } = useI18nContext();

  return (
    <>
      <ChooseLanguage />
      <p>שפה הנוכחית {language}</p>
    </>
  );
}

export default App;
