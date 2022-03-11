for ( counter=1; counter<=100; counter++ ) {
  let text = "";

  if (counter % 15 == 0) {
    text += "FizzBuzz";
  } else if (counter % 3 == 0) {
    text += "Fizz";
  } else if (counter % 5 == 0) {
    text += "Buzz";
  } else {
    text += counter;
  }

  document.getElementById("fbd").innerHTML += `
      <div class="col-2 p-3 row jc-center ai-center">
        <div">${text}</div>
      </div>
    `;
}