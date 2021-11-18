console.log('This is my Note app :)');

// using event listner]
showNotes(); 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById('addText');
    
    let notes = localStorage.getItem('notes');
    
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addText.value = "";

    showNotes();
});

// function to show localstorage element
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html="";
    notesobj.forEach(function(element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
      });

    let noteElm = document.getElementById("note");
 
    if (notesobj.length != 0) {
      noteElm.innerHTML = html;
    } 
    else {
      noteElm.innerHTML = `<h4>Nothing to Show! Please Add a Note.</h4>`;
    }
}

// function for delete a note
function deleteNote(index){
  
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes(); 
}

// for searching feature function 
let search=document.getElementById('searchIt');
 search.addEventListener("input", function(){
     let searchval=search.value.toLowerCase();
    
     let noteCards = document.getElementsByClassName('noteCard')
     Array.from(noteCards).forEach(function(element){
         let cardTxt = element.getElementsByTagName('p')[0].innerText;
        //  console.log(cardTxt)
        if(cardTxt.includes(searchval)){
            element.style.display = "block";
        }
        else{
            
            element.style.display = "none";
        }
     })
 })
