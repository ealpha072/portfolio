import "./App.css";
import headerStyles from "../src/styles/Header.module.css"

const App = () => {
    return (
        <>
            <div >
                <nav className={headerStyles.mainHedaer }>
                    <div>
                        <div>Experience</div>
                        <div>Work</div>
                        <div>Photography</div>
                        <div>Contacts</div>
                    </div>
                </nav>

                <div className="secondDiv">
                    <div className="imageDiv"></div>
                    <div className="textDiv">
                        <h1>I am Alpha </h1>
                        <h1>Emmanuell</h1>
                        <h1>A fullstack developer</h1>
                        <h1>Based in Kenya</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
