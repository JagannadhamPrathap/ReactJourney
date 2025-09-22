import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import RouteDemo from './RouteDemo.jsx'
// import Counter from './Counter.jsx'
// import Eventhandle from './EVENTHANDLE.jsx'
// import UpdateList from './ListUpdate.jsx'
// import UseEffect from './USEEFFECT.jsx'
import DigitalClock from './DigitalClock.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouteDemo /> */}
    {/* <Counter/> */}
    {/* <Eventhandle/> */}
    {/* <UpdateList/> */}
    {/* <UseEffect/> */}
    <DigitalClock/>
  </StrictMode>,
)