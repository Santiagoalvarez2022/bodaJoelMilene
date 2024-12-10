import axios from "axios";

export const getGiftList = async(setGiftList) =>{
    try {
        const response = await axios(`https://api.sheetbest.com/sheets/d7a3a080-6300-4f91-8a4e-81dd15528178`);

        if (response.status === 200) {
            setGiftList(response.data)
            return 
        }
    } catch (error) {
        console.log('Error al hacer peticion de la lista de la lista de regalos ', {error:error.message});
            return error
    }
}