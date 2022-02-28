function send() {
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    if (firstName.value.length <= 0) {
        firstName.classList.add('error')
        let errorMsg = document.getElementsByClassName('error-msg')[0]
        errorMsg.style.display = 'inline'
    } if (lastName.value.length <= 0) {
        lastName.classList.add('error')
        let errorMsg = document.getElementsByClassName('error-msg')[1]
        errorMsg.style.display = 'inline'
    } if (email.value.length <= 0) {
        email.classList.add('error')
        let errorMsg = document.getElementsByClassName('error-msg')[2]
        errorMsg.style.display = 'inline'
    } if (password.value.length <= 0) {
        password.classList.add('error')
        let errorMsg = document.getElementsByClassName('error-msg')[3]
        errorMsg.style.display = 'inline'
    }
}