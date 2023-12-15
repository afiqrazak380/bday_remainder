import React from 'react';

export default function list({ info }) {
  return <ul>{iterate(info)}</ul>;
}

function iterate(data) {
  if (!data) {
    return;
  }
  return (
    <>
      {data.map((person, index) => {
        return (
          <li key={index}>
            <div className='flex'>
              <img src={person.img} alt='img' />
              <div className='title'>
                <h3 className='name'>{person.name}</h3>
                <h5 className='age'>{Old(person.birthday)} years old</h5>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

// How old is the person is?
function Old(personAge) {
  let year = new Date(personAge).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;
  return age;
}
