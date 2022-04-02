import { homePage } from "./home.js"
import{home, destination, crew, technology, navBarMini, bgHome, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes, moon, mars, europa, titan, travelTime, distance, information, a, meet, arr, circulo1, circulo2, 
    circulo3, circulo4} from "./constantes.js"
import {destCrew, circuloM, circuloD, circuloV, circuloA} from "./crew/crewMain.js"
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
}

//apartado destination
function dest(){
    articulo.classList.add("desplazarArticulo")
    explore.classList.add("desplazarExplore")
    destinationInfo()
}






