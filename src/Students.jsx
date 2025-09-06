import PropTypes from 'prop-types'
function Student(props){
    return (
        <div className="std">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent?"Yes":"No"}</p>
        </div>
    );
}
Student.PropTypes = {
  name:PropTypes.String,
  age:PropTypes.number,
  istudent:PropTypes.bool
}
Student.defaultProps = {
  name:"Guest",
  age:0,
  isstudent:false
}
export default Student;