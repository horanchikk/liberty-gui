
// <!-- 
// Наши услуги В данном канале вы можете узнать о наших услугах, которые мы предоставляем

// Языки и библиотеки, которые мы используем C# JS VUE HTML CSS

// Выполняем заказы любой сложности
// Сроки зависят от сложности самой работы, но с доплатой могут быть уменьшены

// Гарантия до 1 месяца для исправления недочётов


// Писать по поводу заказов
// 3oxaan#8096 || koltr#7777

// Наш дискорд
// https://discord.gg/KjbKMZnwJX


// ██████╗░░█████╗░██╗░░██╗░█████╗░░█████╗░███╗░░██╗  ██╗░░██╗░█████╗░██╗░░░░░████████╗██████╗░
// ╚════██╗██╔══██╗╚██╗██╔╝██╔══██╗██╔══██╗████╗░██║  ██║░██╔╝██╔══██╗██║░░░░░╚══██╔══╝██╔══██╗
// ░█████╔╝██║░░██║░╚███╔╝░███████║███████║██╔██╗██║  █████═╝░██║░░██║██║░░░░░░░░██║░░░██████╔╝
// ░╚═══██╗██║░░██║░██╔██╗░██╔══██║██╔══██║██║╚████║  ██╔═██╗░██║░░██║██║░░░░░░░░██║░░░██╔══██╗
// ██████╔╝╚█████╔╝██╔╝╚██╗██║░░██║██║░░██║██║░╚███║  ██║░╚██╗╚█████╔╝███████╗░░░██║░░░██║░░██║
// ╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝  ╚═╝░░╚═╝░╚════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝
//  -->

function notify(type, layout, message, time) {
    var types = [
        'alert', 
        'error', 
        'success', 
        'information', 
        'warning'
    ];

    var layouts = [
        'top', 
        'topLeft', 
        'topCenter', 
        'topRight', 
        'center', 
        'centerLeft', 
        'centerRight', 
        'bottom', 
        'bottomLeft', 
        'bottomCenter', 
        'bottomRight'
    ];

    var style = [
        '<div class="icons"><img src="assets/notify/alert.svg"></div>', 
        '<div class="icons"><img src="assets/notify/error.svg"></div>',
        '<div class="icons"><img src="assets/notify/success.svg"></div>',
        '<div class="icons"><img src="assets/notify/alert.svg"></div>',
        '<div class="icons"><img src="assets/notify/warning.svg"></div>'
    ]

    message = 
    '<div class="new_notify">'
        +style[type]+
        '<div class="descript">'
            +message+
       '</div>'
    '</div>'
    ;

    new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: '3oxaan',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        }
    }).show();
}