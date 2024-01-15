import React, { useEffect, useState } from "react";
import './Nav.css'

function Nav() {

const [show, setShow ] = useState(false);


const TransitionDiv =()=>{
    if(window.scrollY > 100) {
        setShow(true)
    }else{
        setShow(false)
    }
}
useEffect (()=>{

  window.addEventListener("scroll",TransitionDiv);
  return ()=>{
    window.removeEventListener("scroll", TransitionDiv);
  }

})
  return (
    <>
      <header className={` ${show && 'nav_black'}`}>
        <div className="container">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="netflix_logo_img">
              <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="img-fluid" />
            </div>

            <div className="netflix_logo_img1">
              <img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt=""  className="img-fluid" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
