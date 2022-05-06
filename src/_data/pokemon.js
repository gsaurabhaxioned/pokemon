const axios = require("axios");

module.exports = async function getPosts() {
    const url = `https://pokeapi.co/api/v2/pokemon`;
    try {
      const response = await axios.get(url);
        let poke = response.data.results;
        console.log(poke.length);
        return poke;
    } catch (error) {
      console.error(error);
    }

  }


  




