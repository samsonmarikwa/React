import './App.css';
import { useState } from 'react';
import Title from './component/Title';
import Modal from './component/Modal';
import EventList from './component/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: 'Race on moo moo farm', id: 3 },
  ]);

  const [showevents, setShowevents] = useState(true);

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

  console.log(showModal);

  return (
    <div className='App'>
      <Title title='Events In Your Area' subtitle={subtitle} />
      <br />
      {/* Logical and - will execute the statement on the right side if showevents evalutes to true*/}
      {showevents && (
        <button onClick={() => setShowevents(false)}>Hide Events</button>
      )}

      {!showevents && (
        <button onClick={() => setShowevents(true)}>Show Events</button>
      )}
      {showevents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            impedit maxime, laborum vel veritatis, laudantium facere excepturi
            dicta rem odio temporibus adipisci iure, explicabo nam sed ducimus
            provident accusamus. Illo.
          </p>
        </Modal>
      )}
      <br />
      <br />
      {!showModal && (
        <button onClick={() => setShowModal(true)}>
          Show Terms and Conditions
        </button>
      )}
    </div>
  );
}

export default App;
