import { useState, useEffect } from 'react';
import { useI18nContext } from './I18nContext';
import { translate } from './translate';

const BIRTH_DATE_TEXT = 'תאריך הלידה שלך הוא:';

export default function BirthDate({ birthDate }) {
  const { language } = useI18nContext();

  const age = new Date().getFullYear() - birthDate.getFullYear();
  const dateText = birthDate.toLocaleDateString(language);
  const congratsText = `מזל טוב! אתה בן ${age}.`;

  const [part1, setPart1] = useState(congratsText);
  const [part2, setPart2] = useState(BIRTH_DATE_TEXT);

  useEffect(() => {
    translate(congratsText, language).then(setPart1);
    translate(BIRTH_DATE_TEXT, language).then(setPart2);
  }, [language, congratsText]);

  return (
    <div>
      <p>{part1} {part2} {dateText}</p>
    </div>
  );
}
