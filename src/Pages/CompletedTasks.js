import React from 'react';
import useHook from '../Components/useHook';
import Display from './Display';

const CompletedTasks = () => {
    const [myuser, setUser] = useHook()
    return (
        <div className='grid grid-cols-4 gap-4'>
        <div className="  w-96 bg-base-100 shadow-xl">
             {
        myuser.map( users => <Display
        
            users= {users}
        
        />
        
        
        
        )
      }
        </div>
        </div>
    );
};

export default CompletedTasks;