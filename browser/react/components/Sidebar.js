import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <div><a href="/albums" onClick={deselectAlbum}>ALBUMS</a></div>
          <div><Link to="/artists">ARTISTS</Link></div>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
