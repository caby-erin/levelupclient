import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteEvent } from '../utils/data/eventData';

const EventCard = ({
  id,
  game,
  description,
  date,
  time,
  organizer,
  onUpdate,
}) => {
  const deleteThisEvent = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{game}</Card.Header>
      <Card.Body>
        <Card.Title>Organized By: {organizer}</Card.Title>
        <Card.Text>Event Details: {description} </Card.Text>
        <Card.Text>Time: {time} </Card.Text>
        <Card.Text>Date: {date} </Card.Text>
        <Link href={`/events/edit/${id}`} passHref>
          <Button variant="primary" className="m-2">
            Edit Event
          </Button>
        </Link>
        <Button variant="primary" className="m-2" onClick={deleteThisEvent}>
          Delete Event
        </Button>
      </Card.Body>
    </Card>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  game: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
