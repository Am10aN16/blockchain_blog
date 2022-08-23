import React ,{useEffect} from 'react'
import "./header.css"
import {NavLink } from 'react-router-dom'
import $ from 'jquery'

const Header = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/">
       BLOCKCHAIN BLOGS 
      </NavLink>

      <button
        className="navbar-toggler" onClick={function(){
          setTimeout(function(){animation();})
        }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className ="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='navbar-nav ms-auto'>
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className='nav-item active'>
            <NavLink className='nav-link' to = "/">
            <i className ="fa-solid fa-house"></i>Home
            </NavLink>
          </li>
          <li className='nav-item '>
            <NavLink className='nav-link' to = "/bitcoin">
            <i className="fa-brands fa-bitcoin"></i>Bitcoin
            </NavLink>
          </li>
          <li className='nav-item '>
            <NavLink className='nav-link' to = "/blockchain">
            <i className="fa-solid fa-cube"></i>BlockChain
            </NavLink>
          </li>
         
          <li className='nav-item '>
            <NavLink className='nav-link' to = "/convertor">
            <i className="fa-brands fa-stack-exchange"></i>Convertor
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header