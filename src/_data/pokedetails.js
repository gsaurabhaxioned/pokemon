const axios = require("axios");

module.exports = async function getDetails() {
    const url = `https://pokeapi.co/api/v2/pokemon`;
    try {
      const response = await axios.get(url);
        let poke = response.data.results;
        console.log(poke.length);
        var poketype = [];        
        poke.forEach(async (i,index)=>{
          const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index+1}`);
         poketype.push(response2.data.types.map(type => type.type.name));
        })
        return poketype;
        
    } catch (error) {
      console.error(error);
    }

  }

  