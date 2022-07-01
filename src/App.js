import Home from './Pages/Home';
import CompletedTasks from './Pages/CompletedTasks';
import Nabvar from './Components/Nabvar';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Pages/ToDo';
import Calender from './Pages/Calender';
import UpdateUser from './Pages/UpdateUser';

function App() {
  return (
    < >

      <Nabvar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/completed-tasks'element={<CompletedTasks/>}></Route>
        <Route path='/to-do'element={<ToDo/>}></Route>
        <Route path='/calender'element={<Calender/>}></Route>
        <Route path='/update/:id'element={<UpdateUser/>}></Route>
      </Routes>


      
    </>
  );
}

export default App;
