import { Outlet, NavLink } from 'react-router-dom'
import Context from './components/Context'

function App() {
  return (
    <>
      <div className='min-h-screen font-primary pt-[60px] bg-bg dark:bg-bg_d text-text dark:text-text-light pb-[93px] select-none'>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
