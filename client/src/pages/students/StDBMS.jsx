import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DBMS = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        Heyy
      </div>
    </>
  );
};

export default DBMS;
