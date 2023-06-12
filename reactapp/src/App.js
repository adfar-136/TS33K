import About from "./components/About";

var fname = "Adfar";
var lname = "Rasheed";
var age= 25;
var skills = ["HTML","CSS","JS","React"]
var person = {
  name:"Adfar",
  age:25,
  skills: ["HTML","CSS","JS","React"]

}
function App() {
  return (
    <div>
      {skills.map((item,index)=>{
        return <li>{item}</li>
      })}
      <h1>Adfar Rasheed</h1>
      <About fname={fname} lname={lname} age={age} skills={skills} person={person}/>
      
      
      {header}
      {main}
      
      
    </div>
  );
}
const myStyle={
  color:"red",
  backgroundColor:"grey"
}
const header = (
  <header style={myStyle}>
    <h1>React Introduction</h1>
    <p>23 day to go</p>
    <small>Adfar Rashid</small>
  </header>
)
const main = (
  <main style={myStyle}>
    <h1>React Introduction</h1>
    <p>Components</p>
    <h4>Welcome to react</h4>
  </main>
)
export default App;
