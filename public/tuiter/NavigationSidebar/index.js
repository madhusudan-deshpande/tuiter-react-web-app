const NavigationSidebar = () => {
    return(`
        <div class="list-group">
    
          <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-brands fa-twitter"></i>
          </a>
    
          <a href="../HomeScreen/index.html" 
             class="list-group-item list-group-item-action ${window.location.pathname === "/tuiter-react-web-app/public/tuiter/HomeScreen/index.html" ? "active" : ""}">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-house"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Home</span>
              </div>
            </div>
          </a>
    
          <a href="../ExploreScreen/index.html" 
             class="list-group-item list-group-item-action ${window.location.pathname === "/tuiter-react-web-app/public/tuiter/ExploreScreen/index.html" ? "active" : ""}">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-hashtag"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Explore</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-bell"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Notifications</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Messages</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-bookmark"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Bookmarks</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-list"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Lists</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>Profile</span>
              </div>
            </div>
          </a>
    
          <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-circle-minus"></i>
              </div>
              <div class="col-10 d-none d-xl-inline">
                <span>More</span>
              </div>
            </div>
          </a>
    
          <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill ps-md-1 pe-md-1">Tuit</a>
          </div>
    
        </div> 
    `);
};
export default NavigationSidebar;

//To Test the component

$("#wd-navigation-side-bar").append(`
    ${NavigationSidebar()}
`)
