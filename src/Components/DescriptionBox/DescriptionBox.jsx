import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="descriptionbox-navigator">
            <div className="Descriptionbox-nav-box">Description</div>
            <div className="Descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="Descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quas repudiandae, quasi distinctio alias fuga accusamus sequi voluptate recusandae laboriosam aperiam explicabo corporis deleniti placeat ullam odio beatae tempora!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ex a esse fugiat dolor dignissimos corporis incidunt excepturi recusandae nisi in, eos nobis voluptates veniam, quia asperiores libero distinctio officiis aperiam dolorum cumque provident magni.</p>
        </div>
    </div>
  )
}

export default DescriptionBox