async function getResponse(){
    const response = await fetch('http://localhost:3000/users')
    let content = await response.json()

    for ( let i = 0; i < content.length; i++){
        
        let tr;
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
