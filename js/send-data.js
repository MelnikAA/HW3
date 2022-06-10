function getFormData(form) {
    const formData = new FormData(form);
    console.log(formData);
    const res={};
    let hobby = [];
    const mamp= new Map();
    Array.from(formData.keys()).forEach(key => {
        // if (key.includes('hobby')) {
        //     hobby.push(formData.get(key)); 
        // }
        // else {
            res[key] = formData.getAll(key);
        // }
    });
    // res["hobby"] = hobby;
    // console.log(hobby);
    console.log(res)
    return res;
}

async function useFetch(data) {
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response.json())
}

function useXmlHttpRequest(data) {
    const request = new XMLHttpRequest();
    request.open('POST', ' http://localhost:3000/users');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onloadend = () => {
        console.log('Succeed!')
        console.log(request.response)
    }
}

window.addEventListener('load', () => {
    const applicantForm = document.forms.applicantForm;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantForm);
        console.log( JSON.stringify(data))
        document.getElementById('sended-data').innerText = JSON.stringify(data);
        useXmlHttpRequest(data);
    })
    const applicantFormSubmit = document.getElementById('applicantFormSubmit');

  
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();

       
    });
});