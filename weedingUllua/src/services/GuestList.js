import axios from 'axios'


export const getGuestList = async(setGuests=()=>{}) =>{
    console.log("get guest list");
    
    const response = await axios(`${'https://api.sheetbest.com/sheets/11a85dd3-da17-4b8e-983e-7db67b88538a'}?_raw=1`);
    if (response.status === 200) {
        setGuests(response.data)
        return 
    }
    
}


getGuestList()