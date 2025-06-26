import axios from "axios";

export const getGiftList = async() =>{
    
    try {
        const response = await axios(`https://api.sheetbest.com/sheets/56ab91ba-b2b8-4958-8804-a1aea152c123`);
        response.data = response.data.filter(e=> e.invitado === 'no')
        return response
    

    } catch (error) {
        console.log('Error al hacer peticion de la lista de la lista de regalos ', {error:error.message});
       
        throw Error({error, error: "Error en la peticion de la lista de regalos"})
    }
}

export const updateItem = async(id, name) =>{
    
    try {
        //valido que no haylla sido elegido aun, si lo fue envio un mensaje al modal
        const response = await axios(`https://api.sheetbest.com/sheets/56ab91ba-b2b8-4958-8804-a1aea152c123/id/${id}`);
        
        if (response.data[0].invitado === 'no') {
            //actualizo y envio mensaje de exito
            const updateGift = await axios.patch(`https://api.sheetbest.com/sheets/56ab91ba-b2b8-4958-8804-a1aea152c123/id/${id}`,{'invitado':name})

            if (updateGift.status===200){
                return true 
            }
            throw Error('Error al actualizar el regalo')
        } else {
            return false 
        }

    } catch (error) {
        throw Error(error.message)
    }
}
