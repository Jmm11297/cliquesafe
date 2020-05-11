import React from "react";
class Events extends React.Component {
  render() {
    return (
      <div>
        <img id="homePageImage1" src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>   
        <div class="search-box">
            <input class="search-txt" type="text" name="" placeholder="Type to Search"></input>
            <a class="search-btn" href="#">
                <i class="fas fa-search"></i>
            </a>
        </div>
      </div>
    );
  }
}
export default Events;