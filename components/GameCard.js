import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteGame } from '../utils/data/gameData';

const GameCard = ({
  id,
  title,
  maker,
  numberOfPlayers,
  skillLevel,
  onUpdate,
}) => {
  const deleteThisGame = () => {
    if (window.confirm('Are you sure you want to delete this game?')) {
      deleteGame(id).then(() => onUpdate());
    }
  };

  return (
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
        <Button onClick={deleteThisGame}>
          Delete Game
        </Button>
      </Card.Body>
    </Card>
  );
};

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameCard;
