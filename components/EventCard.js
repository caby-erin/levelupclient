import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, //
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game}</Card.Header>
    <Card.Body>
      <Card.Title>Organized By: {organizer}</Card.Title>
      <Card.Text>Event Details: {description} </Card.Text>
      <Card.Text>Time: {time} </Card.Text>
      <Card.Text>Date: {date} </Card.Text>

    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.number.isRequired,
};

export default EventCard;
