import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  // const url = `http://localhost:3000/recipes/${id}`;
  // const { data: recipe, isPending, error } = useFetch(url);

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    // we have to unscribe from the listener when we navigate away from the page
    // to prevent leakage of resources and errors. We return the function to cleanup
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      });

    // This function will be fired when we navigate to another component which acts
    // as a cleanup function. So we are no longer listening to document changes.
    return () => unsub();
  }, [id]);

  const { mode } = useTheme();

  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [error, history]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different',
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading Recipe...</p>}
      {recipe && (
        <>
          <h1 className={`page-title ${mode}`}>{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
}
