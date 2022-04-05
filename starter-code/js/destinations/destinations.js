import {navBarMini, bgHome, cExplore, articulo, explore, space, face, pick, travel,
    separador, celestes,travelTime, distance, information, meet, arr, circulos, body, cExploreInt, launch, circulosGrandes} from "../constantes.js"
async function destinationInfo(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.destinations.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "MOON"){
                        console.log(item2)
                        body.style.backgroundImage = 'url("./assets/destination/background-destination-desktop.jpg")'
                        meet.classList.remove("d-none")
                        travel.classList.add("travel")
                        launch.classList.add("d-none")
                        space.classList.remove("vehicle")
                        circulosGrandes.classList.add("d-none")
                        cExplore.classList.remove("vehicleImg2")
                        celestes.classList.remove("vehicleImg")
                        cExploreInt.classList.add("d-none")
                        explore.classList.remove("vehicleAparicion")
                        celestes.src = item2.images.png
                        celestes.classList.remove("d-none")
                        celestes.classList.add("celestes")
                        pick.classList.remove("d-none")
                        travel.classList.add("d-none")
                        explore.classList.add("contCir")
                        cExplore.classList.remove("crewImg2")
                        navBarMini.classList.remove("d-none")
                        cExplore.classList.remove("cExplore")
                        separador.classList.remove("d-none")
                        articulo.classList.add("articuloAparicion")
                        articulo.classList.remove("desplazarArticulo")
                        explore.classList.add("exploreAparicion")
                        explore.classList.remove("desplazarExplore")
                        celestes.classList.remove("crewImg")
                        meet.classList.add("d-none")
                        information.classList.remove("d-none")
                        space.classList.remove("crewName")
                        space.classList.add("space")
                        circulos.classList.add("d-none")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travelTime.innerHTML = item2.travel
                        distance.innerHTML = item2.distance
                    }
                }, 700);
            })
        })
    } catch (error) {
        return error
    }
}

async function moonInfo(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.destinations.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "MOON"){
                        console.log(item2)
                        space.classList.remove("marsEffect")
                        space.classList.remove("titanEffect")
                        space.classList.remove("europaEffect")
                        space.classList.add("moonEffect")
                        explore.classList.add("contCir")
                        cExplore.classList.remove("crewImg2")
                        celestes.classList.remove("marsImgEffect")
                        celestes.classList.remove("titanImgEffect")
                        celestes.classList.remove("europaImgEffect")
                        celestes.classList.add("moonImgEffect")
                        face.classList.remove("marsDescriptionEffect")
                        face.classList.remove("titanDescriptionEffect")
                        face.classList.remove("europaDescriptionEffect")
                        face.classList.add("moonDescriptionEffect")
                        travelTime.classList.remove("marsTravelEffect")
                        travelTime.classList.remove("titanTravelEffect")
                        travelTime.classList.remove("europaTravelEffect")
                        travelTime.classList.add("moonTravelEffect")
                        distance.classList.remove("marsDistanceEffect")
                        distance.classList.remove("titanDistanceEffect")
                        distance.classList.remove("europaDistanceEffect")
                        distance.classList.add("moonDistanceEffect")
                        space.classList.remove("crewName")
                        space.classList.add("space")
                        celestes.src = item2.images.png
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travelTime.innerHTML = item2.travel
                        distance.innerHTML = item2.distance
                    }
                }, 200);
            })
        })
    } catch (error) {
        return error
    }
}

async function marsInfo(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.destinations.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "MARS"){
                        console.log(item2)
                        celestes.src = item2.images.png
                        space.classList.remove("moonEffect")
                        space.classList.remove("titanEffect")
                        space.classList.remove("europaEffect")
                        space.classList.add("marsEffect")
                        explore.classList.add("contCir")
                        cExplore.classList.remove("crewImg2")
                        celestes.classList.remove("moonImgEffect")
                        celestes.classList.remove("titanImgEffect")
                        celestes.classList.remove("europaImgEffect")
                        celestes.classList.add("marsImgEffect")
                        face.classList.remove("moonDescriptionEffect")
                        face.classList.remove("titanDescriptionEffect")
                        face.classList.remove("europaDescriptionEffect")
                        face.classList.add("marsDescriptionEffect")
                        travelTime.classList.remove("moonTravelEffect")
                        travelTime.classList.remove("titanTravelEffect")
                        travelTime.classList.remove("europaTravelEffect")
                        travelTime.classList.add("marsTravelEffect")
                        distance.classList.remove("moonDistanceEffect")
                        distance.classList.remove("titanDistanceEffect")
                        distance.classList.remove("europaDistanceEffect")
                        distance.classList.add("marsDistanceEffect")
                        space.classList.remove("crewName")
                        space.classList.add("space")
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travelTime.innerHTML = item2.travel
                        distance.innerHTML = item2.distance
                    }
                }, 200);
            })
        })
    } catch (error) {
        return error
    }
}

async function europaInfo(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.destinations.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "EUROPA"){
                        console.log(item2)
                        space.classList.remove("moonEffect")
                        space.classList.remove("titanEffect")
                        space.classList.remove("marsEffect")
                        space.classList.add("europaEffect")
                        explore.classList.add("contCir")
                        celestes.classList.remove("marsImgEffect")
                        celestes.classList.remove("titanImgEffect")
                        celestes.classList.remove("moonImgEffect")
                        celestes.classList.add("europaImgEffect")
                        cExplore.classList.remove("crewImg2")
                        face.classList.remove("marsDescriptionEffect")
                        face.classList.remove("titanDescriptionEffect")
                        face.classList.remove("moonDescriptionEffect")
                        face.classList.add("europaDescriptionEffect")
                        travelTime.classList.remove("marsTravelEffect")
                        travelTime.classList.remove("titanTravelEffect")
                        travelTime.classList.remove("moonTravelEffect")
                        travelTime.classList.add("europaTravelEffect")
                        distance.classList.remove("marsDistanceEffect")
                        distance.classList.remove("titanDistanceEffect")
                        distance.classList.remove("moonDistanceEffect")
                        distance.classList.add("europaDistanceEffect")
                        space.classList.remove("crewName")
                        space.classList.add("space")
                        celestes.src = item2.images.png
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travelTime.innerHTML = item2.travel
                        distance.innerHTML = item2.distance
                    }
                }, 200);
            })
        })
    } catch (error) {
        return error
    }
}

async function titanInfo(){
    try {
        const info = await fetch("./data.json")
        const json = await info.json()
        arr.push(json)
        arr.map(item =>{
            item.destinations.map(item2 =>{
                setTimeout(() => {
                    if(item2.name == "TITAN"){
                        console.log(item2)
                        space.classList.remove("moonEffect")
                        space.classList.remove("marsEffect")
                        space.classList.remove("europaEffect")
                        space.classList.add("titanEffect")
                        explore.classList.add("contCir")
                        celestes.classList.remove("marsImgEffect")
                        celestes.classList.remove("moonImgEffect")
                        celestes.classList.remove("europaImgEffect")
                        celestes.classList.add("titanImgEffect")
                        cExplore.classList.remove("crewImg2")
                        face.classList.remove("marsDescriptionEffect")
                        face.classList.remove("moonDescriptionEffect")
                        face.classList.remove("europaDescriptionEffect")
                        face.classList.add("titanDescriptionEffect")
                        travelTime.classList.remove("marsTravelEffect")
                        travelTime.classList.remove("moonTravelEffect")
                        travelTime.classList.remove("europaTravelEffect")
                        travelTime.classList.add("titanTravelEffect")
                        distance.classList.remove("marsDistanceEffect")
                        distance.classList.remove("moonDistanceEffect")
                        distance.classList.remove("europaDistanceEffect")
                        distance.classList.add("titanDistanceEffect")
                        space.classList.remove("crewName")
                        space.classList.add("space")
                        celestes.src = item2.images.png
                        space.innerHTML = item2.name
                        face.innerHTML = item2.description
                        travelTime.innerHTML = item2.travel
                        distance.innerHTML = item2.distance
                    }
                }, 200);
            })
        })
    } catch (error) {
        return error
    }
}
export{destinationInfo, moonInfo, marsInfo, europaInfo, titanInfo}