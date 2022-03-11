for ( counter=1; counter<=100; counter++ ) {
  let text = "";

  if (counter % 15 == 0) {
    text += "FizzBuzz";
    document.getElementById("fbd").innerHTML += `
      <div class="col">
        <div id="red" class="row jc-center ai-center square">${text}</div>
      </div>
    `;
  } else if (counter % 3 == 0) {
    text += "Fizz";
    document.getElementById("fbd").innerHTML += `
      <div class="col">
        <div id="green" class="row jc-center ai-center square">${text}</div>
      </div>
    `;
  } else if (counter % 5 == 0) {
    text += "Buzz";
    document.getElementById("fbd").innerHTML += `
      <div class="col">
        <div id="yellow" class="row jc-center ai-center square">${text}</div>
      </div>
    `;
  } else {
    text += counter;
    document.getElementById("fbd").innerHTML += `
      <div class="col">
        <div id="blue" class="row jc-center ai-center square">${text}</div>
      </div>
    `;
  }
}