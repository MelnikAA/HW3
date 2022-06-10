async function getResponse(){
    let response = await fetch('http://localhost:3000/users')
    let content = await response.json()
    console.log(content);


    for ( var i = 0; i < content.length; i++){
        
        var tr;
        tr = $('<tr/>');
        tr.append("<td>" + content[i].firstname + " " + content[i].lastname + "</td>");
        tr.append("<td>" + content[i].gender + "</td>");
        tr.append("<td>" + content[i].age + "</td>");
        tr.append("<td>" + content[i].year + "</td>");
        tr.append("<td>" + content[i].profile + "</td>");
        tr.append("<td>" + content[i].hobby + "</td>");
        tr.append("<td>" + content[i].comment + "</td>");
        $('#table').append(tr);
    }


}
getResponse()
