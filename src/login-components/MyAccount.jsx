import React, { useState } from "react";

export default function MyAccountButton() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (username.trim() !== "") {
      setLoggedIn(true);
      setDisplayName(username);
      setUsername("");
      setShowSubmenu(false);
    } else {
      alert("Please enter a username to log in!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setDisplayName("");
  };

  return (
    <div className="my-account">
      <button onClick={toggleSubmenu} className="account-btn">
        {loggedIn ? displayName : "MY ACCOUNT"}
      </button>
      {showSubmenu && (
        <div>
          {loggedIn ? (
            <div className="account-info">
              <p>
                Welcome, <strong>{displayName}</strong>!
              </p>
              <button onClick={handleLogout} className="account-btn">
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="account-info">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your name"
                className="account-input-field"
              />
              <button onClick={handleLogin} className="account-btn">
                LOGIN
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
