import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-4'>
     <RevenueCard title={"Amount Pending"} orderCount={20} amount={"20,000"} ></RevenueCard>
    </div>
  )
}

export default App
