import { useI18nContext } from './I18nContext';

export default function ChooseLanguage() {
  const { setLanguage } = useI18nContext();

  return (
    <div>
      <select
        name="selectLanguage"
        defaultValue="he"
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="he">עברית</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
