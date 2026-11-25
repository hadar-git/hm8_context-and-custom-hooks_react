import { useState, useEffect } from 'react';
import { useI18nContext } from './I18nContext';
import { translate } from './translate';

const CONGRATS_TEXT = 'מזל טוב! אתה בן';
const BIRTH_DATE_TEXT = 'תאריך הלידה שלך הוא:';

export default function BirthDate({ birthDate }) {
  const { language } = useI18nContext();
  const [part1, setPart1] = useState(CONGRATS_TEXT);
  const [part2, setPart2] = useState(BIRTH_DATE_TEXT);

  useEffect(() => {
    translate(CONGRATS_TEXT, language).then(setPart1);
    translate(BIRTH_DATE_TEXT, language).then(setPart2);
  }, [language]);

  const age = new Date().getFullYear() - birthDate.getFullYear();
  const dateText = birthDate.toLocaleDateString(language);

  return (
    <div>
      <p>{part1} {age}. {part2} {dateText}</p>
    </div>
  );
}
