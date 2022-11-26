function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
}

function check_test()
{
    var correct = 0;
    $("#table tr").each(function() {
        var client_answer = $(this).find("#client_answer").val();
        var answer = $(this).find(".answer").text();
        var now = $(this).eq(4);

        if (client_answer == answer)
        {
            var color = $(this).eq(4).css("background-color");
            alert(color);
            $(now).eq(4).css("background-color: green");
            correct++;
        }
        else
        {
            var color = $(this).eq(4).css("background-color");
            alert(color);
            $(now).eq(4).css("background-color: red");
        }
    });
    alert(correct);
}

document.addEventListener("DOMContentLoaded", function () {

})