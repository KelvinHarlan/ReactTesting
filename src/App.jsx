import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';

function App() {

  const [name, setName] = useState('');
  const handleChangeName = ({target}) =>{setName(target.value)};

  return (
    <>
    <main className='container'>
        <Form handleChangeName = {handleChangeName} />
        {name}
    </main>
    </>
  )
}

export default App
