import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;

  const { data: recipe, isPending, error } = useFetch(url);

  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [error, history]);

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading Recipe...</p>}
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
