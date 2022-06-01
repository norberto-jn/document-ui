function show() {
    const element = document.getElementById('show')

    const display = getComputedStyle(element).getPropertyValue('display')

    if (display == 'none') {
        element.style.display = 'block'
        document.getElementById('indice').innerHTML = '-'
    } else {
        element.style.display = 'none'
        document.getElementById('indice').innerHTML = '+'
    }
}