const postContainer = document.getElementById('allPosts')
const latestContainer = document.getElementById('card-container');


const fetchCatagories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    // console.log(data.posts)
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
                                <img src="${post.image}" class="w-14 rounded-lg " />
                                <span class="badge indicator-item" style="background-color: ${post.isActive ? 'green' : 'red'};"></span>
          
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
                                    <h6 class="text-gray-600 pr-4"><i class="fa-thin fa-eye"></i>${post.view_count}</h6>
                                    <h6 class="text-gray-600 pr-4"><i class="fa-regular fa-clock"></i> <span>${post.posted_time}</span>min</h6>
                                    <div onClick="mailClick('${post.title.replace(/'/g, '@')}', '${post?.view_count}')" class=" bg-green-500 pt-1 pb-1 pl-2 pr-2 ml-56 rounded-full"><i class="fa-solid fa-message"></i></div>  
                                </div> 
                           </div>
                      </div>
                    </div>
                  </div>
        `
        postContainer.appendChild(div)
    })
    setTimeout(() => {
        // Hide loading spinner after data is fetched
        loadingSpinner(false);
    }, 2000);
}
// catagory
const fetchDataCatagories = async (searchtext='coding') => {
    postContainer.textContent = '';
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchtext}`)
    const catagory = await res.json();
    console.log(catagory);
    displayPost(catagory.posts); // Display the fetched posts
}
// handle search button
const handleSearch = () =>{
    loadingSpinner(true)
    console.log('click');
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    console.log(searchtext);
    fetchDataCatagories(searchtext);
}
const loadingSpinner = (isLoading) =>{
    const spinnerload = document.getElementById('spinner-loading');
    if(isLoading){
        spinnerload.classList.remove('hidden')
        setTimeout(() => {
            spinnerload.classList.add('hidden');
        }, 2000);
    }
    else{
        spinnerload.classList.add('hidden')
    }
}
// handle search btn
const handleShowAll = () =>{
    handleSearch(true); 
    console.log('search handle');
}
// button click and append part
const mailClick = (title , visible) =>{
    console.log(visible)
    const newElement = document.createElement('div');
    newElement.className ='flex flex-wrap space-y-2 bg-white rounded-2xl py-3 px-3 mb-2'
    newElement.innerHTML=`
    <div id="child-heading" class="flex-1">${title}</div>
    <div class=""> <i class="fa-solid fa-eye"></i><span id="visibility" >${visible}</span></div>
    `
    // Append the new element to a parent element
    const parentElement = document.getElementById('parent-element');
    parentElement.appendChild(newElement);

// mark count
const markReadSpan = document.getElementById('markRead');
const currentRead = markReadSpan.innerText;
const currentMark = parseInt(currentRead);
const currentVisible = currentMark + 1;
markReadSpan.innerText = currentVisible;
}


const latestPost = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    // console.log(data)
    const latest = data;
    displayLatestPost(latest)
}

const displayLatestPost =(latest) =>{
    console.log(latest);

    latest.forEach(blogs =>{
        console.log(blogs)
       
        const latestCard = document.createElement('div')
        
        latestCard.innerHTML = `
        <div class=" grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="card card-compact w-96 bg-base-200 shadow-xl ">
             
        <figure><img class="p-5" src="${blogs.cover_image}" alt="Shoes" /></figure>
        <div class="card-body">
          <div class="">
            <h1><span class="mr-2"><i class="fa-solid fa-calendar-days"></i></span>${blogs.author?.posted_date ? blogs.author?.posted_date : 'no date published'}</h1>
          </div>
          <h2 class="card-title font-bold">${blogs.title}</h2>
          <p>${blogs.description}</p>
          <div class="flex gap-2">
           <div class=" w-10">
            <img class="rounded-full" src="${blogs.profile_image}" alt="">
           </div>
           <div>
            <h1>${blogs.author.name}</h1>
            <h2>${blogs.author?.designation ? blogs.author?.designation : 'Unknown'}</h2>
          </div>
          </div>
        </div>
      </div>
  </div>
        `;
        latestContainer.appendChild(latestCard)
    })
}


latestPost()
fetchDataCatagories()

fetchCatagories()

// ${data.author?.designation ? data.author?.designation : 'Unknown'}