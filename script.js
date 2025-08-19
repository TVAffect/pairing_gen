const listRPersSchizoRIP = [
  "Остри",
  "Звера",
  "Вилсент(Ви)",
  "Багула",
  "Краткий",
  "Королёк",
  "Шаурма",
  "Ёшка"
];

const listCharsSchizoRIP = [
  "Плантик",
  "Эббл",
  "Яша",
  "Касане Тето",
  "Ненера Бицу",
  "Эрно Микконен",
  "Золотая Чаша",
  "Ничто"
];

const listHaukka = [
  "Сильван",
  "Ася",
  "Бальроски",
  "Тявка",
  "Недзуко Камадо",
  "Виня",
  "Серый Волк (Сорока)",
  "Лаффэ",
  "Адо",
  "Сырный Шарик",
  "Ленивые Голубцы",
  "Лазурёнок",
  "Лисья Душонка",
  "Алёна",
  "Фишер",
  "Пирог",
  "Разум",
  "Тайни",
  "Йост"
];

const symbols = [
    "/",
    " x "
];

let workList;

let selectedChar;

$(document).ready(() => {
    const slides = $(".slidable");
    let currentSlide = 0;

    slides.hide().eq(0).show();

    function changeSlide(nextIndex) {
        if (nextIndex < 0 || nextIndex >= slides.length) return;

        slides.eq(currentSlide).fadeOut(400, function () {
            slides.eq(nextIndex).fadeIn(400);
            currentSlide = nextIndex;
        });
    }

    $('#choice-1-1-next').click(function() {
        workList = listRPersSchizoRIP;
        console.log("Выбран список 'Ролевики Шизополки':", workList);
        changeSlide(1);
    });

    $('#choice-1-2-next').click(function() {
        workList = listCharsSchizoRIP;
        console.log("Выбран список 'Персонажи Шизополки':", workList);
        changeSlide(1);
    });

    $('#choice-1-3-next').click(function() {
        workList = listHaukka;
        console.log("Выбран список 'Хаукка':", workList);
        changeSlide(1);
    });

    $('#choice-1-4-next').click(function() {
        console.log("Выбран кроссовер");
        changeSlide(2);
    });

    $('#choice-22-1-next').click(function() {
        workList = listRPersSchizoRIP.concat(listCharsSchizoRIP);
        console.log("Создан объединённый список Шизополки:", workList);
        changeSlide(1);
    });

    $('#choice-22-2-next').click(function() {
        workList = listRPersSchizoRIP.concat(listCharsSchizoRIP, listHaukka);
        console.log("Создан объединённый список всего:", workList);
        changeSlide(1);
    });

    $('#choice-2-2-next').click(function() {
        changeSlide(4);

        $('#container').empty(); 

        let options = workList;

        let $select = $('<select id="charSel"></select>');

        $select.append('<option selected disabled> -- </option>');

        $.each(options, function(index,value) {
        $('<option></option>').val(value).text(value).appendTo($select);
        });

        $('#container').append($select);

        $('#charSel').on('change', function() {
        selectedChar = $(this).val();
        console.log("Выбран:", selectedChar);
        });
    });

    $('#choice-2-1-next').click(function() {
        let char1 = workList[Math.floor(Math.random() * workList.length)];
        console.log(char1)
        let char2 = workList[Math.floor(Math.random() * workList.length)];
        console.log(char2)
        let usedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        console.log(usedSymbol)
        pairing=(char1+usedSymbol+char2)
        document.querySelector("#output").innerHTML=pairing
        changeSlide(3)
    });

    $('#choice-33-1-next').click(function() {
        let num = Math.floor(Math.random() * 2 )
        if (num == 1) {
            var char1 = selectedChar;
            console.log("Выбранный персонаж на первом месте");
            var char2 = workList[Math.floor(Math.random() * workList.length)];
            console.log("Второй персонаж:", char2)
            var usedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            console.log(usedSymbol)
        }
        else {
            var char2 = selectedChar;
            console.log("Выбранный персонаж на втором месте");
            var char1 = workList[Math.floor(Math.random() * workList.length)];
            console.log("Первый персонаж:", char1)
            var usedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            console.log(usedSymbol)
        }
        pairing=(char1+usedSymbol+char2)
        document.querySelector("#output").innerHTML=pairing
        changeSlide(3)
    });

    $('#back2').click(function(){
        changeSlide(0)
    });

    $('#back22').click(function(){
        changeSlide(0)
    });

    $('#back3').click(function(){
        changeSlide(0)
    });

    $('#back33').click(function(){
        changeSlide(1)
    });

});

/*
    8: "Люми(Уска)",
    9: "Таина",
    10: "Шаурма",
    11: "Альтеры Уски",
    12: "Ничто",
    13: "Тьма",
    14: "Окно",
    15: "Аникет",
    16: "Ёшка",
    17: "Дарьяна",
    18: "Пикчер",
    19: "Карась",
    20: "Фриггис",
    21: "Золотая Чаша",
    22: "Плюш Ёшка",
    23: "Кон",
    24: "Наглядевшаяся Туманом",
    25: "Тихая Ночь",
    26: "Громкое Утро",
    27: "Острохвостка",
    28: "Нови",
    29: "Лис из плазмы",
    30: "Морожка",
    31: "Плантик",
    32: "Эббл",
    33: "Чашик",
    34: "Кружик",
    35: "Алекс",
    36: "Алиса",
    37: "Баттерс",
    38: "Грациэль",
    39: "Инфи Асу",
    40: "Индра",
    41: "Сущность Созидания(фриггисовская)",
    42: "Сущность Созидания(луисовская)",
    43: "Многовопросье",
    44: "Ликёр",
    45: "Шизополка",
    46: "Персонажи Ленты"
*/
