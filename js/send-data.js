function getFormData(form) {
    const formData = new FormData(form);
    const res={};
    let hobby = [];
    const mamp= new Map();
    Array.from(formData.keys()).forEach(key => {
            res[key] = formData.getAll(key);
    });
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
}

function useXmlHttpRequest(data) {
    const request = new XMLHttpRequest();
    request.open('POST', ' http://localhost:3000/users');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onloadend = () => {
    }
}

window.addEventListener('load', () => {
    const applicantForm = document.forms.applicantForm;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantForm);
        useXmlHttpRequest(data);
    })
    const applicantFormSubmit = document.getElementById('applicantFormSubmit');

  
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
    });
});