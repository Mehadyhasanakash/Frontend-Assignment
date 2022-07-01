import React from 'react';
import useHook from '../Components/useHook';
import AllDispaly from './AllDispaly';

const DisplayToDo = ({ u }) => {

    const [myuser, setUser] = useHook()


    return (
        <div>
            <>
                <div >
                    <div class="card w-96 bg-base-100 shadow-xl ">
                        {
                        myuser.map(men => <AllDispaly
                        
                        men ={men}
                        ></AllDispaly>)
                        }
                    </div>
                </div>
            </>
        </div>
    );
};

export default DisplayToDo;