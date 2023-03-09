let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// Au moment où je clique sur le bouton
addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph);
    paragraph.classList.add('paragraph-styling')
    inputField.value = ''

// Pour changer entre barré / pas barré
    let clickTrack = 1;
    paragraph.addEventListener('click',function(){
        switch(clickTrack){
            case 1 : paragraph.style.textDecoration ='line-through'
            clickTrack += 1
            break;
            case 2: paragraph.style.textDecoration ='none'
            clickTrack -= 1
            break;
        }
    })   
    paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph)
    })
})
