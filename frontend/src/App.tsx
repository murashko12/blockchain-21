import './App.css'
import ComputerCardContainer from './components/ComputerCardContainer'
// import CardContainer from './components/UserCardContainer'
import History from './components/History'

import Rates from './components/Rates'
import UserCardContainer from './components/UserCardContainer'

function App() {
  return (
    <div className="relative w-full h-screen bg-gray-200 items-center justify-center">
      <Rates/>
      <History/>
      <div className='w-full h-full flex items-center justify-center flex-col gap-5 absolute top-40'>
        <ComputerCardContainer />
        <UserCardContainer />
      </div>
    </div>
  )
}

export default App
