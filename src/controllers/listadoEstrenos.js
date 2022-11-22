let estrenos=[
    {
        nombre:"El Menú",
        duracion:125,
        banner:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/el%20menu%2C%20banner.webp?alt=media&token=4d838738-4065-4cc8-b3fc-f541e11cbcb8",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/El%20menu%2C%20estreno.png?alt=media&token=52ed6391-8577-40e8-b91f-9824d18d9590",
        sinopsis:"Una joven pareja viaja a uno de los destinos más exclusivos del mundo para cenar en un restaurante que ofrece una experiencia culinaria única. Allí, el misterioso chef a cargo recibe a sus invitados con una extraña atmósfera y un menú de gastronomía molecular donde la comida se trata como arte conceptual. Pero su enfoque en la cocina tiene algunos ingredientes inesperados y sorpresas impactantes que sus invitados jamás imaginaron. De Searchlight Pictures, protagonizada por Anya Taylor-Joy, Nicholas Hoult y Ralph Fiennes."
    },
    {
        nombre:"Histoira de honor",
        duracion:105,
        banner:"",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Historia%20de%20honor%2C%20estreno.png?alt=media&token=3a347153-6232-4f3f-89eb-c824bf553bf2",
        sinopsis:"En 1950, cuando la Guerra Fría amenaza la paz internacional, dos jóvenes pilotos de diferentes mundos son aceptados en un escuadrón de élite para su entrenamiento: uno es Tom Hudner (Glen Powell), un soldado impecable. El otro es Jesse Brown (Jonathan Majors), un piloto ferozmente talentoso, que se convertiría en el primer afroamericano en volar en combate para la Marina de los Estados Unidos. Iniciados juntos en el escuadrón VF-32, Tom y Jesse serán llevados al límite para convertirse en los mejores pilotos de combate. Dentro de la estrecha hermandad del escuadrón, Tom y Jesse formarán una firme amistad; la cual se pondrá a prueba en el acalorado campo de batalla."
    },
    {
        nombre:"Louise",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Lousie%2C%20estreno.png?alt=media&token=cdf48230-d4c4-4c4d-a73b-cbe02c0e5584",
        sinopsis:'Cuando Myriam -madre de dos niños pequeños- decide volver a trabajar, a pesar de las quejas de su esposo, la pareja empieza a buscar una niñera. Contratan a Louise, quien rápidamente conquista el afecto de los niños pero, gradualmente, ocupará un lugar central en el hogar.  Una historia real que conmocionó al mundo. Basada en el bestseller de Leïla Slimani "La Niñrea Perfecta".'
    },
    {
        nombre:"Un mundo extraño",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Un%20mundo%20extra%C3%B1o%2C%20estreno.jpg?alt=media&token=3585d4c6-903a-4b5c-8837-804569827e77",
        sinopsis:"UN MUNDO EXTRAÑO, la nueva película de Walt Disney Animation Studios, presenta un viaje de acción y aventura que transcurre en una tierra inexplorada y traicionera, donde criaturas fantásticas aguardan a los legendarios Clade, una familia de exploradores cuyas diferencias amenazan con derribar su última misión que es, por lejos, la más decisiva."
    },
    {
        nombre:"Noche sin paz",
        duracion:115,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Noche%20sin%20paz%2C%20estreno.jpg?alt=media&token=9d670c85-97b3-42b7-9029-5eb7e2219044",
        sinopsis:"Al diablo con “todo es paz”. De 87North, los productores de Nadie, John Wick, Atómica, Deadpool 2, y Rápidos y furiosos: Hobbs & Shaw, ahora llega un oscuro thriller navideño que dice que siempre apuestes por el rojo. Cuando un equipo de mercenarios irrumpe durante Nochebuena en la casa de una familia adinerada, tomando a todos los que están dentro como rehenes, el equipo no está preparado para un combatiente sorpresa: Santa Claus (David Harbour, Viuda negra, la serie Stranger Things), que está a punto de demostrar por qué este San Nicolás no es un santo."
    }
]

let etiquetaFila2=document.getElementById("fila2")

estrenos.forEach(function(estreno){

    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")
    
   // let banner=document.createElement("h3")   //ejemplo
    //banner.classList.add("d-none")
   // banner.textContent=estreno.banner

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100") 
    poster.src=estreno.poster

    let nombreEstreno=document.createElement("h2")
    nombreEstreno.classList.add("text-center","fw-bold")  
    nombreEstreno.textContent=estreno.nombre

    let duracionEstreno=document.createElement("h5")
    duracionEstreno.classList.add("text-start")
    duracionEstreno.textContent="Duracion: "+estreno.duracion+" Min"

    let sinopsisEstreno=document.createElement("p")
    sinopsisEstreno.classList.add("d-none")
    sinopsisEstreno.textContent=estreno.sinopsis


    etiquetaFila2.appendChild(columna)
    columna.appendChild(tarjeta)
    //tarjeta.appendChild(banner)  //ejemplo
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombreEstreno)
    tarjeta.appendChild(duracionEstreno)
    tarjeta.appendChild(sinopsisEstreno)

})

let peliculaSeleccionada2={}
etiquetaFila2.addEventListener("click",function(evento){
    
    if(evento.target.classList.contains("img-fluid")){
        
        
        
        //peliculaSeleccionada.banner=evento.target.parentElement.querySelector('h3').textContent
        peliculaSeleccionada.imagen=evento.target.parentElement.querySelector('img').src           
        peliculaSeleccionada.titulo=evento.target.parentElement.querySelector('h2').textContent   
        peliculaSeleccionada.duracion=evento.target.parentElement.querySelector('h5').textContent  
        peliculaSeleccionada.sinopsisPelicula=evento.target.parentElement.querySelector("p").textContent
        
                                                                                                        
        localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))   

        
        
        
        window.location.href="./src/views/verinfopelicula.html"
    }
})