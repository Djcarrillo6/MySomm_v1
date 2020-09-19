import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/mysomm-logo.png";
import { logout } from "../store/actions/auth";


class Navbar extends Component {

    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="MySomm Home" />
                        </Link>
                    </div>
                    <h1 id="title-logo" >
                        MySomm
                    </h1>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link
                                    to="/"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                >
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/mysomm-join-chat"
                                >
                                    Chat
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/users/${this.props.currentUser.user.id}/messages/new`}
                                >
                                    New Message
                                </Link>
                            </li>
                            <li>
                                <a onClick={this.logout}>Log Out</a>
                            </li>
                        </ul>

                    )
                        : (

                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/signin">Log In</Link>
                                </li>
                            </ul>
                        )}
                </div>
            </nav>

        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, { logout })(Navbar);