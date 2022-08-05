import './App.css';
import { useState } from 'react';
import Title from './component/Title';
import Modal from './component/Modal';
import EventList from './component/EventList';
import NewEventForm from './component/NewEventForm';

function App() {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const [showEvents, setShowEvents] = useState(true);

  const handleClick = (id) => {
    // setEvents(events.filter((event) => event.id !== id));

    // This is the right way of doing it because directly using the state value
    // can cause problems if it was mutated by another process as the setState is
    // asynchronous.
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const subtitle = 'All the latest events in samson kingdom';

  const handleClose = () => {
    setShowModal(false);
  };

  const closeAddEvent = () => {
    setShowAddEventForm(false);
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    closeAddEvent();
  };

  return (
    <div className='App'>
      <Title title='Events In Your Area' subtitle={subtitle} />
      <br />
      {/* Logical and - will execute the statement on the right side if showevents evalutes to true*/}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      )}

      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            impedit maxime, laborum vel veritatis, laudantium facere excepturi
            dicta rem odio temporibus adipisci iure, explicabo nam sed ducimus
            provident accusamus. Illo.
          </p>
        </Modal>
      )}
      {showAddEventForm && (
        <Modal handleClose={closeAddEvent} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setShowAddEventForm(true)}>Add New Event</button>
      </div>
      <div>
        {!showModal && (
          <button onClick={() => setShowModal(true)}>
            Show Terms and Conditions
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
