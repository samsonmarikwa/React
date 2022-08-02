import './App.css';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: 'Race on moo moo farm', id: 3 },
  ]);

  const [showevents, setShowevents] = useState(true);

  const handleClick = (id) => {
    console.log(id);
    // setEvents(events.filter((event) => event.id !== id));

    // This is the right way of doing it because directly using the state value
    // can cause problems if it was mutated by another process as the setState is
    // asynchronous.
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  console.log(showevents);

  return (
    <div className='App'>
      {/* Logical and - will execute the statement on the right side if showevents evalutes to true*/}
      {showevents && (
        <button onClick={() => setShowevents(false)}>Hide Events</button>
      )}

      {!showevents && (
        <button onClick={() => setShowevents(true)}>Show Events</button>
      )}

      {showevents &&
        events.map((event) => {
          return (
            <dir key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleClick(event.id)}>
                delete event
              </button>
            </dir>
          );
        })}
    </div>
  );
}

export default App;
