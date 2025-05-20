import React from 'react';

function Card({ id, fullName, title, family, imageUrl }) {
  return (
    <div>
      <h2>Index: {id}</h2>
      <h1>Nombre: {fullName}</h1>
      <h2>Título: {title}</h2>
      <h2>Familia: {family}</h2>
      <img src={imageUrl} alt={`Imagen de ${fullName}`} />
    </div>
  );
}

export default Card;