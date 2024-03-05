import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";

function App() {
  
  return(
    <> 
    <Student name="Rodrigo" age={30} isStudent={false}></Student>
    <Student name="Luiza" age={26} isStudent={true}></Student>
    <Student></Student>
    </>
  );
}

export default App
