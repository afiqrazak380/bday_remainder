import React from 'react';
import './board.css';
import List from './list';

const Info = [
  {
    img: 'https://th.bing.com/th/id/R.46e729c5f6eb0ebd0c78a4591540ce27?rik=TYXB0b8M0pQ2Aw&pid=ImgRaw&r=0',
    name: 'Snoop Dog',
    birthday: '1995-12-16',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.tObrUVNH38SbxH4jl80_vgHaLH?rs=1&pid=ImgDetMain',
    name: 'Slim Shady',
    birthday: '1998-11-29',
  },
  {
    img: 'https://i.pinimg.com/736x/59/f5/af/59f5af016697b79960a059339c64b9b7.jpg',
    name: 'Tupac Shakur',
    birthday: '1991-10-02',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.SrdwLxcGKIf87zYxhI2f2wHaKe?w=751&h=1063&rs=1&pid=ImgDetMain',
    name: 'Malique ThooPhat',
    birthday: '1977-3-15',
  },
  {
    img: 'https://i.pinimg.com/originals/ed/d9/93/edd99335f5f03e221bf776f11717f1f2.jpg',
    name: 'Brianna Baker',
    birthday: '1994-5-05',
  },
  {
    img: 'https://th.bing.com/th/id/R.dabe70a843e2fc2bdc346994a6b8a73f?rik=N2BHPdS1k%2fR4rQ&pid=ImgRaw&r=0',
    name: 'Brad Myers',
    birthday: '1994-6-15',
  },
];

export default function board() {
  return (
    <main id='site-main'>
      <h1 className='text-dark title'>Birthday Remainder</h1>
      <div className='board'>
        <List info={Today(Info)}></List>
        <h2 className='upcoming text-dark'>Passed</h2>
        <List info={Upcoming(Info)}></List>
      </div>
    </main>
  );
}

// Today birthday
function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();
    return currentDay == day && currentMonth == month;
  });

  return filter;
}

//Upcoming birthday
function Upcoming(person) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let monthBday = new Date(data.birthday).getMonth();
    let dayBday = new Date(data.birthday).getDate();

    if (dayBday == currentDay) return;
    return monthBday <= currentMonth && monthBday >= currentMonth - 2;
  });

  return filter;
}
