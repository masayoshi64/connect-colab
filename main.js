function ClickConnect() {
    console.log('Working')
    document
        .querySelector('#top-toolbar > colab-connect-button')
        .shadowRoot.querySelector('#connect')
        .click()
}
intervalTiming = setInterval(ClickConnect, 60000)