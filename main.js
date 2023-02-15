//Sets up download link
const dllink = window.location.href;
var splitlink = dllink.split('/');
const daymonth = splitlink[6];
const year = splitlink[5];

//Searches pdf for keyword 
const input = document.querySelector('.flowpaper_txtSearch'); // Finds searchbar
const search = document.querySelector('.flowpaper_bttnFind'); // Finds Search button1
input.value = "CI$"; // Inputs value into search bar
search.click(); 
 
const res = []; const contentChildren = document.querySelector(".flowpaper_searchabstracts_content").children;
const childrenArray = Array.from(contentChildren); 
 
childrenArray.forEach((element) => { 
  const bTag = element.querySelector("b"); 
  if(bTag){ const bText = bTag.innerText; 
           const pages = bText.substr(2);
           res.push(pages); 
          }
}); 
const unique = [...new Set(res)]; //Filters duplicate values
const min = Math.min(...unique);
const max = Math.max(...unique);
var z= 0;
for (let x = min; x <= max; x++) {
  unique[z] = x;
z++;
}
 
function download(){
    let url = 'https://www.caymancompass.com/updates/eversion/'+ year + '/' + daymonth + '/docs/'+ year + daymonth + '_' + unique[i] + '.pdf';
    const link = document.createElement("a");
    link.download = "Classified_" + unique[i] + ".pdf";
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }
 
 
var i = 0;
 while (i < unique.length) {
	download();
	i++;
}