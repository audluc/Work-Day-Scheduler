// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
    let current = moment().hour();
    let todos = []

    //color change depending on time
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
        // local storage 
        let dataStored = localStorage.getItem(id);
        console.log('dataStored: ${dataStored}');
        
        //textarea for calendar
        console.log('this: ${this}');
        console.log('this > "textarea": ${JSON.stringify($(this > "textarea))}')
        $(this).find("texarea").val(dataStored);
    });

    $(".saveBtn").click(function () {
        console.log("click")
        let value = $(this).siblings(".description").val()
        let time = $(this).parent().attr("id")
        todos.push({ value: value, time: time })
        console.log(todos)

        //current date
        let timeblock = moment().format("MMM Do YY");
        $(".time-block").append(timeblock);



        var descriptionInput = document.querySelector("#description");
        var saveBtn = description.querySelector("description")

        function renderLastRegistered() {
            var description = localStorage.getItem(".description");
            if (!description) {
                return;
            }
        }
    });
})
