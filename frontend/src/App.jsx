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

                <div className="workExperience">
                    <div className="headings">
                        <h1>Work Experience</h1>
                        <h1>Companies i have worked for in the past</h1>
                    </div>
                    <div className="companies">
                        <div className="company">
                            <h1>01</h1>
                            <h2>Google, Interaction <br /> Designer</h2>

                            <p>Cuurently working here as a product designer</p>
                        </div>
                        <div className="company">
                            <h1>01</h1>
                            <h2>Google, Interaction <br /> Designer</h2>

                            <p>Cuurently working here as a product designer</p>
                        </div>
                        <div className="company">
                            <h1>01</h1>
                            <h2>Google, Interaction <br /> Designer</h2>

                            <p>Cuurently working here as a product designer</p>
                        </div>
                    </div>

                    <div className="philosophy">
                        <div className="lleft">
                            <h1>
                                Philosophy & values
                            </h1>
                            <p>
                                I think everyone wants the same thing - 
                                relationship with humanity, peace with the 
                                metaphysical, and experience with the universe. 
                                I try to grasp these things with my values: 
                                authenticity, creativity, & hospitality.
                            </p>
                        </div>
                        <div className="right">
                            To contain image
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;
