function translateText() {
    const sourceText = document.getElementById("sourceText").value;
    const targetLanguage = document.getElementById("targetLanguage").value;
    const apiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY";

    // Replace "YOUR_GOOGLE_TRANSLATE_API_KEY" with your actual API key

    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
        q: sourceText,
        target: targetLanguage
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById("translatedText").innerText = translatedText;
    })
    .catch(error => console.error("Error translating text:", error));
}
