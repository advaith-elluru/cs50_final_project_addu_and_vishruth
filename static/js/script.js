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
        alert(client_answer);
        var answer = $(this).find(".answer").text;
        alert(answer);

        if (client_answer == answer)
        {
            $.eq(4)css("background-color: green");
            correct++;
        }
        else
        {
            $this.eq(4).css("background-color: red");
        }
    });
    alert(correct);
}

document.addEventListener("DOMContentLoaded", function () {

})