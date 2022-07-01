import React from 'react';
import  { useState } from 'react';
import { Calendar } from 'react-calendar';


const Calender = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='flex justify-center align-center '>
            <div>
      <Calendar onChange={onChange} value={value} />
    </div>
        </div>
    );
};

export default Calender;