   
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import coin from '../coin/Coin'

export default function Counter() {
   const count = useSelector((state)=> state.counter.count)

   const dispatch = useDispatch();

  return (
    <div>
            <button className='button' onClick={()=> {dispatch(increment())  }}> + </button>
      <span className='value'>{count}</span>

      <button className='button' onClick={()=> { dispatch(decrement()) }}> - </button>
      <div>{coin}</div>
    
    </div>
  )
}
