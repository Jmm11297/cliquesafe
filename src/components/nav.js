import React from "react";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">
            <h4>Clique Safe</h4>
          </div>
          <ul class="nav-links" id="nav-links">
            <ul class="nav-links" id="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              ,
              <li>
                <a href="#">Map</a>
              </li>
              ,
              <li>
                <a href="#">Events</a>
              </li>
              ,
              <li>
                <a href="#">Add</a>
              </li>
              ,
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;