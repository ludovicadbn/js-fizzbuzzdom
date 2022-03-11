/*for ( counter=0; counter<=100; counter++ ) {
  document.getElementById("fbd").innerHTML = `
      <div class="square row jc-center ai-center">
        <div>${counter}</div>
      </div>
    `;

  console.log(counter);
}*/

// STAMPA SOLO IL 100 PER0' NELLA CONSOLE CI SONO TUTTI

// ------------------------------------------------------

/*function fizzBuzzDom() {
  let text = "";
  let counter = 1;

  while (counter <= 99){
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

  console.log(text);
}

fizzBuzzDom();*/

// STAMPA SOLO L'ULTIMO BUZZ (100) MA IN CONSOLE NON APPAIONO GLI ALTRI NUMERI

// --------------------------------------------------------------

/*let counter = 0;

while (counter <= 100){
  document.getElementById("fbd").innerHTML = `
    <div class="square row jc-center ai-center">
      <div>${counter}</div>
    </div>
  `;
  counter += 1;

  console.log(counter);
}*/

// STAMPA SOLO IL 100 MA IN CONSOLE CI SONO TUTTI 

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
}*/