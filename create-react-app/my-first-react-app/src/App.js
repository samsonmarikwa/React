import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Annet');
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: 'Race on moo moo farm', id: 3 },
  ]);

  const handleClick = () => {
    setName('Samson');
    console.log(name);
  };

  return (
    <div className='App'>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <h2 key={event.id}>
          {index} - {event.title}
        </h2>
      ))}
    </div>
  );
}

export default App;
