import axios from "axios";

export const getGiftList = async() =>{
    console.log('getList');
    
    try {
        const response = await axios(`https://api.sheetbest.com/sheets/d7a3a080-6300-4f91-8a4e-81dd15528178`);
        response.data.filter(e=> e.invitado !== 'no')
        return response
    

    } catch (error) {
        console.log('Error al hacer peticion de la lista de la lista de regalos ', {error:error.message});
       
        throw Error({error, error: "Error en la peticion de la lista de regalos"})
    }
}