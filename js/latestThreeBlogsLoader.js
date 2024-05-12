const findLatestThreePosts=(blogJSON)=>{
 
    var blogsWithRequiredDate=[];
    var blogsWithoutRequiredDate=blogJSON;
        for (let i = 0; i < 3; i++) {
                  
            // Finding the latest blog object in the array
            var highestDatedBlog=blogsWithoutRequiredDate.reduce((a, b) => {
                return moment(a.date,"MMM DD, YYYY") > moment(b.date,"MMM DD, YYYY") ? a : b;
                console.log(a)
                console.log(b)
              })
    
            //   Pushing the latest blog object to an array 
            blogsWithRequiredDate.push(highestDatedBlog)
    
            //   Filtering an array of blog objects without the latest dated blog
            blogsWithoutRequiredDate=blogsWithoutRequiredDate.filter(e => {
                return e.date !=highestDatedBlog.date
            });
    
    }
    console.log({blogsWithRequiredDate})
        return blogsWithRequiredDate
    }
    


    
    