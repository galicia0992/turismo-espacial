import{navBarMini, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes, information,meet, arr, pExplore, circulo1, circulo2, circulo3, circulo4, circulos, body, 
    cExploreInt, circulosGrandes, launch, circuloGrande1, circuloGrande2, circuloGrande3} from "../constantes.js"

async function techPage(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.technology.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "LAUNCH VEHICLE"){
                        body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'
                        celestes.src = item2.images.portrait
                        celestes.classList.remove("d-none")
                        celestes.classList.remove("celestes")
                        celestes.classList.remove("crewImg")
                        celestes.classList.add("vehicleImg")
                        circulos.classList.add("d-none")
                        circulosGrandes.classList.remove("d-none")
                        pick.classList.add("d-none")
                        meet.classList.add("d-none")
                        launch.classList.remove("d-none")
                        travel.classList.remove("d-none")
                        navBarMini.classList.add("d-none")
                        cExploreInt.classList.add("d-none")
                        cExplore.classList.remove("cExplore")
                        cExplore.classList.remove("crewImg2")
                        cExplore.classList.add("vehicleImg2")
                        pExplore.classList.add("d-none")
                        separador.classList.add("d-none")
                        articulo.classList.remove("articuloAparicion")
                        articulo.classList.remove("desplazarArticulo")
                        articulo.classList.add("articuloCrew")
                        articulo.classList.add("articuloCrewEffect")
                        articulo.classList.remove("articulo")
                        explore.classList.remove("exploreAparicion")
                        explore.classList.remove("desplazarExplore")
                        explore.classList.remove("contCir")
                        explore.classList.add("vehicleAparicion")
                        information.classList.add("d-none")
                        space.classList.remove("space")
                        space.classList.remove("crewName")
                        space.classList.add("vehicle")
                        travel.classList.remove("travel")
                        travel.classList.remove("role")
                        travel.classList.add("terminology")
                        circulo1.classList.remove("circulito")
                        circulo1.classList.add("circulitoActivo")
                        circulo2.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulito")
                        circulo3.classList.remove("circulitoActivo")
                        circulo3.classList.add("circulito")
                        circulo4.classList.remove("circulitoActivo")
                        circulo4.classList.add("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travel.innerHTML = "THE TERMINOLOGY"
                    }
                }, 700);
            })
        })
    } catch (error) {
        return error
    }
}
async function launchV(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.technology.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "LAUNCH VEHICLE"){
                        body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'
                        celestes.src = item2.images.portrait
                        circuloGrande1.classList.add("circulitoVerticalActivo")
                        circuloGrande1.classList.remove("circulitoVertical")
                        circuloGrande2.classList.add("circulitoVertical")
                        circuloGrande2.classList.remove("circulitoVerticalActivo")
                        circuloGrande3.classList.add("circulitoVertical")
                        circuloGrande3.classList.remove("circulitoVerticalActivo")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travel.innerHTML = "THE TERMINOLOGY"
                    }
                }, 0);
            })
        })
    } catch (error) {
        return error
    }
}

async function spaceport(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.technology.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "SPACEPORT"){
                        body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'
                        celestes.src = item2.images.portrait
                        circuloGrande1.classList.remove("circulitoVerticalActivo")
                        circuloGrande1.classList.add("circulitoVertical")
                        circuloGrande2.classList.remove("circulitoVertical")
                        circuloGrande2.classList.add("circulitoVerticalActivo")
                        circuloGrande3.classList.add("circulitoVertical")
                        circuloGrande3.classList.remove("circulitoVerticalActivo")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travel.innerHTML = "THE TERMINOLOGY"
                    }
                }, 0);
            })
        })
    } catch (error) {
        return error
    }
}

async function capsule(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.technology.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "SPACE CAPSULE"){
                        body.style.backgroundImage = 'url("./assets/technology/background-technology-desktop.jpg")'
                        celestes.src = item2.images.portrait
                        circuloGrande1.classList.remove("circulitoVerticalActivo")
                        circuloGrande1.classList.add("circulitoVertical")
                        circuloGrande2.classList.add("circulitoVertical")
                        circuloGrande2.classList.remove("circulitoVerticalActivo")
                        circuloGrande3.classList.remove("circulitoVertical")
                        circuloGrande3.classList.add("circulitoVerticalActivo")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travel.innerHTML = "THE TERMINOLOGY"
                    }
                }, 0);
            })
        })
    } catch (error) {
        return error
    }
}
export{techPage, spaceport, capsule, launchV}