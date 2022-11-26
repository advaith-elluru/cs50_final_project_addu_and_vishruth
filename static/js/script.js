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
    var table = document.getElementById("table");
    for (i = 0; i < table.rows.length; i++)
    {
        $("#table").eq(i)(function() {
            var client_answer = $(this).eq(4).val();
            var answer = $(this).eq(5).text();

            if (client_answer == answer)
            {
                $("this").eq(4).css("background-color", "green");
                correct++;
            }
            else
            {
                $(this).eq(4).css("background-color", "red");
            }
        });
    }
    alert(correct);
}

document.addEventListener("DOMContentLoaded", function () {

})