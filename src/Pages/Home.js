import React from 'react';
import useHook from '../Components/useHook';
import DispalyHome from './DispalyHome';

const Home = () => {
  const [myuser , setUser] = useHook()
  return (
    <>
      {
        myuser.map( users => <DispalyHome
        
        users = {users}
        ></DispalyHome>
        
        
        )
      }
    </>
  );
};

export default Home;