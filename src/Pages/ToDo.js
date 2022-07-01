import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import DisplayToDo from './DisplayToDo';


const ToDo = () => {

    const onSubmitNewItem = async (e) => {


        toast("Add Successfully")

        e.preventDefault()
        const name = e.target.name.value;

        e.target.reset()
        const user = { name }

        console.log(name);


        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
        <div className='hero-content max-w-full '>
            <form onSubmit={onSubmitNewItem} >
                <div class="mb-3 flex ">
                    <div>
                        <input type="Name" name='name' class="textarea textarea-primary" id="exampleInputBookName" aria-describedby="bookNameHelp" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>



                <DisplayToDo/>



                <ToastContainer />

            </form>

            
        </div>

        </>
    );
};

export default ToDo;