import React from 'react';

const Display = ({users}) => {
    const {name, _id} = users
    return (
        <div>
            <div class="card-body">
    <h2 class="card-title">{_id}</h2>
    <p>{name}</p>
    
  </div>
        </div>
    );
};

export default Display;