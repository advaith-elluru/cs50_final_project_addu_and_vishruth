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
        client_answer = $(this).eq(4).val();
        answer = $(this).eq(5).text();

        var $client_input = $(this).eq(4);

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