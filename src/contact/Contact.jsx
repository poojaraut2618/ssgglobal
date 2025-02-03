import React from 'react'
import GetInTouch from './GetInTouch'
import Form from './Form'
import ContactBanner from './ContactBanner'

export default function Contact() {
  return (
    <div>
      <ContactBanner/>  
        <GetInTouch/>
        <Form/>
    </div>
  )
}
