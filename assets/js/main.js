/*for ( counter=0; counter<=100; counter++ ) {
  document.getElementById("fbd").innerHTML = `
      <div class="square row jc-center ai-center">
        <div>${counter}</div>
      </div>
    `;
}*/

// ------------------------------------------------------

/*function fizzBuzzDom() {
  let text = "";
  let counter = 1;

  while (counter <= 100){
    counter += 1;
  }

  if (counter % 15 == 0) {
    text += "FizzBuzz";
  } else if (counter % 3 == 0) {
    text += "Fizz";
  } else if (counter % 5 == 0) {
    text += "Buzz";
  } else {
    text += counter;
  }

  document.getElementById("fbd").innerHTML = `
      <div class="square row jc-center ai-center">
        <div>${text}</div>
      </div>
    `;
}*/

// --------------------------------------------------------------

/*let counter = 1;

while (counter <= 100){
  document.getElementById("fbd").innerHTML = `
    <div class="square row jc-center ai-center">
      <div>${counter}</div>
    </div>
  `;
  counter += 1;
}*/

// ---------------------------------------------------------------------

/*let text = "";

for ( counter=0; counter<=100; counter++ ) {
  
  if (counter % 15 == 0) {
    text += "FizzBuzz";
  } else if (counter % 3 == 0) {
    text += "Fizz";
  } else if (counter % 5 == 0) {
    text += "Buzz";
  } else {
    text += counter;
  }

  document.getElementById("fbd").innerHTML = `
    <div class="row jc-center ai-center">
      <div id="text" class="p-3">${text}</div>
    </div>
  `;
}

if (text == "Buzz"){
  document.getElementById("text").innerHTML = `style="background-color: yellow;"`
}*/