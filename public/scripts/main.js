function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll("nav-link")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(link) {
        link.classList.remove('active')
    }
}

