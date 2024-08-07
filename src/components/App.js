// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the dog image
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchDogImage();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {dogImage && !loading && !error && (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

