function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
    else
    {
        y.style.display = "none";
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
        else if (decision === "/")
        {
            $answer.text(parseInt(one) / parseInt(two));
        }
        else if (decision === "2")
        {
            $answer.text(parseInt(one) ** 2)
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

    x = {"number_correct": parseInt(correct), "number_of_questions": parseInt(pronums), "percent_correct": (parseInt(correct) / parseInt(pronums)).toFixed(6) * 100, "time": parseFloat(time), "avg_time": parseFloat(avgTime).toFixed(4), "category": "Math"};
    var data = {
        "json": JSON.stringify(x)
    }
    $.ajax({type: "POST", url: "/results", data: data});
}

function check_s_test(number, time, avgTime){
    var correct = 0;
    $("#table_2 tbody tr").each(function() {
        var client_answer = $(this).find("#sci_answer").val();
        var answer = $(this).find("#answer").text();

        if (client_answer.toLowerCase() === answer.toLowerCase())
        {
            correct++;
        }

        $(this).find("#answer").show()
    })

    $("#table_2 thead tr #answer_header").css("display", "block");
    $("#test_submit").hide();

    $("#number_correct").text("\xa0" + parseInt(correct) + " problems correct");
    $("#percent_correct").text((parseInt(correct) / parseInt(number)).toFixed(6) * 100 + "%");
    $("#time_taken").text(parseFloat(time) + " seconds")
    $("#avg_time_taken").text("\xa0\xa0" + parseFloat(avgTime).toFixed(4) + "\xa0 seconds per problem")

    $("#table_2").css("display", "inline-block");
    $("#table_3").css("display", "inline-block");
    $("#table_3").show();
    $("#test-header").text("Results");

    x = {"number_correct": parseInt(correct), "number_of_questions": parseInt(number), "percent_correct": (parseInt(correct) / parseInt(number)).toFixed(6) * 100, "time": parseFloat(time), "avg_time": parseFloat(avgTime).toFixed(4), "category": "Science"};
    var data = {
        "json": JSON.stringify(x)
    }
    $.ajax({type: "POST", url: "/results", data: data})
}


function chk_ws_test(number, seconds, avgTime){
    let client_answer = document.querySelectorAll('#ans');
    let answer = document.querySelectorAll('#answer');
    var correct_ans = 0;

    for(var i = 0; i < client_answer.length; i++){
        let value_ans = client_answer[i].value;
        let result = value_ans.localeCompare(answer[i].innerText);
        if(result == 0)
        {
            correct_ans = correct_ans + 1;
            client_answer[i].style.backgroundColor = 'green';
        }
        else if(result != 0)
        {
            client_answer[i].style.backgroundColor = 'red';
        }
        answer[i].style.display = 'block';
    }

    percentCorrect = (correct_ans/number).toFixed(6) * 100;
    document.querySelector('#avg_time_taken').innerHTML = avgTime;
    document.querySelector('#time_taken').innerHTML = seconds;
    document.querySelector('#percent_correct').innerHTML = percentCorrect;
    document.querySelector('#number_correct').innerHTML = correct_ans;
    document.querySelector('#test_submit').style.display = 'none';
    var time = seconds;
    var avg_Time = avgTime;
    // Var
    document.querySelector('#table_3').style.display = 'inline-block';

    x = {"number_correct": parseInt(correct_ans), "number_of_questions": parseInt(number), "percent_correct": percentCorrect, "time": parseFloat(time), "avg_time": parseFloat(avg_Time).toFixed(4), "category": "Social Studies"};
        var data = {
            "json": JSON.stringify(x)
        }
        $ajax({type: "POST", url: "/results", data: data})
}

document.addEventListener("DOMContentLoaded", function () {

})

