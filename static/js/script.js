function choose()
{
    var x = document.getElementById("choice");
    var y = document.getElementById("amount");
    if (x.options[x.selectedIndex].value === "best_percentage" || x.options[x.selectedIndex].value === "best_time")
    {
        y.style.display = "block";
    }
}

function test()
{
    var correct = 0;
    $("#table tr").each(function() {
        var client_answer = $(this).find(".client_answer").text;
        var answer = $(this).find(".answer").text;

        if (client_answer == answer)
        {
            
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

})