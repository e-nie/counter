import './App.css';
import {useState} from "react";

const initialCounts = [
  {
    id: '123',
    value: 0
  },
];

function App() {
  const [counts, setCounts] = useState(initialCounts);

  //для инпута, куда вписываем значение нового счетчика
  const [initialValueNewCounter, setInitialValueNewCounter] = useState(null);

  const onChangeNewCounterInitialValue = (e) => {
    setInitialValueNewCounter(e.target.value);
    console.log('click');
  };

  const handleDelete = (id) => {
    setCounts(counts.filter(count => count.id !== id));
  };

  const addCounter = () => {
    const newCounter = {
      id: Math.random(),
      value: Number(initialValueNewCounter) || 0,
    };
    setCounts([...counts, newCounter]);
  };

  const minus = (id) => {
    setCounts(counts.map(count => count.id === id ? {...count, value: count.value - 1} : count));
  };

  const plus = (id) => {
    setCounts(counts.map(count => count.id === id ? {...count, value: count.value + 1} : count));
  };

  return (
    <div>
      <ul>
        {counts.map(count => <li key={count.id}>
            <button onClick={() => minus(count.id)}>Minus</button>
            {count.value}
            <button onClick={() => plus(count.id)}>Plus</button>
            <button onClick={() => handleDelete(count.id)}>Delete</button>
          </li>
        )}
      </ul>

      <input value={initialValueNewCounter} onChange={onChangeNewCounterInitialValue}/>
      <button onClick={addCounter}>Add counter</button>

    </div>
  );
}

export default App;
