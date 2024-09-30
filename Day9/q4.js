// const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

// async function fetchData() {
//   let result = await new Promise((res, rej) => {
//     res(
//       fetch(apiURL)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network response was not OK");
//           }
//           return response.json(); //Parse the response body as JSON
//         })
//         .then((data) => {
//           console.log("response Data: ", data);
//         })
//         .catch((error) => {
//           console.log("Error:", error);
//         })
//     );
//     console.log(result);
//   });
// }

// fetchData();   // Yor code have some issues here is the simlified code 


const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json(); // Parse the response body as JSON
    console.log("Response Data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
