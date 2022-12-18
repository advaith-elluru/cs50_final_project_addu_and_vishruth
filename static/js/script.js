function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
}

function check_m_test(decision, pronums, time, avgTime)
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

    $("#number_correct").text("\xa0" + parseInt(correct) + " problems correct");
    $("#percent_correct").text((parseInt(correct) / parseInt(pronums)).toFixed(6) * 100 + "%");
    $("#time_taken").text(parseFloat(time) + " seconds")
    $("#avg_time_taken").text("\xa0\xa0" + parseFloat(avgTime).toFixed(4) + "\xa0 seconds per problem")

    $("#table").css("display", "inline-block");
    $("#table_1").css("display", "inline-block");
    $("#table_1").show();
    $("#test-header").text("Results");

    x = {"number_correct": parseInt(correct), "number_of_questions": parseInt(pronums), "percent_correct": (parseInt(correct) / parseInt(pronums)).toFixed(6) * 100, "time": parseFloat(time), "avg_time": parseFloat(avgTime).toFixed(4)};
    var data = {
        "json": JSON.stringify(x)
        "type": "math"
    }
    $.ajax({type: "POST", url: "/results", data: data,});
}

function check_s_test(){

}


document.addEventListener("DOMContentLoaded", function () {

})