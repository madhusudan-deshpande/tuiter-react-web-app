function WhoToFollowListItem(who){
    return (`
        <div class="list-group-item">
        <div class="row">
          <div class="col-3 mt-auto mb-auto p-0">
            <img class="wd-img wd-rounded-image" src=${who.avatarIcon}>
          </div>
          <div class="col-6 mt-auto mb-auto p-0">
            <span class="fw-bold">${who.userName}</span>
            <i class="fa-solid fa-circle-check"></i><br/>
            <span class="text-secondary">@${who.handle}</span>
          </div>
          <div class="col-3 mt-auto mb-auto p-0">
            <div class="d-grid mt-auto mb-auto">
              <a href = "#" class="btn btn-primary btn-block rounded-pill me-2 ps-lg-2 pe-lg-2" type="button">Follow</a>
            </div>
          </div>
        </div>
      </div>  
    `)
};

export default WhoToFollowListItem;