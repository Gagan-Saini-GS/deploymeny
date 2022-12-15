function Navbar(props) {
  function logout() {
    localStorage.removeItem("accessToken");
    props.setFeed(false);
  }

  return (
    <div className="navbar">
      <img className="nav-img" src="image/gagan.jpg" alt="" />
      <h1>Navbar</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
