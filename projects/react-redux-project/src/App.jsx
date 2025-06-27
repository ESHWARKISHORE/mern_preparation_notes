import './App.css'
import UserAdding from './components/userAdding/userAdding'
import DisplayingUser from './components/displayingUser/displayingUser'
import UserFromAPI from './components/userFromAPI/userFromAPI'

function App() {

  return (
    <>
      <div>
        <h1>React redux project</h1>
        <UserAdding/>
        <DisplayingUser/>
        <UserFromAPI/>
      </div>
    </>
  )
}

export default App
