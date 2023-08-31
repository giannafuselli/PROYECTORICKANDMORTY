import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {

   return (
      <div>
               <button onClick={() => onClose(id)}>X</button>
               <Link to = {`/detail/${id}`}>
               <h2>{name}</h2>
               </Link>
               <h2>{id}</h2>
               <h2>name: {name}</h2>
               <h2>species: {species}</h2>
               <h2>gender: {gender}</h2>
               
               <img src={image} alt={name} />
            </div>
         
      
   );
}