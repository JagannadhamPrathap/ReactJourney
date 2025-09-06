import Student from './Students.jsx';
import PropTypes from 'prop-types'
function App() {
  return (
    <>
      <Student name="Prathap" age={22} isstudent={true}/>
      <Student name="Rambo" age={42} isstudent = {false}/>
      <Student name="Rocky" age={55} isstudent = {false}/>
    </>
  );
}
Studnet.PropTypes = {
  name:PropTypes.String,
  age:PropTypes.number,
  istudent:PropTypes.bool,
}
export default App;