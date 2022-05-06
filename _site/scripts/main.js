
let poketitle = document.querySelectorAll(".poke-name");

poketitle.forEach(i=>{
    i.addEventListener("click",function(event){
        // event.preventDefault();
        localStorage.clear();
        let newid = this.getAttribute('data-id');
        // localStorage.setItem("id",newid);
        fetch(`https://pokeapi.co/api/v2/pokemon/${newid}`).then(
            (response) =>{
                return response.json();
            }
        ).then((data)=>{
            // window.location.href = "../pokeinfo.html";
            console.log(data);
            let poke_data = [];
            let new_poke_data = {
                name: data.name,
                species: data.species.name,
                img: data.sprites.front_default,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                special_attack: data.stats[3].base_stat,
                special_defense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat
            }

            poke_data.push(new_poke_data);
            localStorage.setItem("pokedata",JSON.stringify(new_poke_data));
        });
       

    })
})

if(document.querySelector(".pokemon-details")) {
    let poke_info = JSON.parse(localStorage.getItem("pokedata"));
    document.querySelector(".poke-name").innerHTML = poke_info.name;
    document.querySelector(".hp").innerHTML = poke_info.hp;
    document.querySelector(".attack").innerHTML = poke_info.attack;
    document.querySelector(".defence").innerHTML = poke_info.defense;
    document.querySelector(".special-attack").innerHTML = poke_info.special_attack;
    document.querySelector(".special-defence").innerHTML = poke_info.special_defense;
    document.querySelector(".speed").innerHTML = poke_info.speed;
    document.querySelector(".poke-img img").setAttribute("src",poke_info.img);

}

