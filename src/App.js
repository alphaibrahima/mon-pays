import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(data);

  useEffect( () => {

    // Recuperation des donnes de l'api
    fetch('https://restcountries.com/v3.1/all')
      .then( (response) => response.json())
      .then((actualData) => console.log(actualData));
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
