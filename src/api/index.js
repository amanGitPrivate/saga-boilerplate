import axios from 'axios'; 

export const get = (url) => axios.get(url)
.then(function (response) {
// handle success
  return response.data
 })
 .catch(function (error) {
// handle error
 console.log(error);
})

