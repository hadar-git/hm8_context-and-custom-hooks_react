import { useState, useEffect } from 'react';
import { useI18nContext } from './I18nContext';
import { translate } from './translate';

export default function GreetingCard({ greeting }) {
  const { language } = useI18nContext();
  const [text, setText] = useState(greeting);

  useEffect(() => {
    translate(greeting, language).then(setText);
  }, [language, greeting]);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
