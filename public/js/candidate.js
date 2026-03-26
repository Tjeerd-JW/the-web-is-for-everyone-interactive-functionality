const url = window.location
console.log(window.location)
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
        document.querySelector('#pop-up h3').textContent = "Reactie succesvol geplaatst"
        document.querySelector('#pop-up').classList.remove('hidden')
    } else if (params.get('success') === 'false') {
        document.querySelector('#pop-up h3').textContent = "Er ging iets mis"
        document.querySelector('#pop-up p').textContent = "probeer het later opnieuw"
        document.querySelector('#pop-up').classList.remove('hidden')

    }
})

function closePopup() {
    // sluit de popup en haal de success uit de url
    const url = new URL(window.location)
    url.searchParams.delete("success")
    window.history.replaceState({}, '', url)
    document.querySelector('#pop-up').classList.add('hidden')
}