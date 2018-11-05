import React, { Component } from "react";

class NavBar extends Component {
  getBadge() {
    let classes = "badge badge-pill badge-secondary badge-";
    classes += this.props.totalItem === 0 ? "primary" : "warning";
    return classes;
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ItemCounter
          <span className={this.getBadge()}>
            {this.props.totalItem}
          </span>
        </a>
      </nav>
    );
  }
}

// Using Stateless Functional Component
// Destructuring this.props...
// const NavBar = ({totalItem}) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         ItemCounter{" "}
//         <span className="badge badge-pill badge-secondary">
//           {totalItem}
//         </span>
//       </a>
//     </nav>
//   );
// };

export default NavBar;
