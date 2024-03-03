// const latestPost = document.getElementById('latest-container')
// // latest post data load 
// const latestPostLoad = () => {
//     const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
//     fetch(url)
//         .then(res => res.json())
//         .then((data) => {
//             const postItem = { data }.data
//             postItem.forEach(data => {
//                 const newPostDiv = document.createElement('div');
//                 newPostDiv.innerHTML = `
//                 <div class="card w-96 bg-base-100 shadow-xl">
//                     <figure class="px-10 pt-10">
//                         <img src="${data.cover_image}" alt="Shoes"
//                             class="rounded-xl" />
//                     </figure>
//                     <div class="card-body">
//                         <p class="text-base mulish text-black opacity-70 flex gap-3 items-center"><i
//                                 class="fa-regular fa-calendar-days"></i> ${data.author?.posted_date ? data.author?.posted_date : 'no date published'}</p>
//                         <h2 class="card-title mulish text-lg font-extrabold text-black opacity-80 mb-2">${data.title}</h2>
//                         <p class="mulish text-base text-black opacity-70 font-normal mb-4">${data.description}</p>

//                         <div id="" class="flex gap-8">
//                             <div>
//                                 <img class="w-12 h-12 rounded-full" src="${data.profile_image}"
//                                     alt="">
//                             </div>
//                             <div class="">
//                                 <h2 class="font-bold text-base pb-2">${data.author?.name}</h2>
//                                 <h4 class="text-sm pb-2">${data.author?.designation ? data.author?.designation : 'Unknown'}</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div> `
//                 latestPost.appendChild(newPostDiv);
//             })
//         })
// }


// latestPostLoad()