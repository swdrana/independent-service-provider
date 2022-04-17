import React from 'react';
import './Topic.css'
const Topic = ({item}) => {
    const {img, id, name, ratings, text} = item;
    return (
        <div className='item col-sm-6 col-md-4'>
        <div className="single-review p-3 m-1">
          <div className="d-flex">
            <img
              src={img}
              alt=""
              width={50}
              height={50}
              className="rounded-circle"
            />
            <div className="ms-4">
              <h5 className="text-start m-0 p-0">{name}</h5>
              <p className="text-start m-0 mt-1 p-0">Rating: {ratings.toFixed(2)} </p>
            </div>
          </div>
          <hr />
          <p className="text-start" title={text}>
            {text > text.slice(0, 150) ? text.slice(0, 150) + " . . ." : text}
          </p>
        </div>
            
        </div>
    );
};

export default Topic;