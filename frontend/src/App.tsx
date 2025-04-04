import './App.css'
import History from './components/History'
import MyPlayField from './components/MyPlayField'
import Rates from './components/Rates'

function App() {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      <Rates/>
      <History/>
      <MyPlayField />
    </div>
  )
}

export default App
