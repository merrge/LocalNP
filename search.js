var day =;
var month;
var year = 2021;


while(year != 2023){
 
}


//Searches pdf for keyword 
const input = document.querySelector('.flowpaper_txtSearch'); // Finds searchbar
const search = document.querySelector('.flowpaper_bttnFind'); // Finds Search button1
input.value = "CI$"; // Inputs value into search bar
search.click(); 
 
// Searches for page #'s containing keyword in <b> tags 
const res = []; const contentChildren = document.querySelector(".flowpaper_searchabstracts_content").children;
const childrenArray = Array.from(contentChildren); 
 
childrenArray.forEach((element) => { 
  const bTag = element.querySelector("b"); 
  if(bTag){ const bText = bTag.innerText; 
           const pages = bText.substr(2); // substr to remove "p." before page numbers 
           res.push(pages); 
          }
}); 
const unique = [...new Set(res)]; //Filters duplicate values

//Calculates range of Classified section

function download(){
  let url = '' + unique[i] + '.pdf';
  const link = document.createElement("a");
  link.download = url;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  i++;
}

var i = 0;
while (i < unique.length){
  setTimeout(function timer() {
    download();
  }, 5000);
}