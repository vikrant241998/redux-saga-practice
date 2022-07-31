import './App.css';
import {useDispatch} from 'react-redux';
import {Add_to_Cart} from './Redux/Action'

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "i phone",
    type: "Mobile",
    price: 10000,
    color: "Red",
  }
  return (
    <div className="App">
      <button onClick={()=>{dispatch(Add_to_Cart(product))}}>Add to cart</button>
    </div>
  );
}

export default App;
