document.getElementById("pokeName")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("boton").click();
    }
});

//Fetch es una forma de consultar pedir algo al API
//.then sirve para obtener promesas
const pokeImage=(url)=>{
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src=url;

}
const cambiarnombre1=(fan)=>{
    const pokeName=document.getElementById("cambiarnombre");
    pokeName.innerText=fan;
}

const descripcion=(novo)=>{
    const newdesk=document.getElementById("stat1");
    newdesk.innerText=novo;

}

const pptype=(type)=>{
    const newtype=document.getElementById("ptype")
    newtype.innerText=type;
}
const movement=(f)=>{
    const newmovement=document.getElementById("movements");
    newmovement.innerText=f;
}

const statistics=(s)=>{
    const newsstats=document.getElementById("statsss");
    newsstats.innerText=s;
}
const statisticsB1=(s)=>{
    const newsstats=document.getElementById("stat1A");
    newsstats.innerText=s;
}

const statisticsB11=(s,c)=>{
    const newsstats=document.getElementById(c);
    newsstats.innerText=s;
}

const fetchPokemon=()=>{
    const pokeName=document.getElementById("pokeName");
    let pokeInput=pokeName.value.toLowerCase();//value es lo que tiene adentro el input
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        if(res.status!="200"){//pone imagen cuando el link no existe
            console.log(res);
            pokeImage("https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg");

        }
        else{
            return res.json();

        }
        //console.log(res);  /*solo muestra metadatos de la respuesta */
        
    }).then((data)=>{//Aquí se cambia la imagen
        console.log(data);
        let pokeImg=data.sprites.other.home.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        //Aquí cambiamos nombre
        let nuevonombre=data.name;
        let desk1=data.abilities[0].ability.name;
        let move=data.moves[0].move.name;
        let tipp=data.types[0].type.name;
        let ns=data.id
        let t0=data.stats[0].base_stat;
        let t1=data.stats[1].base_stat;
        let t2=data.stats[2].base_stat;
        let t3=data.stats[3].base_stat;
        let t4=data.stats[4].base_stat;
        let t5=data.stats[5].base_stat;
        console.log(nuevonombre);
        console.log(desk1);
        console.log(move);
        cambiarnombre1(nuevonombre);
        descripcion(desk1);
        movement(move);
        pptype(tipp);
        statistics(ns);
        statisticsB1(t0)
        statisticsB11(t1,"stat2")
        statisticsB11(t2,"stat3")
        statisticsB11(t3,"stat4")
        statisticsB11(t4,"stat5")
        statisticsB11(t5,"stat6")


    })
}

fetchPokemon();


//cambiar pokebola por dr sins
//pokeImage("https://static.wikia.nocookie.net/memes-pedia/images/7/73/Johnny-Sins.png/revision/latest?cb=20200717150311&path-prefix=es");

/*const imprimir=()=>{
    const pokeName=document.getElementById("pokeName");
    let pokeInput=pokeName.value;//value es lo que tiene adentro el input
    console.log("Hola,perros "+pokeInput);
}*/