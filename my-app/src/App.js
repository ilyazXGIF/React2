import logo from './logo.svg';
    import './App.css';
    import about from "./img/Без названия.jfif"
    import sad from "./img/tit01.jpg"

    function AboutUS(){
        return(
            <div style={appDefaultCSS} className="abot">
                <div className="aboutUs">
                    <img src={about} alt="img1"/>
                </div>
            </div>
        );
    }
    const appDefaultCSS = {
        width: '1600px',
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    function App() {
      return (
        <div className="App">
          <AboutUS/>
          ----------------------------------------------------------------------------------
          <Portfolio/>
        </div>
      );
    }

function Portfolio(){
    return(
        <div style={appDefaultCSS} className="port">
            <div className="portfolio">
                <img src={sad} alt="img2"/>
            </div>
        </div>
    );
}

export default App;
