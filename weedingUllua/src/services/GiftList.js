import axios from "axios";

export const getGiftList = async() =>{
    
    try {
        const response = await axios(`https://api.sheetbest.com/sheets/e91562b4-5679-4fce-ab0a-b8a5a98d995e`);
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
        const response = await axios(`https://api.sheetbest.com/sheets/e91562b4-5679-4fce-ab0a-b8a5a98d995e/id/${id}`);
        
        if (response.data[0].invitado === 'no') {
            //actualizo y envio mensaje de exito
            const updateGift = await axios.patch(`https://api.sheetbest.com/sheets/e91562b4-5679-4fce-ab0a-b8a5a98d995e/id/${id}`,{'invitado':name})

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
