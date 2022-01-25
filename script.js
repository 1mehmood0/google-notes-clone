const addButton=document.getElementById("add");


const addNewNote=(text='')=>{  //function to add new text box
    const note=document.createElement('div');//creating new div element
    note.classList.add('txt-container-opt');//adding next class in div element

    const htmlData=`<div id="operation"><button class="edit">Edit</button><button class="del">Delete</button>
                    </div>
                    <div id="main" class="main ${text?"":"hidden"}"></div>
    <textarea class="${text?"hidden":""}" id="txt-area"></textarea>`;    //Storing HTML code of textarea in variable

    note.insertAdjacentHTML('afterbegin',htmlData);//inserting the HTML code in new class in div element

    //getting the Refrences
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');
    const edit=note.querySelector('.edit');
    const remove=note.querySelector('.del');

    //deleting node
    remove.addEventListener('click',()=>{
        note.remove();
    })

    //toggle using edit button

    textArea.value=text;
    mainDiv.innerHTML=text;
     
    edit.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    //CHANGING THE EVENT ON CLICKING OUTSIDE
    textArea.addEventListener('change',(event)=>{
         const value=event.target.value;
         console.log(value);
         mainDiv.innerHTML=value;
        
     })
     document.body.appendChild(note);//inserting the note element in body of HTML code


}
addButton.addEventListener('click',()=>addNewNote());