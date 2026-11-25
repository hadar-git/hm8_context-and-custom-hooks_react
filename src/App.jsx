import ChooseLanguage from './ChooseLanguage';
import { useI18nContext } from './I18nContext';
import BirthDate from './BirthDate';
import GreetingsList from './GreetingsList';

const greetings = ['עד 120!', 'שתמיד תהיה מאושר', 'הרבה בריאות ואושר'];

function App() {
  const { language } = useI18nContext();

  return (
    <>
      <ChooseLanguage />
      <p>שפה הנוכחית {language}</p>
      <BirthDate birthDate={new Date(2015, 10, 20)} />
      <GreetingsList greetings={greetings} />
    </>
  );
}

export default App;
