function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Текст скопирован: " + text);
      })
      .catch((err) => {
        console.error("Ошибка копирования: ", err);
      });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Текст скопирован (с использованием fallback): " + text);
  }
}


document.querySelectorAll(".track-button").forEach((button) => {
  button.addEventListener("click", function () {
    const trackName = this.getAttribute("data-track");
    if (trackName) {
      copyToClipboard(trackName);
    } else {
      alert("Ошибка: трек не найден!");
    }
  });
});
