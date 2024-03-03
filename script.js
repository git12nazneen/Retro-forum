const postContainer = document.getElementById('allPosts')

const fetchCatagories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    console.log(data.posts)
    const allposts = data.posts;
    // console.log(allposts)
}
const displayPost = (allpost) =>{
    allpost.forEach(post =>{
        // console.log(post)
        const div = document.createElement('posts');
        div.innerHTML = `
        <div class="hero p-2 rounded-lg border bg-base-200 my-5">
                    <div class="hero-content flex-col lg:flex-row">
                        <button class="btn btn-ghost ">
                            <div class="indicator">
                                <img src="./images//images.jpg" class="max-w-sm rounded-lg " />
                              <span class="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                          </button>
                    <div>
                        <div>
                            <div class="flex flex-col lg:flex-row">
                                <p class="lg:pr-5 font-bold">${post.category}</p>
                                <div>
                                <h6 class="text-gray-600">Author: ${post.author.name}</h6>
                            </div>
                               </div>
                                <h1 class="py-1 text-2xl font-bold">${post.title}</h1>
                                <p class="py-3 text-gray-600">${post.description} </p>
                                <div class="flex flex-row lg:flex-row">    
                                    <h6 class="text-gray-600 pr-4"><i class="fa-regular fa-message"></i> ${post.comment_count}</h6>
                                    <h6 class="text-gray-600 pr-4"><i class="fa-thin fa-eye"></i>${post.view_count}</h6><h6 class="text-gray-600 pr-4"><i class="fa-regular fa-clock"></i> <span>${post.posted_time}</span>min</h6>
                                    <div class="bg-green-500 pt-1 pb-1 pl-2 pr-2 ml-56 rounded-full"><i class="fa-solid fa-message"></i></div>
                                </div>
                                
                           </div>
                      </div>
                    </div>
                  </div>
        `
        postContainer.appendChild(div)
    })
}

// catagory
const fetchDataCatagories = async (searchtext='music') => {
    postContainer.textContent = '';
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchtext}`)
    const catagory = await res.json();
    console.log(catagory);
    displayPost(catagory.posts); // Display the fetched posts
}
// handle search button
const handleSearch = () =>{
    console.log('click');
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    console.log(searchtext);
    fetchDataCatagories(searchtext);
}
// handle search btn
const handleShowAll = () =>{
    handleSearch(true); 
    console.log('search handle');
}
fetchDataCatagories()

fetchCatagories()
