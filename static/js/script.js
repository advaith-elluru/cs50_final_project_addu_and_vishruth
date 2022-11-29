function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
}

function check_test(decision, pronums)
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

    $("#table tbody tr").each(function() {
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

        $client_input.attr("disabled", "disabled");
        $answer.show();
    });

    $("#table thead tr #answer_header").css("display", "block");
    $("#test_submit").hide();

    $("#number_correct").text(parseInt(correct));
    $("#percent_correct").text(parseInt(correct)/parseInt(pronums))
}

document.addEventListener("DOMContentLoaded", function () {

})