document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы на странице
    const modal = document.getElementById("bookingModal");
    const openBtns = [document.getElementById("openModalBtn"), document.getElementById("openModalBtnHero")];
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("bookingForm");

    // Открытие модального окна по кнопкам
    openBtns.forEach(btn => {
        if(btn) {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                modal.style.display = "flex";
            });
        }
    });

    // Закрытие по крестику
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Закрытие по клику на темный фон
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Обработка отправки формы
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Останавливаем перезагрузку страницы
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        
        // Скрываем окно и очищаем форму
        modal.style.display = "none";
        form.reset();
        
        // Показываем всплывающее уведомление
        showToast(`Заявка принята! ${name}, ждите звонка на номер ${phone}.`);
    });

    // Функция создания уведомления
    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = message;
        document.body.appendChild(toast);
        
        // Анимация появления
        setTimeout(() => { 
            toast.classList.add("show"); 
        }, 100);
        
        // Удаление через 5 секунд
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }
});