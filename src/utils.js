export function getRandomColor() {
  const randomNumber1 = Math.floor(Math.random() * 255);
  const randomNumber2 = Math.floor(Math.random() * 255);
  const randomNumber3 = Math.floor(Math.random() * 255);
  // console.log(
  //   `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${Math.random().toFixed(
  //     1
  //   )})`
  // );
  const body = document.querySelector("body");

  body.style.backgroundColor = `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${Math.random().toFixed(
    1
  )})`;
  console.log("buttonClick");
}
