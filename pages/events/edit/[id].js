import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventForm from '../../../components/event/EventForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleEvent } from '../../../utils/data/eventData';

export default function EditEvent() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  console.warn(id);

  useEffect(() => {
    getSingleEvent(id).then(setEditItem);
  }, [id]);

  return (<EventForm user={user} eventObj={editItem} />);
}
