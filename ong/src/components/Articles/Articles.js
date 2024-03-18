import React from 'react'
import './Articles.css'
import img_article1 from '../../assets/images/img7.jpg'
import img_article2 from '../../assets/images/img3.jpg'
import img_article3 from '../../assets/images/img7.jpg'

const Articles = () => {
  return (
    <div className='articles'>
        <div className='article'>
            <img src={img_article1} alt=''/>
            <div className='caption'>
                <h3>Lorem ipsum</h3>
            </div>
        </div>
        <div className='article'>
            <img src={img_article2} alt=''/>
            <div className='caption'>
                <h3>Lorem ipsum</h3>
            </div>
        </div>
        <div className='article'>
            <img src={img_article3} alt=''/>
            <div className='caption'>
                <h3>Lorem ipsum</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Articles
