import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ItemCounter{" "}
          <span className="badge badge-pill badge-secondary">
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
