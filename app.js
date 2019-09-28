//add listener for the search
const searchForm = document.querySelector('.search input');
const dict = document.querySelector('.wordsDic');
const wordBank = document.querySelector('.word-list');
const r = document.querySelector('.count-words');
const clearField = document.querySelector('.clear-field');
//console.log(Array.from(wordBank.children));


 //create a filter function
 const filterWords = terms =>{
//get all list and because ot htlm collections i will convert it  array
Array.from(wordBank.children)
.filter((items) => !items.textContent.includes(terms)) // reverse and let the array kept things that is false
.forEach((todo) => todo.classList.add('filtered'));

 Array.from(wordBank.children)
 .filter((items) => items.textContent.includes(terms)) // reverse and let the array kept things that is false
 .forEach((todo) => todo.classList.remove('filtered'));

  }
 
//display the count
const displayCount = words =>{
    Array.from(wordBank.children) 
    .filter(wd => {
        return wd.textContent.includes(words);
    })
    .reduce((acc,curr) => {
        r.textContent = `Search return a total of ${acc++} based on ${words}`;
        return acc;
    },1);
  
}

//add listener to the search file
searchForm.addEventListener('keyup', e =>{
    //prevent default refesh
    e.preventDefault();
    //get the value from the form
    const wordToFind = searchForm.value.trim().toLowerCase();
    //const bank = dict.textContent;

    if(wordToFind.length){
        filterWords(wordToFind);
       displayCount(wordToFind);

    }else{
        removeAll()
       
    }

    
       })
  

const removeAll = () => {
    Array.from(wordBank.children)
    .forEach((items_2) => {
        items_2.classList.remove('filtered');
    })

    r.textContent = "";

}
   
//function to clear field
clearField.addEventListener('click', e => {
   // e.preventDefault();
    //console.log(e.target);
  searchForm.value = "";
  removeAll();
})