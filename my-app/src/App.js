import { useState } from 'react';
import './App.css';

  const Formulario = () =>{
    const [state, setState] = useState({
      nombre: "",
      profesion: ""
    });
  const handleInputChange = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
  };
    /*const defaultCounter =0;
  const [counter, setCounter] = useState(defaultCounter);
  const decrease = ()=>setCounter(counter -1);
  const reset = ()=>setCounter(defaultCounter);
  const increment = ()=>setCounter(counter +1);*/
  return (
          <form>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" onChange={handleInputChange} />
            <br />
            <label for="profesion">Profesión:</label>
            <input type="text" name="profesion" onChange={handleInputChange} />
            <h2>Se ingreso el nombre: {state.nombre} </h2>
            <h2>Se ingreso la profesión: {state.profesion} </h2>
            <button type="submit">Submit</button>
          </form>
        );
        {/*<h1>Counter</h1>
        <h3>Current value: {counter}</h3>
        <div className='action'>
            <button  onClick={decrease} className='action_button'>-1</button>
            <button onClick={reset} className='action_button'>Reset</button>
            <button onClick={increment} className='action_button'>+1</button>
        </div>*/}
};

export default Formulario;
