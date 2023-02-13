import React from 'react'
import Photo from '../src/IMG_9753.jpg'

export default function About() {
  return (
    <>
      {' '}
      <h1> About Us </h1>
      <div style={{ padding: '20px' }}>
        <img
          src={Photo}
          style={{
            width: '50%',
            maxWidth: '400px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        />
        <p style={{ width: '50%', display: 'inline-block' }}>
          {' '}
          My name is Eduarda and I am currently a senior at NYU studying CS. I
          was born in Brazil but was raised on Cape Cod, Massachusetts. In my
          freetime, I like to listen to music, play around in Illustrator, and
          hangout with my roommate and my friends.{' '}
        </p>
      </div>
    </>
  )
}
