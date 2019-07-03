$(document).ready(function () {
    $(".calc-button-number").click(function () {
        var result = $(".calc-result-current-value").html();
        if (result == 0) {
            var num = $(this).text();
            $(".calc-result-current-value").html(num);
        }
        if (result != 0) {
            var num = $(this).text();
            $(".calc-result-current-value").html(result + num);
        }
    });

    $(".calc-button-clear").click(function () {
        $(".calc-result-current-value").html("0");
    });

    $(".calc-button-back").click(function () {
        var result = $(".calc-result-current-value").html();
        if (result != 0) {
            $(".calc-result-current-value").html(result.slice(0, -1));
        }
        
    });

    $(".calc-button-multiply").click(function () {
        var result = $(".calc-result-current-value").html();
        var a = result.slice(-1);
        if (result.slice(-1) != "*" && result.slice(-1) != ".") {
            $(".calc-result-current-value").html(result + "*");
        }
    });

    $(".calc-button-divide").click(function () {
        var result = $(".calc-result-current-value").html();
        var a = result.slice(-1);
        if (result.slice(-1) != "/" && result.slice(-1) != ".") {
            $(".calc-result-current-value").html(result + "/");
        }
    });

    $(".calc-button-subtract").click(function () {
        var result = $(".calc-result-current-value").html();
        var a = result.slice(-1);
        if (result.slice(-1) != "-" && result.slice(-1) != ".") {
            $(".calc-result-current-value").html(result + "-");
        }
    });

    $(".calc-button-add").click(function () {
        var result = $(".calc-result-current-value").html();
        var a = result.slice(-1);
        if (result.slice(-1) != "+" && result.slice(-1) != ".") {
            $(".calc-result-current-value").html(result + "+");
        }
    });

    $(".calc-button-comma").click(function () {
        var result = $(".calc-result-current-value").html();
        var a = result.slice(-1);
        if (result.slice(-1) != ".") {
            $(".calc-result-current-value").html(result + ".");
        }
    });

    $(".calc-button-equals").click(function () {
        var result = $(".calc-result-current-value").html();
        var otvet = eval(result);
        $(".calc-result-current-value").html(otvet);
        
    });

    addEventListener("keydown", moveRect);
    function moveRect(e) {
        var result = $(".calc-result-current-value").html();
        if (result == 0) {
            if (e.keyCode == 49) { $(".calc-result-current-value").html(1); }
            if (e.keyCode == 50) { $(".calc-result-current-value").html(2); }
        }
        if (result != 0) {
            if (e.keyCode == 49) { $(".calc-result-current-value").html(result + 1); }
            if (e.keyCode == 50) { $(".calc-result-current-value").html(result + 2); }
        }
        }

    
});