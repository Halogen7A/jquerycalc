/*
 * Implement all your JavaScript in this file!
 */

$(document).ready(function() {
    var display = '';
    var multipleOp = false;
    var buttonsClicked = [];
    $('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').each(function (index, element) {
        $(this).click(function (e) {
            buttonsClicked.push($(this).val());
            if(multipleOp) {
                $("input[name='display']").val('');
                multipleOp = false;
            }
            $("input[name='display']").val($("input[name='display']").val() + $(this).val());
            display += $(this).val();
        });
    });

    $('#addButton, #subtractButton, #multiplyButton, #divideButton').each(function (index, element) {
        $(this).click(function (e) {
            buttonsClicked.push($(this).val());
            if(/[\+\-\*\/]$/.test(display)) {
                display = display.replace(/[\+\-\*\/]$/, $(this).val());
                console.log("we are in!")
                return false;
            }
            if(/[\+\-\*\/]+/.test(display)) {
                display = eval(display);
                $("input[name='display']").val(display);
                multipleOp = true;
                display += $(this).val();
            }
            else {
                $("input[name='display']").val('');
                display += $(this).val();
            }
        });
    })

    $('#clearButton').click(function() {
        buttonsClicked.push($(this).val());
        $("input[name='display']").val('');
        display = '';

    })

    $('#equalsButton').click(function() {
        buttonsClicked.push($(this).val());
        if(/[\+\-\*\/]$/.test(display)) {
            display = display.replace(/[\+\-\*\/]$/, '');
        }
        if(buttonsClicked[buttonsClicked.length - 1] === '=' && buttonsClicked[buttonsClicked.length - 2] === '=') {
            index = display.search(/[\+\-\*\/][0-9]+$/);
            display += display.slice(index);
            console.log(display);
        }
        $("input[name='display']").val(eval(display));
    })


})

