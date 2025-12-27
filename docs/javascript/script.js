document.addEventListener("DOMContentLoaded", function() {
  const hero = document.getElementById("hero");
  const target = document.getElementById("start");

  if (hero && target) {
    hero.addEventListener("click", function(event) {
      event.preventDefault(); // blokuje domyślną akcję <a>
      const offset = 2*67 + 20;
      const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    });
  }
});

/*
PODSTAWOWE UZUPEŁNIANIE
const words = [
  "Dior Sauvage",
  "Bleu de Chanel",
  "Creed Aventus",
  "Acqua di Gio Profumo",
  "Paco Rabanne 1 Million",
  "Versace Eros",
  "Hugo Boss The Scent",
  "Yves Saint Laurent Y",
  "Tom Ford Tobacco Vanille",
  "Jean Paul Gaultier Le Male",
  "Azzaro The Most Wanted",
  "Terre d'Hermès",
  "Davidoff Cool Water",
  "Mont Blanc Explorer",
  "Prada Luna Rossa",
  "Givenchy Gentleman",
  "Calvin Klein CK One",
  "Armani Code",
  "Invictus by Paco Rabanne",
  "Issey Miyake L'Eau d'Issey"
];

document.querySelectorAll('.select-box').forEach(selectBox => {
  const input = selectBox.querySelector('input');
  const options = selectBox.querySelector('.options');

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    options.innerHTML = '';

    if (!value) {
      options.classList.remove('active');
      return;
    }

    const matches = words.filter(word =>
      word.toLowerCase().includes(value)
    );

    if (!matches.length) {
      options.classList.remove('active');
      return;
    }

    matches.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;

      li.addEventListener('click', () => {
        input.value = word;
        options.classList.remove('active');
      });

      options.appendChild(li);
    });

    options.classList.add('active');
  });
});

document.getElementById('sendBtn').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.select-card input');
  const data = {};

  inputs.forEach((input, index) => {
    const key = input.name || `pole_${index + 1}`;
    data[key] = input.value.trim();
  });

  generateCSV(data);
});


function generateCSV(data) {
  const headers = Object.keys(data).join(',');
  const values = Object.values(data)
    .map(value => `"${value.replace(/"/g, '""')}"`)
    .join(',');

  const csvContent = `${headers}\n${values}`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'formularz_perfumy.csv';
  a.click();

  URL.revokeObjectURL(url);
} 
*/
