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
        one = $(this).find("#one").text();
        two = $(this).find("#two").text();

        var $answer = $(this).find("#answer");

        if (decision === "+")
        {
            $answer.text(parseInt(one) + parseInt(two));
        }
        else if (decision === "-")
        {
            $answer.text(parseInt(one) - parseInt(two));
        }
        else if (decision === "x")
        {
            $answer.text(parseInt(one) * parseInt(two));
        }
        else
        {
            $answer.text(parseInt(one) / parseInt(two));
        }
    });

    var correct = 0;
    $("#table tr").each(function() {
        client_answer = $(this).find("#client_answer").val();
        answer = $(this).find("#answer").text();

        var $client_input = $(this).find("#client_answer");
        var $answer = $(this).find("#answer")

        if (parseInt(client_answer) == parseInt(answer))
        {
            $client_input.css("background-color", "green");
            correct++;
        }
        else
        {
            $client_input.css("background-color", "red");
        }

        $answer.show();
    });
}

document.addEventListener("DOMContentLoaded", function () {

})