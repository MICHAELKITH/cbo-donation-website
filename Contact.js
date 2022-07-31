import React from 'react'
import './Contact.css';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className='container__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>alpha@gmail.com</h5>
            <a href='mailto:alpha@gmail.com' target="_blank">Send Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>alpha@gmail.com</h5>
            <a href='mailto:alpha@gmail.com' target="_blank">Send Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>alpha@gmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone=+254714707147'target="_blank">Send Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required  />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name='message' rows="7" required></textarea>
          <button type="Submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      

    </section>
  )
}

export default Contact