import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import EventCard from '../components/Events/EventCard';

const EventsPage = () => {
    const { allEvents, isLoading } = useSelector((state) => state.events);
    return (
      <>
        {isLoading ? (
          <h1>Loading.....</h1>
        ) : (
          <div>
            <Header activeHeading={4} />
            <EventCard active={true} data={allEvents && allEvents[0]} />
          </div>
        )}
      </>
    );
  };

export default EventsPage;