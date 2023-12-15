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
          <li>
            <div className='flex'>
              <img src={person.img} alt='img' />
              <div className='title'>
                <h3 className='name'>{person.name}</h3>
                <h5 className='age'>{person.birthday}</h5>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
