import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const GameCard = ({
  id,
  title,
  maker,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Text>By: {maker}</Card.Text>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
      <Card.Text className="text-muted">Skill Level: {skillLevel}</Card.Text>

      <Link href={`/games/edit/${id}`} passHref>
        <Button variant="primary" className="m-2">
          Edit Game
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default GameCard;
