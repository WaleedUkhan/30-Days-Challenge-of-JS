//simulat fetching user data 
function fetchUserData(){ 
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({userId: 1, name: "Waleed" });
        }, 1000)
    });
 } 

//Simulate fetching data for use Posts

function fetchuserPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res([
                {postId: 1 , title: "This is my First Post "},
                {postId: 2, title : "This is my Second Post"}
            ])
        }, 1000)
    }); 
}

//Simulate fetching comments for a post 

function fetchPostComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res([
                {commentId: 1, content: "Awesome Photo"},
                {commentId: 2, content: "Looking  Beautifull"},
            ]);
        }, 1000)
    })
}


 fetchUserData()

 .then(user=>{
    console.log("User' Data: ", user);
    return fetchuserPosts(user.userId);
 })

 .then(posts=>{
    console.log("Post's: ", posts);
    return fetchPostComments(posts[1].postId);
 })

 .then(comments =>{
    console.log("The comments are Following:", comments);
 })

 .catch(err=>{
    console.log("Some Bugs exists in your Code",err);
 });