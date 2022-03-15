import React from 'react';
import './About.css';
import imgF from './avatar-11.png';
import imgM from './avatarM.png';

const About = () => {
  return (
  <div className='Fondo Direction'>
    <section className="about-section">
      
      <div className="testimonial">
                <div className="testimonial__card">
                    
                    <div className="testimonial__card__content">
                        <p>Hello, I’m Freddie and I’m the founder of Simply Natural. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia eum quaerat maxime voluptates delectus facilis! Quibusdam eveniet sit dolorum.</p>
                    <div className="testimonial__card__content__image"><img src={imgM}      alt="avatar" /> 
                    </div>
                    <div className="testimonial__card__content__details">
                    <h2>Freddie</h2> <span>Designer</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial__card">
                <div className="testimonial__card__content">
                    <p>My name is Laura. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia eum quaerat maxime voluptates delectus facilis! Quibusdam eveniet sit dolorum.</p>
                    <div className="testimonial__card__content__image"><img src={imgF}       alt="avatar" /> 
                    </div>
                    <div className="testimonial__card__content__details">
                    <h2>Laura</h2>  <span>Seller</span>
                    </div>
                </div>
                </div>
                <div className="testimonial__card">
                <div className="testimonial__card__content">
                    <p>Hi my name is Andrea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia eum quaerat maxime voluptates delectus facilis! Quibusdam eveniet sit dolorum.</p>
                    <div className="testimonial__card__content__image"><img src={imgF}       alt="avatar" /> 
                    </div>
                    <div className="testimonial__card__content__details">
                    <h2>Andrea</h2>  <span> Seller </span>
                    </div>
                </div>
                </div>
            
            </div>
  </section>
  
    
  </div>
  )};

export default About;
