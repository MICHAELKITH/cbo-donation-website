import React from 'react'
import './Members.css';
import LOGO from '../../../assets/logo.png'
import JABUYA from '../../../assets/jabuya.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
 
import 'swiper/css/pagination';

const data=[
    {
        avatar: LOGO,
        name:'Managing Director-Chrispine Odipo',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    },
    {
        avatar: JABUYA,
        name:'Secretary General-Jabuya Lawrence-',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    },
    {
        avatar: LOGO,
        name:'Deputy Chairperson-Pauline Mwaniki',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    },
    {
        avatar: LOGO,
        name:'Finance Directorate-Hellenah Gitonga',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    }, 
    {
        avatar: LOGO,
        name:'Cordinator-Karangi Kenneth',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    },
    {
        avatar: LOGO,
        name:'Project Manager-Kelvin Mwangi',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque tempora magnam dolorem iste, est praesentium deserunt, unde, beatae doloremque libero. Enim ex ipsum ab, saepe numquam quisquam ipsa id.'
    },
    {
        avatar: LOGO,
        name:'Project Manager-Dominic Kipngeno',
        review:'WEB DEVELOPER '
    },
    {
        avatar: LOGO,
        name:'I.C.T- officer- Michael Kithinji',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Procurement Officer-Hausi Dennis',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
    {
        avatar: LOGO,
        name:'Michael',
        review:'WEB DEVELOPER'
    },
]

function Members() {
  return (
    <section id = 'members'>
        <h5>Our Members</h5>
        <h2>Pioneers</h2>
        <Swiper className= 'container testimonials__container'
         modules={ [Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}>   
            {
                data.map(({avatar,name,review}, index ) =>{
                    return(
                        <SwiperSlide  key ={index}className='testimonials'>
                            <div className='client__avatar'>
                                <img src ={avatar}/>
                            </div>    
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    </section>
       
  )
}

export default Members
