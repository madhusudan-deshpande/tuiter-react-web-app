function PostSummaryItem(post){
    return(`
        <div class="list-group-item p-1">
            <div class="row">
              <div class="col-9">
                <div class = ${post.topic === "" ? "d-none" : ""}>
                    <span class = "text-secondary">${post.topic}</span><br/>
                </div>
                <span class="fw-bold wd-font-size-15px">${post.userName}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-secondary">- ${post.time}</span><br/>
                <span class="fw-bold wd-font-size-15px">${post.title}</span>
              </div>
    
              <div class="col-3 text-center mt-auto mb-auto">
                <img src="${post.image}" class="wd-img">
              </div>
            </div>
        </div>
    `)
};
export default PostSummaryItem;