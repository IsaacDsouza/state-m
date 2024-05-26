import { useState } from 'react'

function NameList(){
  const [list, setList] = useState(["Jebron","kDot","pac"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };
  return (
    <div>
      <ul>
        {list.map((name) =>(
          <li key = {name}>{name}</li>
        ))}
        </ul>

        <input type="text" 
        value = {name}
        onChange={(e) => setName(e.target.value)} />
        <button onClick={onAddName}
        >Add name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne(){
    setCount(count+1);
  }

  return (
    <div className='App'>
      <button onClick={addOne}>count={count}</button>
    </div>
  );
}
function App() {
  return (
    <>
    <Counter />
    <NameList />
    
    </>

  )
}

export default App;
