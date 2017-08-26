import languages from "../languages.json";

const LanguageToggle = ({ language, onLanguageChange }) =>
  <select value={language} onChange={onLanguageChange}>
    {languages.map((lang, index) => {
      return (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      );
    })}
    <style jsx>{`
      select {
        appearence: none;
        background: none;
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        font-size: 12px;
        color: rgba(0, 0, 0, .5);
      }
    `}</style>
  </select>;

export default LanguageToggle;
