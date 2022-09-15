   
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';


export default function Counter() {
   const count = useSelector((state)=> state.counter.count)
   const themeTextColor = useSelector((state)=> state.theme.color)
   const dispatch = useDispatch();

  return (
    <div>
            <button className='button' onClick={()=> {dispatch(increment())  }}> + </button>
      <span className='value'>{count}</span>

      <button className='button' onClick={()=> { dispatch(decrement()) }}> - </button>
  
    
      <button className='button' style={{ width:"60%" , borderColor:themeTextColor, borderSize:"2px", borderStyle:"solid"   }} onClick={()=> { dispatch(incrementByAmount(10)) }}>  Increment 10 </button>
    </div>
  )
}
