$( window ).on( "load", function() {

    var len = localStorage.length;
    var index = 0;
    var elements = 0;
    while (len > elements)
    {

        values = localStorage.getItem(index);
        while (values == null)
        {
            index++;
            values = localStorage.getItem(index);
        }
        if (values)
        {
            $( "#TO\\ DO" ).prepend("<hr class='"+index+"'>");
            $( "#TO\\ DO" ).prepend("<li class='"+index+"'>"+values+"<button onclick='deleteLi(this)' value='"+index+"' id='"+index+"' class='"+index+"'>x</button></li>");
        }
        elements++;
        index++;
    }
});

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function get_last_id() {
    var len = localStorage.length;
    var index = 0;
    var elements = 0;
    while (len > elements)
    {

        values = localStorage.getItem(index);
        while (values == null)
        {
            index++;
            values = localStorage.getItem(index);
        }
        elements++;
        index++;
    }
    return (index);
}

$(document).ready(function(){
    $("#New").on('click', function(){
    var a = get_last_id();
    var mensaje = prompt("Add a new task TO DO:", "");

    if (mensaje == null || mensaje == "")
        mensaje = "Empty tast";
    else
    {
        localStorage.setItem(a, mensaje);
        $( "#TO\\ DO" ).prepend("<hr class='"+a+"'>");
        $( "#TO\\ DO" ).prepend("<li class='"+a+"'>"+mensaje+"<button onclick='deleteLi(this)' value='"+a+"' id='"+a+"' class='"+a+"'>x</button></li>");
        a = a + 1;
    }
    });
});

function deleteLi(item) 
{
    var result = confirm("Want to delete?");
    if (result) {
        localStorage.removeItem($(item).val());
         $( "li").remove("."+$(item).val());
         $( "hr").remove("."+$(item).val());
        }
}
