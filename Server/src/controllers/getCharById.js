// const axios = require ('axios');

// const getCharById =(res, id) => {
//  axios (`https://rickandmortyapi.com/api/character/${id}`)
//  .then (response =>  response.data)
//  .then (({name, gender, species, origin, image, status}) =>{
//     const character ={
//      id,
//      name,
//      gender,
//      species,
//      origin: origin.name,
//      image,
//      status,
//     }
//    return res
//    .writeHead(200, {'Content-type':'application/json'})
//    . end(JSON.stringify(character))
//  })
//  .catch(error =>{
//     return res
//     .writeHead(500,{'Content-type':'text/plain'})
//     .end(error.message)
//  })
// }


// module.exports ={
//     getCharById
// };

const axios = require("axios");

const getCharById = (req, res) => {
    const {id}= req.params;

    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data) 
        .then(({status, name, species, origin, image, gender})=> {

      if(name){
            const character = {
                id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
            return res.status(200).json(character)
        }
            return res.status(404),send('Not found')
    })
        .catch(error => response.status (500).send (error.message)) 

        }

module.exports = {
    getCharById
};
