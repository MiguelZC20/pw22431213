let elemento=document.querySelector("#elemento");
let agregar= document.querySelector("#agregar");
let lista=document.querySelector("#listadimanica");
elemento.focus();

agregar.addEventListener("click",() => {
    if(elemento.value.trim() != ""){
        let nuevoelemento=document.createElement("li");
        nuevoelemento.innerText=elemento.value;
        lista.appendChild(nuevoelemento);
        elemento.value="";
        elemento.focus();
    }
});

elemento.addEventListener("keydown",(e) => {
    if(e.key == "Enter"){
        agregar.click();
    }
})

//Arrastar y soltar (drag & drop)
let arrastra=document.querySelector("#arrastra");
let zonasoltar=document.querySelector("#zonasoltar");

arrastra.addEventListener("dragstar",function(e){
    this.style.border="5px solid red";
});

zonasoltar.addEventListener("dragover",function(e){
    //olvide su función principal
    event.preventDefault();
});
zonasoltar.addEventListener("drop",function(e){
    arrastra.style.border="none";
    arrastra.style.display="block";
    this.append(arrastra);
});