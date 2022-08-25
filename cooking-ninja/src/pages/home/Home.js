// import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';

// components
import RecipeList from '../../components/RecipeList';

// styles
import './Home.css';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function Home() {
  /*   const {data: recipes,
    isPending,
    error,
  } = useFetch('http://localhost:3000/recipes'); */

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    const unsubsribe = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsubsribe();
  }, []);

  return (
    <div className='home'>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading Recipes...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
