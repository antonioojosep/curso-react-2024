import { useEffect } from "react";
import "./App.css";
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  function handleDelete() {
    // debo borrar la tarjeta pokemon cuyo id sea ...
  }

  useEffect(() => {
    //Acceso a la api de pokeapi.co
    // creo la función o la importo de un helper
    const fechData = async () => {
      try {
        const response = await fetch(URL);
        if(!response.ok) {
          throw new Error
        }
        const data = await response.json();
        const results = data.results;
        const pokemonData = await Promise.all(
          results.map( async (pokemon,index) => {
            const resp = await fetch(pokemon.url)
            const pokemonDetails = await resp.json();
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image: pokemonDetails?.sprites.other.dream_world.front_default,
              stats:"Las sacas tú... y es la media aritmética de las stats"
              // (0-33 --> 1, 34-66 -->2 66- -->3 oro,plata, bronce)
            };
          })

         )
         setPokemon(pokemonData)
         setLoading(false)
      } catch (error) {}
    };

    // ejecuto la función
    fechData()
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {loading ? ( <Spinner/> ) : (
          pokemon.map((pokemon) => ())
        )}
      </div>
    </>
  );
}

export default App;