import { useSelector } from 'react-redux';

export default function Coin() {

  const count = useSelector((state)=> state.counter.count)
  const themeTextColor = useSelector((state)=> state.theme.color)
  return (

    <>
    <span className='value'  
    style={{color: themeTextColor, border:"2px solid red", padding:"4px 12px 12px 12px"}}>Coin :  {count}</span>
      <div>  Coin Count :-  </div>
    </>
  )
}
