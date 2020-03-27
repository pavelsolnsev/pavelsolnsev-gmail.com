$(function() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });

  $(".btn").click(function() {
    $(this).css("background-color", " yellow");
  });
});

let userName = "Вася";

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = "Привет, " + userName; // Петя;;;
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName\
showMessage();

alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную
