    import './App.css';
    import ClassComponents from "./pages/classComponents/ClassComponents";
    import ClassComponents2 from "./pages/classComponents/ClassComponents2";
    import Button from "./pages/button/Button";

    function App() {

      const user = {name: "Anna", age: 19}

      return (
        <div className="App">
            <ClassComponents objectName={user.name}/>
            <ClassComponents2 objectAge={user.age}/>
            <Button/>
        </div>
      );
    }


export default App;
