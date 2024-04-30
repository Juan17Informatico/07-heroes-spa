import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

const validePublishers = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics']

  if(publisher == validPublishers[0]){
    return "dc" 
  }else{
    return "marvel"
  }

}

export const HeroPage = () => {

  const { id } = useParams();
  const hero = useMemo(()=> getHeroById( id ), [id] );
  const navigate = useNavigate();

  const onNavigateBack = () => {
    const publishers = validePublishers(hero.publisher); 
    navigate(`/${publishers}`);
  }

  if(!hero){
    return (<Navigate to="/marvel" />)
  }

  return (
      <div className="row mt-5 img-thumbnail animate__animated animate__fadeInLeft">        
        <div className="col-4">
          <img 
            src={`/assets/${id}.jpg`} 
            alt={hero.superhero} 
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b> <span>{hero.alter_ego}</span></li>
            <li className="list-group-item"><b>Publisher:</b> <span>{hero.publisher}</span></li>
            <li className="list-group-item"><b>First appearance:</b> <span>{hero.first_appearance}</span></li>
          </ul>

          <h5 className="mt-3">
            Characters
          </h5>
            <p>{hero.characters}</p>

            <button 
              className="btn btn-outline-primary"
              onClick={onNavigateBack}
            >
              Regresar
            </button>
        </div>
      </div>
  )
}
