import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(""); // State for input value
  const [k, setK] = useState(false); // State to manage submission status

  const submit = () => {
    setK(true); // Update state to trigger re-render
  };

  return (
    <>
      <div>
        <input 
          type="text" 
          value={name || ""} 
          onChange={(e) => setName(e.target.value)} 
        />
        <button onClick={submit} style={{ margin: '0 10px' }}>
          Submit
        </button>
      </div>
      <div>
        {k && name && <h1>{name} Champ</h1>}
      </div>
    </>
  );
}

export default App;
