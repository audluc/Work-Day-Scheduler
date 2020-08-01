// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
    let current = moment().hour();
    let todos = []
    $(".time-block").each(function (index) {
        let id = parseInt($(this).attr("id"))
        console.log(id, current);
        if (current > id) {
            $(this).addClass("past")
        }
        else if (current === id) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    });
    $(".saveBtn").click(function () {
        console.log("click")
        let value = $(this).siblings(".description").val()
        let time = $(this).parent().attr("id")
        todos.push({ value: value, time: time })
        console.log(todos)

    })
});








