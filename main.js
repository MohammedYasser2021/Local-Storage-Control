// Select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");
let theInput_value = document.getElementById("the_input_value")

allSpans.forEach(span => {

  span.addEventListener("click", (e) => {

    if (e.target.classList.contains("check-item")) {

      checkItem();

    }

    if (e.target.classList.contains("add-item")) {

      addItem();

    }

    if (e.target.classList.contains("delete-item")) {

      deleteItem();

    }

    if (e.target.classList.contains("show-items")) {

      showItems();

    }
    if (e.target.classList.contains("delete-all-items")) {

        deleteAllItems();
  
      }

  })

});

function showMessage() {

  results.innerHTML = `Input Can't Be Empty`;

}

function checkItem() {

  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;

    } else {

      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    showMessage();

  }

}

function addItem() {

  if (theInput.value !== '' && theInput_value.value !== '') {

    localStorage.setItem(theInput.value, theInput_value.value);

    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;

    theInput.value = '';
    theInput_value.value = "";

  } else {

    showMessage();

  }

}

function deleteItem() {

  if (theInput.value !== '') {

    if (localStorage.getItem(theInput.value)) {

      localStorage.removeItem(theInput.value);

      results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Deleted`;

      theInput.value = '';

    } else {

      results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;

    }

  } else {

    showMessage();

  }

}

function showItems() {

  if (localStorage.length) {

    console.log(`Found Elements ${localStorage.length}`);

    results.innerHTML = '';

    for (let [key, value] of Object.entries(localStorage)) {

      results.innerHTML += `<span class="keys">The Key is <span class="key">${key}</span> and the Value is <span class="value">${value}</span></span>`;

    }

  } else {

    results.innerHTML = `Local Storage Is Empty`;

  }

}

function deleteAllItems(){
    if(localStorage.length){

        localStorage.clear();

        results.innerHTML = `All Items In Local Storage is Deleted`;

    } else{

        results.innerHTML = `Local Storage Is Empty`;
    }
}