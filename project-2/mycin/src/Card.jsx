import React from 'react';
import "./Cards.css"
const Card = props => {
    return(
        <div className='image'>
            <img className="image_img" src="https://picsum.photos/201/300" alt="consoles">
            </img>
            <div className='image_overlay'>
               <div className='image_title'>Title</div>
               <p className='image_description'>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges.</p>
            </div>

        </div>
    );
}
export default Card;