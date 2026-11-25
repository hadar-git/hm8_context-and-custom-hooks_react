export default function BirthDate({ birthDate }) {
  // הגיל = השנה הנוכחית פחות שנת הלידה
  const age = new Date().getFullYear() - birthDate.getFullYear();

  // התאריך בפורמט 20/11/2015
  const dateText = birthDate.toLocaleDateString('en-GB');

  return (
    <div>
      <p>מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {dateText}</p>
    </div>
  );
}
