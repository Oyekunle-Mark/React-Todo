import React from 'react';

export default function Todo({ id, task }) {
  return (
    <li key={id}>{task}</li>
  );
}
