import axios from "axios"

export const sendComplaint = async (names, surnames, eventZone, email, phone, idPlatform, age) => {
    try {
        let data = new FormData()
        data.append('names', names)
        data.append('surnames', surnames)
        data.append('eventZone', eventZone)
        data.append('email', email)
        data.append('phone', phone)
        data.append('idPlatform', idPlatform)
        data.append('age', age)
        let result = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/formulario`,
            data: data,
        })
        if (result.data) {
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const sendEmail = async (emailDestiny, matter, names, surnames) => {
    try {
        let data = new FormData()
        data.append('destinatario', emailDestiny)
        data.append('asunto', matter)
        data.append('names', names)
        data.append('surnames', surnames)
        let result = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/enviar-correo`,
            data: data,
        })
        if (result.data) {
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const sendConversation = async (file) => {
    try {
        let data = new FormData()
        data.append('file', file)
        let result = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/upload`,
            data: data,
        })
        if (result.data) {
            return result.data
        }
    } catch (error) {
        console.log(error)
    }
}
