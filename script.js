const icon = document.querySelectorAll(".icon_heart");

icon.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle("filled")
    })
})