import {BrowserRouter as Router,Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom'
const Home = () =>{
  const navigate = useNavigate()
  return (
    <div>
      <h2>Home page</h2>
      <button onClick={()=>navigate('/contact')}>Contact Support!</button>
    </div>
  )
}
const About = () => {
  return (<div>
    <ul>
      <li>
        <Link to='team'>Our Team</Link>
      </li>
      <li><Link to='company'>Company page</Link></li>
    </ul>
    <Outlet/>
  </div>)
}
const Contact = () => {
  return <h2>This is Contact page!</h2>
}
const Team = () => {
  return <h2>Team page</h2>
}
const Company = () => {return <h2>Company page</h2>}
function RouteDemo(){
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element = {<About/>}>
            <Route path='team' element={<Team/>}/>
            <Route path='company' element={<Company/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default RouteDemo