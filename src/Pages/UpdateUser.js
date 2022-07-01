import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams()
    const [update, setUpadate] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpadate(data))
    } ,[]);

    const onSubmitUpdateItem = async (e) => {



        e.preventDefault()
        const name = e.target.name.value;

        e.target.reset()
        const updateUser = { name }

        console.log(name);


        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }




    return (
        <>
            <h2>updating user :{update.name} </h2>
            <div className='hero-content max-w-full '>
            <form onSubmit={onSubmitUpdateItem} >
                <div class="mb-3 flex ">
                    <div>
                        <input type="Name" name='name' class="textarea textarea-primary" id="exampleInputBookName" aria-describedby="bookNameHelp" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    </form>

                    </div>
            
        </>
    );
};

export default UpdateUser;