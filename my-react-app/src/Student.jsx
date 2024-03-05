import PropTypes from 'prop-types';

function Student(props){

    return (
        <div className="student">
            <h1>Student Name: {props.name}</h1>
            <p>Student age: {props.age}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p></p>
        </div>
    );
}

Student.propType = {
  name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;