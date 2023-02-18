import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
      <div class="row mb-2">
        <div class="col-10">
          <input class="form-control wd-search-box" placeholder="&#128269 Search Tuiter"/>
        </div>
        <div class="col-2 text-end mt-auto mb-auto">
          <a href="explore-settings.html"><i class="fa-solid fa-gear fa-2x text-primary"></i></a>
        </div>
      </div>
      
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
        </li>
      </ul>
      
      <div class="list-group-item p-0 mb-2">
        <img src="../../images/spacex_starship.webp" class = "img-fluid"/>
        <div class="position-absolute bottom-0 wd-img-text-color fs-2 fw-bold ms-2">SpaceX's Starship</div>
      </div>
      
      ${PostSummaryList()}
    `)
};

export default ExploreComponent;


