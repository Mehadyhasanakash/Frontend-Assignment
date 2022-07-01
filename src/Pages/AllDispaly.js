import React from 'react';
import { Link } from 'react-router-dom';

const AllDispaly = ({men}) => {
    const {_id, name} = men;
    return (
        <div>
            <div class="card-body">
    <h2 class="card-title">{_id}</h2>
    <p>{name}</p>
    <div class="card-actions justify-end">
      <Link to={`/update/${_id}`} ><button class="btn btn-primary">update Button</button></Link>
    </div>
  </div>
        </div>
    );
};

export default AllDispaly;