const latestBlogRenderer=(blogJSON,idToBeRenderedAt)=>{
	var allBlogs=null;
	{allBlogs=blogJSON.map((blog,index)=>{
        var blogDate=moment(blog.date,"MMM DD, YYYY").format("DD")
        var blogMonth=moment(blog.date,"MMM DD, YYYY").format("MMM")
        var blogYear=moment(blog.date,"MMM DD, YYYY").format("YYYY")
        var activeClass=index==1?"active":"";
        return  `<div class="item ${activeClass}">
                            <div class="row">
                            <div class="col-md-5 col-sm-9">
                                <div class="blog-left">
                                  <a href="/blog-post.html?id=${blog.id}">
                                    <img src=${blog.latestImgSrc} alt="" /></a>
                                </div>
                            </div>
                            <div class="col-md-1 col-sm-3">
                                <div class="blog-comment">
                                    <h1>${blogDate}</h1>
                                    <h4>${blogMonth}, ${blogYear}</h4>
                                    
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="blog-right">
                                <a href="/blog-post.html?id=${blog.id}">  
                                <h2>${blog.title}</h2>
                                </a>
                                    <i class="fa fa-folder-open" aria-hidden="true"></i><span>  ${blog.category.map((category,index)=>{
                                        return `${category}`
                                    }).join(", ")}</span>
                                    <p>${blog.latestBlogDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
	}).join('')
	if(document.getElementById(idToBeRenderedAt))document.getElementById(idToBeRenderedAt).innerHTML=allBlogs

}
latestBlogNavigatorRenderer(blogJSON,"latestBlogCarouselIndicator")
console.log({allBlogs})
}

const latestBlogNavigatorRenderer=(blogJSON,idToBeRenderedAt)=>{
    var blogNavigator=blogJSON.map((value,index)=>{
        var activeClass=index==0?"active":"";

        return `<li data-target='#quote-carousel' data-slide-to='${index}' class="${activeClass}"><img class="img-responsive " src="/${value.featuredImage}" alt="">
        </li>
        `
    }).join("")
	if(document.getElementById(idToBeRenderedAt))document.getElementById(idToBeRenderedAt).innerHTML=blogNavigator
console.log({blogNavigator})
}