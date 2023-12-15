import React from 'react';
import './board.css';
import List from './list';

const Info = [
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Sofia Cooper',
    birthday: '1995-01-31',
  },
  {
    img: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Miller Wright',
    birthday: '1998-05-29',
  },
  {
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Tara Kelly',
    birthday: '1991-02-02',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Freddie Watson',
    birthday: '1999-10-15',
  },
  {
    img: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Brianna Baker',
    birthday: '1994-07-05',
  },
  {
    img: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    name: 'Brad Myers',
    birthday: '1997-01-28',
  },
];

export default function board() {
  return (
    <main id='site-main'>
      <h1 className='text-dark title'>Birthday Remainder</h1>
      <div className='board'>
        <List info={Info}></List>
      </div>
    </main>
  );
}
