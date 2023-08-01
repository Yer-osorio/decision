function dijoNo(){
    height = window.innerHeight;
    width = window.innerWidth;

    minHeigth = (Math.random() * height)
    minWidth = (Math.random() * width)

    document.querySelector(".no").style.position = "absolute";
    document.querySelector(".no").style.top = minHeigth + "px";
    document.querySelector(".no").style.left = minWidth + "px";
}

function dijoSi(){
    document.querySelector(".si").addEventListener('click', e =>{
        alert("Sabía que me ibas a decir que si. Te quiero❤️")
    })

}