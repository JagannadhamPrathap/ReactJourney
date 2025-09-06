function Student(props){
    return (
        <div className="std">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent?"Yes":"No"}</p>
        </div>
    );
}
export default Student