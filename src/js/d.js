$("#contacts__send").on("click", function(e){
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();      // val - получить значение;  trim- удаляет лишние пробелы в строке
    let text = $("#text").val().trim();   

    e.preventDefault();

    if(name == "") {
        $("#errorMess").text("Введите ваше имя");
        return false;
    }  else if(email == "") {
        $("#errorMess").text("Введите ваш email");
        return false;
    } else  if(text == "") {
        $("#errorMess").text("Введите ваше сообщение");
        return false;
    }     
    
    $("#errorMess").text("");

    $.ajax({
        url:'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email, 'text': text },
        dataType: 'html',
        beforeSend: function() {
            $("#contacts__send").prop("disable", true);
        },
        success: function(data){
            if(!data)
                alert("Были ошибки, сообщение не отправлено!");
            else
            $("#form").trigger("reset");

            $("#contacts__send").prop("disable", false);
        }

    });

});