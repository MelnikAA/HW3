let form = document.querySelector('.body');
inputProfile = document.querySelector('.profile');




let profile = inputProfile.value;
    inputProfile.forEach(function (input) {
        if (profile === 'Черт') {
            document.getElementById("error").textContent= "я бы не советовала о таком рассказывать"   
            console.log("NO")
        } 
    })
