import ModeOption from "../types/ModeOption";

const apiUrl = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

function getModes():Promise<ModeOption[]> {
  return fetch(apiUrl)
    .then(response => {
      if(!response.ok) {
        throw new Error('Cannot fetch modes')
      }

      return response.json(); 
    })
}

export default getModes;