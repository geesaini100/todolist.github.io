//list of all of the variables / consts
const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('#input');
const hideBtn = document.querySelector('#hide-btn');
const checkBox = document.querySelector(".done");
let list = document.querySelector('.list');



// Script to add items into list
addBtn.addEventListener('click', () => {
    
    if (input.value===''){
        alert('List Input is empty - please add item!')
    } else {
        list.insertAdjacentHTML('beforeend', `<li><input type="checkbox">${input.value}</li>`);
        input.value = '';
    }
});




//enter button to add a item
input.addEventListener('keyup', e => {
    e.preventDefault();
    if (e.keyCode===13){
        addBtn.click();
    };
});

// hiding the list 
hideBtn.addEventListener('click', () => {
    let listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none'){
        listContainer.removeAttribute('style');
        hideBtn.textContent = 'Hide List';
    } else {
        listContainer.style.display = 'none';
        hideBtn.textContent = 'Show List';
    };
});



// crossout function

// let item = document.querySelector('#item');

// checkBox.addEventListener('click', () => {

//     if (item.style.textDecoration === "line-through") {
//         item.style.textDecoration = 'none';
//     } else {
//         item.style.textDecoration = 'line-through';
//     }
// })


// attempt to loop through list so that we can strikethrough the text once the checkbox was clicked
// for (let i =0; i <checkBox.length; i++){
//     checkBox[i].addEventListener('click', () => {
//         if (item.style.textDecoration == "line-through") {
//             item.style.textDecoration = 'none';
//         } else {
//             item.style.textDecoration = 'line-through';
//         }
//     })
// }



