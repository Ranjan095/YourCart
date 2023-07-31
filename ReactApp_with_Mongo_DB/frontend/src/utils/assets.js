export let baseURL = "http://localhost:8080";
export let reqres="https://reqres.in/api/login";

// for Saling price 
export let SP = (mrp, offer) => {
    let res = Math.floor((mrp * (100 - offer)) / 100);
    return res;
  };
  
  //for Size
  
  export let SIZE = (arr) => {
    let bag = "";
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        bag += arr[i];
      } else {
        bag += `${arr[i]},${" "}`;
      }
    }
    return bag;
  };

  