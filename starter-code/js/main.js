import { homePage } from "./home.js"
import{home, destination, crew, technology, navBarMini, bgHome, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes, moon, mars, europa, titan, travelTime, distance, information, a, meet, arr, circulo1, circulo2, 
    circulo3, circulo4, circuloGrande2, circuloGrande3, circuloGrande1} from "./constantes.js"
import {destCrew, circuloM, circuloD, circuloV, circuloA} from "./crew/crewMain.js"
import { techPage, spaceport, capsule, launchV } from "./technology/technology.js"
import {destinationInfo, moonInfo, marsInfo, europaInfo, titanInfo} from "./destinations/destinations.js"
//event listeners
eventListeners()

function eventListeners(){
    home.addEventListener("click", homePage)
    
    //destination
    destination.addEventListener("click", dest)
    moon.addEventListener("mouseover", moonInfo)
    mars.addEventListener("mouseover", marsInfo)
    europa.addEventListener("mouseover", europaInfo)
    titan.addEventListener("mouseover", titanInfo)

    //crew
    crew.addEventListener("click", destCrew)

    //circulos crew
    circulo1.addEventListener("mouseover", circuloD)
    circulo2.addEventListener("mouseover", circuloM)
    circulo3.addEventListener("mouseover", circuloV)
    circulo4.addEventListener("mouseover", circuloA)

    //technology
    technology.addEventListener("click", techPage)
    circuloGrande1.addEventListener("mouseover", launchV)
    circuloGrande2.addEventListener("mouseover", spaceport)
    circuloGrande3.addEventListener("mouseover", capsule)
}

//apartado destination
function dest(){
    articulo.classList.add("desplazarArticulo")
    explore.classList.add("desplazarExplore")
    destinationInfo()
}






