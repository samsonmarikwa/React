import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './Navbar.css';
import Searchbar from './Searchbar';

export default function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav onClick={() => changeColor('pink')}>
        <NavLink exact to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </NavLink>
        <Searchbar />
        <NavLink to='/create'>Create Recipe</NavLink>
      </nav>
    </div>
  );
}
