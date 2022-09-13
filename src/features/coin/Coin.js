import { useSelector } from 'react-redux';

export default function Coin() {

  const count = useSelector((state)=> state.counter.count)
  return (
    <span className='value'>{count}</span>
  )
}
