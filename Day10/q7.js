// const URL = 'https://Chagwalkhoukhwar.com';

// fetch(URL)
//     .then(respons=>{
//         if(!respons.ok){
//             throw new Error("Network was Not OK");
//         }
//         return respons.json();
//     })
//     .then((data)=>{
//         console.log("Your Data:", data);
//     })
//     .catch((error)=>{
//         console.error("Error Occured", error.message);
//         console.log("Good we have atleast showed the error message");
//     })

async function fetchData() {
    const invalidURL = 'https://invalid-url.example.com/data';
  
    try {
      const response = await fetch(invalidURL);
      
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
  
      const data = await response.json();
      console.log('Data received:', data);
  
    } catch (error) {
      console.error('Error:', error.message);
      console.log('Good message: Something went wrong, but we handled it gracefully!');
    }
  }
  
  fetchData();
  