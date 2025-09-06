import Student from './Students.jsx';
function App() {
  return (
    <>
      <Student name="Prathap" age={22} isstudent={true}/>
      <Student name="Rambo" age={42} isstudent = {false}/>
      <Student name="Rocky" age={55} isstudent = {false}/>
      <Student/>
    </>
  );
}
export default App;