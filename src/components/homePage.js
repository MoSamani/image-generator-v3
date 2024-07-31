import React from 'react'

const Homepage = () => {
  return (
    <div className="container">
      <header>
        <h2 className="roboto-bold leftRightGradient">
          TimeLens: Your Time-Traveled Portrait
        </h2>
        <p className=".roboto-bold">Think outside the box!</p>
      </header>

      <main className="roboto-regular">
        <div className="main">
          <div className="herobox1">
            <form method="post">
              <div className="inputWrapper form">
                <p className="inputLabel">Eras</p>
                <div className="radioGruop">
                  <label>
                    <input
                      type="radio"
                      name="Eras"
                      id="Stone age"
                      value="Stone age"
                    ></input>
                    Stone age
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Eras"
                      id="Middle age"
                      value="Middle age"
                    ></input>
                    Middle age
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Eras"
                      id="Baroque"
                      value="Baroque"
                    ></input>
                    Baroque
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Eras"
                      id="Future"
                      value="Future"
                    ></input>
                    Future
                  </label>
                </div>

                <p className="inputLabel">Location</p>
                <div className="radioGruop">
                  <label>
                    <input
                      type="radio"
                      name="Location"
                      id="Asia"
                      value="Asia"
                    ></input>
                    Asia
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Location"
                      id="America"
                      value="America"
                    ></input>
                    America
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Location"
                      id="Africa"
                      value="Africa"
                    ></input>
                    Africa
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="Location"
                      id="Europe"
                      value="Europe"
                    ></input>
                    Europe
                  </label>
                </div>

                <p className="inputLabel"> What kind of clothes do you like?</p>
                <input
                  type="text"
                  name="Clothes"
                  id="Clothes"
                  placeholder="Leather shoes, Kimono, Saris or ..."
                ></input>

                <p className="inputLabel"> How old are you?</p>
                <input
                  type="text"
                  name="Old"
                  id="Old"
                  placeholder="20, 58, ..."
                ></input>

                <p className="inputLabel"> Let us know about yourself</p>
                <textarea
                  name="Promt"
                  id="Promt"
                  placeholder="Hobbys, ..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="herobox2"></div>
        </div>
        <button className="nextbutton">Next</button>
      </main>
      {/* <footer>
        <button>Next</button>
      </footer> */}
    </div>
  )
}

export default Homepage
