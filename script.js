// Функция для кнопки "Начать полет"
function showAlert() {
   alert("Поехали! Подготовка к запуску завершена.");
}

// Находим кнопку смены темы
const themeBtn = document.getElementById('themeToggle');

// Когда нажимаем на кнопку, меняется тема сайта
themeBtn.onclick = function() {
   document.body.classList.toggle('dark-theme');

   if (document.body.classList.contains('dark-theme')) {
       themeBtn.innerText = "Светлая тема";
   } else {
       themeBtn.innerText = "Тёмная тема";
   }
};

// Плавная прокрутка по разделам сайта
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});
