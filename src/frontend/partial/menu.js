import { Link } from "react-router-dom";

function Menu(){
return (
    <div class="navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item nav-item-arrow-down nav-hover-show-sub">
       
        <Link to="/">
        Homepage
        </Link>
        <div class="nav-arrow"><i class="fas fa-chevron-down"></i></div>
        <ul class="collapse nav">
          <li class="nav-item">
            <a class="nav-link" href="homepage-1.html">Homepage 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="homepage-2.html">Homepage 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="homepage-3.html">Homepage 3</a>
          </li>
        </ul>
      </li>
      <li class="nav-item nav-item-arrow-down nav-hover-show-sub">
        <a class="nav-link" href="#" data-role="nav-toggler">Pages</a>
        <div class="nav-arrow"><i class="fas fa-chevron-down"></i></div>
        <ul class="collapse nav">
          <li class="nav-item nav-item-arrow-down nav-hover-show-sub">
            <a class="nav-link" href="#" data-role="nav-toggler">Movies</a>
            <div class="nav-arrow"><i class="fas fa-chevron-down"></i></div>
            <ul class="collapse nav">
              <li class="nav-item">
                <a class="nav-link" href="movies-blocks.html">Blocks - No Sidebar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movies-blocks-sidebar-right.html">Blocks - Sidebar right</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movies-posters.html">Posters - No Sidebar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movies-posters-sidebar-right.html">Posters - Sidebar right</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="movies-list.html">List - No Sidebar</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="movie-info-sidebar-right.html">Movie info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery.html">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/new">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="article-sidebar-right.html">Article</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About us</a>
          </li>
          <li class="nav-item nav-item-arrow-down nav-hover-show-sub">
            <a class="nav-link" href="#" data-role="nav-toggler">User pages</a>
            <div class="nav-arrow"><i class="fas fa-chevron-down"></i></div>
            <ul class="collapse nav">
              <li class="nav-item">
                <a class="nav-link" href="sign-in.html">Sign in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sign-up.html">Sign up</a>
              </li>
            </ul>
          </li>
          <li class="nav-item nav-item-arrow-down nav-hover-show-sub">
            <a class="nav-link" href="#" data-role="nav-toggler">Status pages</a>
            <div class="nav-arrow"><i class="fas fa-chevron-down"></i></div>
            <ul class="collapse nav">
              <li class="nav-item">
                <a class="nav-link" href="under-construction.html">Under construction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="coming-soon.html">Coming soon</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="404-1.html">404 - 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="404-2.html">404 - 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="movies-blocks.html">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact us</a>
      </li>
    </ul>
    <div class="navbar-extra">
      <a class="btn-theme btn" href="#"><i class="fas fa-ticket-alt"></i>&nbsp;&nbsp;Buy Ticket</a>
    </div>
  </div>
)
}
export default Menu;