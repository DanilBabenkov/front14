document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list');
});
$(document).ready(function () {
    var clo = $(".item").clone();

    $(".delete-button").click(function () {
        var par = $(this).parent();
        par.remove();
    });

    $(".down-button").click( function () {
        var up = $(this).parent();
        var up1 = $(this).parent().next();

        var key = up[0].children[0];
        var val = up[0].children[1];
        var key1 = up1[0].children[0];
        var val1 = up1[0].children[1];

        val.replaceWith(val1.cloneNode(true));
        val1.replaceWith(val);

        key.replaceWith(key1.cloneNode(true));
        key1.replaceWith(key);

        return false;
    });

    $(".up-button").click( function () {
            var up = $(this).parent();
            var up1 = $(this).parent().prev();

            var key = up[0].children[0];
            var val = up[0].children[1];
            var key1 = up1[0].children[0];
            var val1 = up1[0].children[1];

            val.replaceWith(val1.cloneNode(true));
            val1.replaceWith(val);

            key.replaceWith(key1.cloneNode(true));
            key1.replaceWith(key);
            return false;
    });
    function modifyText() {
        var cloo = clo.clone().appendTo(".list")[0];
    }
        $(".list").on("click", function () {
        $(".delete-button").on("click", function () {
            var par = $(this).parent();
            par.remove();
        });
        $(".down-button").on("click", function () {
            
                var up = $(this).parent();
                var up1 = $(this).parent().next();

                var key = up[0].children[0];
                var val = up[0].children[1];
                var key1 = up1[0].children[0];
                var val1 = up1[0].children[1];

                val.replaceWith(val1.cloneNode(true));
                val1.replaceWith(val);

                key.replaceWith(key1.cloneNode(true));
                key1.replaceWith(key);
            });
            $(".up-button").on("click", function () {

                var up = $(this).parent();
                var up1 = $(this).parent().prev();

                var key = up[0].children[0];
                var val = up[0].children[1];
                var key1 = up1[0].children[0];
                var val1 = up1[0].children[1];

                val.replaceWith(val1.cloneNode(true));
                val1.replaceWith(val);

                key.replaceWith(key1.cloneNode(true));
                key1.replaceWith(key);
            });
        });
        //cloo.$(".delete-button").click(function () {
        //    var par = $(this).parent();
        //    par.remove();
        //});
        //var down = $(".down-button");
        //cloo.down.click(function () {
        //    var up = $(this).parent();
        //    var up1 = $(this).parent().next();

        //    var key = up[0].children[0];
        //    var val = up[0].children[1];
        //    var key1 = up1[0].children[0];
        //    var val1 = up1[0].children[1];

        //    val.replaceWith(val1.cloneNode(true));
        //    val1.replaceWith(val);

        //    key.replaceWith(key1.cloneNode(true));
        //    key1.replaceWith(key);
        //    return false;
        //});
       // var up = $(".up-button");
       //cloo.up.click(function () {
       //     var up = $(this).parent();
       //     var up1 = $(this).parent().prev();

       //     var key = up[0].children[0];
       //     var val = up[0].children[1];
       //     var key1 = up1[0].children[0];
       //     var val1 = up1[0].children[1];

       //     val.replaceWith(val1.cloneNode(true));
       //     val1.replaceWith(val);

       //     key.replaceWith(key1.cloneNode(true));
       //     key1.replaceWith(key);
       //     return false;
       // });

    var ad = document.getElementById("ad");
   ad.addEventListener("click", modifyText, false);

    $(".save-button").on("click", function () {
        var list = document.getElementsByClassName("list")[0];
        var arr = {};
        var i = 0;
        if (list.children.length != 1) {
            while (list.lastChild != list.children[i - 1]) {
                j = list.children[i].children[0].value;
                arr[j] = list.children[i].children[1].value;
                i = i + 1;
            }
        } else {
            while (list.lastChild.previousSibling != list.children[i - 1]) {
                j = list.children[i].children[0].value;
                arr[j] = list.children[i].children[1].value;
                i = i + 1;
            }
        }
        var myJSON = JSON.stringify(arr);
        $(".result").html(myJSON);

    });
});