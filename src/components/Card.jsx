/* eslint-disable react/prop-types */

import style from '../CSS/Card.module.css';

import { Tilt } from 'react-tilt'

export const Card = ({desc, name, image, value, status}) => {
  return(
    <Tilt>
      <div className={style.Card}>
        <div className={status ? style.BolinhaVerde : style.BolinhaVermelha}></div>
          <h1>{name}</h1>
          <h2>{desc}</h2> 
          <p>R${value}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
    </Tilt>
  )
}

export const CardApi = ({name, status, species, type, gender, image}) => {
  return(
    <Tilt>
      <div className={style.CardApi}>
          <h1>{name}</h1>
          <h2>{species}</h2> 
          <p>{gender}</p>
          <p>{type}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <p>{status}</p>
      </div>
    </Tilt>
  )
}