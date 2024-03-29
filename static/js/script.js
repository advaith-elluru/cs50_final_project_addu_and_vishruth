// Show number input in past results

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

// Check math test

function check_m_test(decision, pronums, time, avgTime)
{
    $("#table tr").each(function() {

        // Check decision

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
            $answer.text((parseInt(one) / parseInt(two)).toFixed(4));
        }
        else if (decision === "2")
        {
            $answer.text(parseInt(one) ** 2)
        }
    });

    var correct = 0;

    $("#table tbody tr").each(function() {

        // Check answers

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

    // Show all items and get results

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

    // Pass results to results route

    x = {"number_correct": parseInt(correct), "number_of_questions": parseInt(pronums), "percent_correct": (parseInt(correct) / parseInt(pronums)).toFixed(6) * 100, "time": parseFloat(time), "avg_time": parseFloat(avgTime).toFixed(4), "category": "Math"};
    var data = {
        "json": JSON.stringify(x)
    }
    $.ajax({type: "POST", url: "/results", data: data});
}

// Check science test

function check_s_test(number, time, avgTime){
    var correct = 0;

    // Check answers

    $("#table_2 tbody tr").each(function() {
        var $client_answer = $(this).find("#sci_answer");
        var $answer = $(this).find("#answer");

        if ($client_answer.val().toLowerCase() === $answer.text().toLowerCase())
        {
            correct++;
            $client_answer.css("background-color", "green");
        }
        else
        {
            $client_answer.css("background-color", "red");
        }

        $client_answer.attr("disabled", "disabled");
        $answer.show();
    })

    // Show items and get results

    $("#table_2 thead tr #answer_header").css("display", "block");
    $("#test_submit").hide();

    $("#number_correct").text("\xa0" + parseInt(correct) + " problems correct");
    $("#percent_correct").text("\xa0" + (parseInt(correct) / parseInt(number)).toFixed(6) * 100 + "%");
    $("#time_taken").text("\xa0" + parseFloat(time) + " seconds")
    $("#avg_time_taken").text("\xa0\xa0" + parseFloat(avgTime).toFixed(4) + "\xa0 seconds per problem")

    $("#table_2").css("display", "inline-block");
    $("#table_3").css("display", "inline-block");
    $("#table_3").show();
    $("#test-header").text("Results");

    //Pass results to results route

    x = {"number_correct": parseInt(correct), "number_of_questions": parseInt(number), "percent_correct": (parseInt(correct) / parseInt(number)).toFixed(6) * 100, "time": parseFloat(time), "avg_time": parseFloat(avgTime).toFixed(4), "category": "Science"};
    var data = {
        "json": JSON.stringify(x)
    }
    $.ajax({type: "POST", url: "/results", data: data})
}

// Check world studies test

function chk_ws_test(number, seconds, avgTime){
    let client_answer = document.querySelectorAll('#ans');
    let answer = document.querySelectorAll('#answer');
    var correct_ans = 0;

    // Check answers

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

    // Show items and get results

    percentCorrect = (correct_ans/number).toFixed(6) * 100;
    document.querySelector('#avg_time_taken').innerHTML = avgTime;
    document.querySelector('#time_taken').innerHTML = seconds;
    document.querySelector('#percent_correct').innerHTML = percentCorrect;
    document.querySelector('#number_correct').innerHTML = correct_ans;
    document.querySelector('#test_submit').style.display = 'none';
    $("#anscol").show();
    $("#table_5").css("display", "inline-block")
    document.querySelector('#table_6').style.display = 'inline-block';

    var time = seconds;
    var avg_Time = avgTime;

    // Pass results to results route

    x = {"number_correct": parseInt(correct_ans), "number_of_questions": parseInt(number), "percent_correct": percentCorrect, "time": parseFloat(time), "avg_time": parseFloat(avg_Time).toFixed(4), "category": "Social Studies"};
        var data = {
            "json": JSON.stringify(x)
        }
        $.ajax({type: "POST", url: "/results", data: data})
}

// DOM content loaded event listener

document.addEventListener("DOMContentLoaded", function () {

})

