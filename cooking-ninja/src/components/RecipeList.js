import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList({ recipes }) {
  return recipes.length === 0 ? (
    <div className='error'>No recipes to load...</div>
  ) : (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
