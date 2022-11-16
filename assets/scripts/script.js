let images = [
    "../assets/images/logos/sneaker.png",
    "../assets/images/logos/sneaker2.jfif",
    "../assets/images/logos/sneaker3.png",
    "../assets/images/logos/sneaker4.png"
]

let currentPage = 0

const product = document.querySelector(".container-products .container-products-content")

const generateDiv = (url) => {
    const div = `<img src=${url} class="container-products-image">    `
    product.innerHTML += div
}

const init = () => {
    product.innerHTML = ""
    generateDiv(images[currentPage])
}

const next = () => {
    product.innerHTML = ""
    if (currentPage + 1 < images.length) {
        currentPage++
    } else {
        currentPage = 0
    }
    console.log(currentPage)
    generateDiv(images[currentPage])
}

const previous = () => {
    product.innerHTML = ""
    if (currentPage - 1 < 0) {
        currentPage = images.length - 1
    } else {
        currentPage--
    }
    console.log(currentPage)
    generateDiv(images[currentPage])
}


init()