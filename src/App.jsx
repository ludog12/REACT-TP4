import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogList from './components/DogList';

function App() {
  const [dogs, setDogs] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedDog, setSelectedDog] = useState('');

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        setDogs(Object.keys(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedDog(event.target.value);
    axios
      .get(`https://dog.ceo/api/breed/${event.target.value}/images`)
      .then((response) => {
        setImages(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="App">
      <h1>Razas de Perros</h1>
      <button onClick={() => setSelectedDog(dogs[0])}>Mostrar perros</button>
      {selectedDog && (
        <DogList
          dogs={dogs}
          images={images}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
