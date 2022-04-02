import{navBarMini, bgHome, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes, information,meet, arr, pExplore, circulo1, circulo2, circulo3, circulo4, circulos, body, cExploreInt} from "../constantes.js"
 
async function destCrew(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            console.log(item)
            item.crew.map(item2 =>{
                setTimeout(() => {
                    console.log(item2)
                    if(item2.name == "DOUGLAS HURLEY"){
                        console.log(item2)
                        body.style.backgroundImage = 'url("./assets/crew/background-crew-desktop.jpg")'
                        celestes.src = item2.images.png
                        celestes.classList.remove("d-none")
                        celestes.classList.remove("celestes")
                        celestes.classList.add("crewImg")
                        circulos.classList.remove("d-none")
                        pick.classList.add("d-none")
                        meet.classList.remove("d-none")
                        travel.classList.remove("d-none")
                        navBarMini.classList.add("d-none")
                        cExploreInt.classList.add("d-none")
                        cExplore.classList.remove("cExplore")
                        cExplore.classList.add("crewImg2")
                        pExplore.classList.add("d-none")
                        separador.classList.add("d-none")
                        articulo.classList.remove("articuloAparicion")
                        articulo.classList.remove("desplazarArticulo")
                        articulo.classList.add("articuloCrew")
                        articulo.classList.add("articuloCrewEffect")
                        articulo.classList.remove("articulo")
                        explore.classList.add("exploreAparicion")
                        explore.classList.remove("desplazarExplore")
                        explore.classList.remove("contCir")
                        information.classList.add("d-none")
                        space.classList.remove("space")
                        space.classList.add("crewName")
                        travel.classList.remove("travel")
                        travel.classList.add("role")
                        circulo1.classList.remove("circulito")
                        circulo1.classList.add("circulitoActivo")
                        circulo2.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulito")
                        circulo3.classList.remove("circulitoActivo")
                        circulo3.classList.add("circulito")
                        circulo4.classList.remove("circulitoActivo")
                        circulo4.classList.add("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.bio
                        travel.innerHTML = item2.role
                    }
                }, 700);
            })
        })
    } catch (error) {
        return error
    }
}

async function circuloD(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            console.log(item)
            item.crew.map(item2 =>{
                
                    console.log(item2)
                    if(item2.name == "DOUGLAS HURLEY"){
                        console.log(item2)
                        
                        celestes.src = item2.images.png
                        articulo.classList.remove("articuloCrewVic")
                        articulo.classList.remove("articuloCrewEffect")
                        articulo.classList.remove("articuloCrewMark")
                        articulo.classList.remove("articuloCrewAnu")
                        articulo.classList.add("articuloCrewDou")
                        articulo.classList.remove("articuloCrewMark")
                        circulo1.classList.remove("circulito")
                        circulo1.classList.add("circulitoActivo")
                        circulo2.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulito")
                        circulo3.classList.remove("circulitoActivo")
                        circulo3.classList.add("circulito")
                        circulo4.classList.remove("circulitoActivo")
                        circulo4.classList.add("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.bio
                        travel.innerHTML = item2.role
                    }
                
            })
        })
    } catch (error) {
        return error
    }
}

async function circuloM(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            console.log(item)
            item.crew.map(item2 =>{
                
                    console.log(item2)
                    if(item2.name == "MARK SHUTTLEWORTH"){
                        console.log(item2)
                        
                        celestes.src = item2.images.png
                        articulo.classList.remove("articuloCrewDou")
                        articulo.classList.remove("articuloCrewEffect")
                        articulo.classList.remove("articuloCrewVic")
                        articulo.classList.remove("articuloCrewAnu")
                        articulo.classList.add("articuloCrewMark")
                        circulo1.classList.add("circulito")
                        circulo1.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulitoActivo")
                        circulo2.classList.remove("circulito")
                        circulo3.classList.remove("circulitoActivo")
                        circulo3.classList.add("circulito")
                        circulo4.classList.remove("circulitoActivo")
                        circulo4.classList.add("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.bio
                        travel.innerHTML = item2.role
                    }
                
            })
        })
    } catch (error) {
        return error
    }
}
async function circuloV(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            console.log(item)
            item.crew.map(item2 =>{
                
                    console.log(item2)
                    if(item2.name == "VICTOR GLOVER"){
                        console.log(item2)
                        
                        celestes.src = item2.images.png
                        articulo.classList.remove("articuloCrewDou")
                        articulo.classList.remove("articuloCrewEffect")
                        articulo.classList.remove("articuloCrewMark")
                        articulo.classList.remove("articuloCrewAnu")
                        articulo.classList.add("articuloCrewVic")
                        circulo1.classList.add("circulito")
                        circulo1.classList.remove("circulitoActivo")
                        circulo2.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulito")
                        circulo3.classList.add("circulitoActivo")
                        circulo3.classList.remove("circulito")
                        circulo4.classList.remove("circulitoActivo")
                        circulo4.classList.add("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.bio
                        travel.innerHTML = item2.role
                    }
                
            })
        })
    } catch (error) {
        return error
    }
}
async function circuloA(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            console.log(item)
            item.crew.map(item2 =>{
                
                    console.log(item2)
                    if(item2.name == "ANOUSHEH ANSARI"){
                        console.log(item2)
                        
                        celestes.src = item2.images.png
                        articulo.classList.remove("articuloCrewDou")
                        articulo.classList.remove("articuloCrewEffect")
                        articulo.classList.remove("articuloCrewMark")
                        articulo.classList.remove("articuloCrewVic")
                        articulo.classList.add("articuloCrewAnu")
                        circulo1.classList.add("circulito")
                        circulo1.classList.remove("circulitoActivo")
                        circulo2.classList.remove("circulitoActivo")
                        circulo2.classList.add("circulito")
                        circulo3.classList.remove("circulitoActivo")
                        circulo3.classList.add("circulito")
                        circulo4.classList.add("circulitoActivo")
                        circulo4.classList.remove("circulito")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.bio
                        travel.innerHTML = item2.role
                    }
                
            })
        })
    } catch (error) {
        return error
    }
}

export {destCrew, circuloM, circuloD, circuloV, circuloA}