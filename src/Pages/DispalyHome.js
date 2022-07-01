import React from 'react';

const DispalyHome = ({users}) => {
    const {_id, name} = users
    return (
        <div>
            <div class="overflow-x-auto">
        <table class="table w-full">
           <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
           <th>{_id}</th>
           <th>{name}</th>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default DispalyHome;