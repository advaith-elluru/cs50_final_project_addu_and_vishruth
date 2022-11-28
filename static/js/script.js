function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
}

function check_test(decision)
{
    $("#table tr").each(function() {
        var one = $(this).find("#one").text();
        var two = $(this).find("#two").text();

        var $answer = $(this).find("")
    });
    var correct = 0;
    $("#table tr").each(function() {
        client_answer = $(this).find("#client_answer").val();
        answer = $(this).find("#answer").text();

        var $client_input = $(this).find("#client_answer");

        if (client_answer == answer)
        {
            $client_input.css("background-color", "green");
            correct++;
        }
        else
        {
            $client_input.css("background-color", "red");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

})