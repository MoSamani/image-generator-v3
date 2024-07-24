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

      <main>
        <div className="main">
          <div className="herobox1">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              vero facere voluptatum ut sint error id nam eaque itaque quam
              neque optio, quisquam, beatae qui hic quos architecto deserunt
              sunt?
            </p>
          </div>
          <div className="herobox2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              vero facere voluptatum ut sint error id nam eaque itaque quam
              neque optio, quisquam, beatae qui hic quos architecto deserunt
              sunt?
            </p>
          </div>
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
