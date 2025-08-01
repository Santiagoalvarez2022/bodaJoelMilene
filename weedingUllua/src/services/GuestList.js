import axios from 'axios'


export const getGuestList = async() =>{
    try {
  
    const response = await axios(`${'https://api.sheetbest.com/sheets/226a3a03-55a9-4924-8ac2-90f04146d401'}?_raw=1`);
    //filtro por los que ya aceptaron 
    
    response.data = response.data.filter(guest => guest.confirmed === "no" )   

    return response;
            
    } catch (error) {
            console.log('Error al hacer peticion de la lista de invitados', {error:error.message});
            return error
    }
    
}


export const confirmGuest = async(id) =>{
   //hago el cambio porque la api se pasa por uno
   id = id-1

    try {
        //evaluo si ya la acepto?  

        //modifico lista
        const data = await axios.patch(`https://api.sheetbest.com/sheets/226a3a03-55a9-4924-8ac2-90f04146d401/${id}`,{confirmed:"confirmado"})
        return data

    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
      
    }
}

getGuestList()
