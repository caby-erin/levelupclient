import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GameForm from '../../../components/game/GameForm';
import { getSingleGame } from '../../../utils/data/gameData';
import { useAuth } from '../../../utils/context/authContext';

export default function EditGame() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  console.warn(id);

  useEffect(() => {
    getSingleGame(id).then(setEditItem);
  }, [id]);

  return (<GameForm user={user} gameObj={editItem} />);
}
