
console.log('testers')

document.addEventListener('DOMContentLoaded', () =>{
    const params = new URLSearchParams(window.location.search);
    if(params.get('success') === 'true'){
        document.querySelector('#pop-up').classList.remove('hidden')
    }
})

function closePopup(){
    document.querySelector('#pop-up').classList.add('hidden')
}