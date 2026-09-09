const heart = document.getElementById("heart");

const words = [
  "I love you",
  "I love you",
  "I love you",
  "I love you",
  "I love you",
  "I love you",
];

let index = 0;

// Формула сердца
for (let t = 0; t < Math.PI * 2; t += 0.045) {
  const x = 16 * Math.pow(Math.sin(t), 3);

  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  const text = document.createElement("div");

  text.className = "love";

  text.textContent = words[index % words.length];
  index++;

  // Масштаб
  const scale = 16;

  // Позиция
  text.style.left = `calc(50% + ${x * scale}px)`;
  text.style.top = `calc(50% - ${y * scale}px)`;

  // Небольшое случайное смещение
  text.style.marginLeft = `${Math.random() * 12 - 6}px`;
  text.style.marginTop = `${Math.random() * 12 - 6}px`;

  // Размер
  text.style.fontSize = `${10 + Math.random() * 7}px`;

  // Задержка появления
  text.style.animationDelay = `${Math.random() * 2}s`;

  heart.appendChild(text);
}
