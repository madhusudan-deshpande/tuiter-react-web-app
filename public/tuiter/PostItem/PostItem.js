function PostItem(post){
    return(`
        <div class="list-group-item bg-black p-2">
            <div class="row">
                
                <div class="col-2">
                    <img src="${post.avatarIcon}" class="wd-img wd-rounded-image"/>
                </div>
                
                <div class="col-10">
                
                    <div>
                        <span class="fw-bold">${post.userName}</span>
                        <span><i class="fa-solid fa-circle-check"></i></span>
                        <span class="text-secondary">@${post.handle} &middot; ${post.time}</span>
                        <br/>
                        <span>${post.tuit}</span>
                    </div>
                    
                    <div class = "list-group wd-border-radius-10px">
                        <div class="list-group-item p-0 bg-black ${post.linkHeading === "" ? "border-0" : ""}" >
                            <img src="${post.image}" class="img-fluid ${post.linkHeading === "" ? "wd-border-radius-10px" : ""}"/>
                        </div>
                        <div class="list-group-item bg-black ${post.linkHeading === "" ? "d-none" : ""}">
                            <span class="fw-bold img-fluid">${post.linkHeading}</span>
                            <br/>
                            <span>${post.linkDetails}</span>
                        </div>    
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-3">
                            <a href="#" class="text-secondary wd-hyperlink-no-underline">
                                <i class="fa fa-comment"></i>
                                <span>${post.comments}</span>
                            </a>
                        </div>
                        
                        <div class="col-3">
                            <a href="#" class="text-secondary wd-hyperlink-no-underline">
                                <i class="fa fa-retweet"></i>
                                <span>${post.reTuits}</span>
                            </a>
                        </div>
                        
                        <div class="col-3">
                            <a href="#" class="text-secondary wd-hyperlink-no-underline">
                                <i class="fa-solid fa-heart"></i>
                                <span>${post.likes}</span>
                            </a>
                        </div>
                        
                        <div class="col-3">
                            <a href="#" class="text-secondary wd-hyperlink-no-underline">
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>
                       
                </div>
                
            </div>
            
        </div>
    `)
};

export default PostItem;