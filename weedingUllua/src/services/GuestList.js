import axios from 'axios'


export const getGuestList = async(setGuests=()=>{}) =>{
    console.log("get guest list");
    try {
  
    const response = await axios(`${'https://api.sheetbest.com/sheets/11a85dd3-da17-4b8e-983e-7db67b88538a'}?_raw=1`);
    if (response.status === 200) {
        //evaluar solo enviar los que cntiene el el valor 'no' en 'confirmed'
        setGuests(response.data)
        return 
    }

            
    } catch (error) {
            console.log('Error al hacer peticion de la lista de invitados ', {error:error.message});
            return error
    }
    
}
export const confirmGuest = async(id) =>{
   console.log('id recibido   ', id);
   //hago el cambio porque la api se pasa por uno
   id = id-1

    try {
        //evaluo si ya la acepto?  

        //modifico lista
        const data = await axios.patch(`https://api.sheetbest.com/sheets/11a85dd3-da17-4b8e-983e-7db67b88538a/${id}`,{confirmed:"confirmado"})
        return data

    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
      
    }
}

getGuestList()