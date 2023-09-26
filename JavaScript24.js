$('.box').click(function () {
    $(this).css('background', 'red')
})

$('.box2').click(function () {
    $(this).css('background', 'red')
})

$('.box2:first').click(function () {
    $(this).css('background', 'green')
})

$('.box3').click(function () {
    $(this).css('background', 'red')
})

$('.box3:last').click(function () {
    $(this).css('background', 'green')
})

$('.btn').click(function () {
    $('.block4').append('<div class="box4 red"></div>')
})

$('.btn2').click(function () {
    $('.block5').prepend('<div class="box5 red"></div>')
})

$('.btn3').click(function () {
    $('<div class="box6 red2"></div>').prependTo('.block6')
})

$('.btn4').click(function () {
    $('<div class="box7 red2"></div>').appendTo('.block7')
})

$('.btn5').click(function () {
    $('.block8').before('<div class="box5 red3"></div>')
})

$('.btn6').click(function () {
    $('.block9').after('<div class="box5 red3"></div>')
})

$('.btn7').click(function () {
    $('.box10').empty()
})

$('.btn8').click(function () {
    $('.box11').remove()
})

$('.btn9').click(function () {
    $('.box12').height($('.inp').val())
})

$('.btn10').click(function () {
    $('.box13').width($('.inp2').val())
})