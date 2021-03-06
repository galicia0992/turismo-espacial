import{navBarMini, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes, information, pExplore, circulos, body, meet, cExploreInt, launch, circulosGrandes} from "./constantes.js"


function homePage(){
    body.style.backgroundImage = 'url("./assets/home/background-home-desktop.jpg")'
    meet.classList.add("d-none")
    circulosGrandes.classList.add("d-none")
    space.classList.remove("vehicle")
    celestes.classList.add("d-none")
    celestes.classList.remove("celestes")
    explore.classList.remove("vehicleAparicion")
    launch.classList.add("d-none")
    circulos.classList.add("d-none")
    pick.classList.add("d-none")
    travel.classList.remove("d-none")
    travel.classList.add("travel")
    travel.classList.remove("terminology")
    navBarMini.classList.add("d-none")
    cExplore.classList.add("cExplore")
    cExploreInt.classList.remove("d-none")
    cExplore.classList.remove("vehicleImg2")
    separador.classList.add("d-none")
    cExplore.classList.remove("crewImg2")
    cExploreInt.classList.remove("d-none")
    pExplore.classList.remove("d-none")
    articulo.classList.remove("articuloAparicion")
    articulo.classList.remove("desplazarArticulo")
    explore.classList.remove("exploreAparicion")
    explore.classList.remove("desplazarExplore")
    explore.classList.add("contCir")
    space.classList.remove("crewName")
    space.classList.add("space")
    travel.classList.remove("role")
    information.classList.add("d-none")
    space.innerHTML = "SPACE"
    travel.innerHTML = "SO, YOU WANT TO TRAVEL TO"
    face.innerHTML = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
}

export{homePage}