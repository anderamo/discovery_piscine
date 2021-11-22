window.onload = function() {

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
            var li = document.createElement("li");
            var hr = document.createElement("hr");
            var ul = document.getElementById("TO DO");
            var button = document.createElement("button");
            li.appendChild(document.createTextNode(values));
            li.appendChild(button);
            li.setAttribute("class", index);
            button.appendChild(document.createTextNode("x"));
            button.setAttribute("onclick", "deleteLi(this)");
            button.setAttribute("value", index);
            button.setAttribute("id", index);
            button.setAttribute("class", index);
            ul.prepend(hr);
            hr.setAttribute("class", index);
            ul.prepend(li);
            
        }
        elements++;
        index++;
    }
}

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

function newTask() 
{
    var a = get_last_id();
    var mensaje = prompt("Add a new task TO DO:", "");
    var li = document.createElement("li");
    var button = document.createElement("button");
    var hr = document.createElement("hr");
    var ul = document.getElementById("TO DO");

    if (mensaje == null || mensaje == "")
        mensaje = "Has cancelado o introducido el nombre vacío";
    else
    {
        localStorage.setItem(a, mensaje);
        li.appendChild(document.createTextNode(mensaje));
        li.appendChild(button);
        li.setAttribute("class", a);
        button.appendChild(document.createTextNode("x"));
        button.setAttribute("onclick", "deleteLi(this)");
        button.setAttribute("value", a);
        button.setAttribute("id", a);
        button.setAttribute("class", a);
        ul.prepend(hr);
        hr.setAttribute("class", a);
        ul.prepend(li);
        a = a + 1;
    }
}

function deleteLi(item) 
{
    var result = confirm("Want to delete?");
    if (result) {
        var elements = document.getElementsByClassName(item.value);
        localStorage.removeItem(item.value);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}
