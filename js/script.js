// Add event handler in button to change an text
document.getElementById('btn-change').addEventListener('click',function(){
    const headingText = document.getElementById('heading-text');
    headingText.innerText = 'I am Penguin';
});

//Extra :
document.getElementById('about-developer').addEventListener('click',function(){
    // console.log("Hey What's up guys. I am Sibbir");
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('text-center', 'bg-indigo-400', 'text-lg', 'text-white', 'mx-12',);
    newParagraph.innerText = "তুই কি আমার কথা জিজ্ঞাইতাছোস?🐸🥴";
    const developerPlace = document.getElementById('developer-place');
    developerPlace.appendChild(newParagraph);
})
