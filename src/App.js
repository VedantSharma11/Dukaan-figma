import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex flex-col w-full overflow-hidden ml-72'>
        <Navbar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App;