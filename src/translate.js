export async function translate(text, target) {
  if (target === 'he') {
    return text;
  }

  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=he|${target}`
  );

  if (!response.ok) {
    return text;
  }

  const data = await response.json();
  return data.responseData.translatedText;
}
