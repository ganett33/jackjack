import React, { memo } from "react";

const Header = memo(({ username, onLogout, onMyTweets, onAllTweets }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./img/logo1.png' alt='jackjack Logo' className='logo-img' />
        <h1 className='logo-name'>jackjack</h1>
        {username && <span className='logo-user'>@{username}</span>}
      </div>
      {username && (
        <nav className='menu'>
          <button className='menu-item' onClick={onAllTweets}>
            All Tweets
          </button>
          <button className='menu-item' onClick={onMyTweets}>
            My Tweets
          </button>
          <button className='menu-item' onClick={onLogout}>
            Logout
          </button>
        </nav>
      )}
    </header>
  );
});

export default Header;
