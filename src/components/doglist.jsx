import React from 'react';

const DogList = (props) => {
  return (
    <div>
      <h2>Perros</h2>
      <select onChange={props.handleChange}>
        {props.dogs.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <ul>
        {props.images.map((url, index) => (
          <li key={index}>
            <img src={url} alt="Perros" />
            <button onClick={() => props.handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
