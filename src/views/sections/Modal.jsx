import { useState } from 'react'
// API CALLS
import { sendComplaint, sendEmail } from '../../models/models'
// TOOLS
import $ from 'jquery'
// ALERT
import Swal from 'sweetalert2'
// ICONS
import { BsChatSquareTextFill } from 'react-icons/bs'

const Modal = () => {

    const [showLoad, setShowLoad] = useState(true)
    const [showBttn, setShowBttn] = useState(false)
    const [names, setNames] = useState('')
    const [surnames, setSurnames] = useState('')
    const [eventZone, setEventZone] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [idPlatform, setIdPlatform] = useState('')
    const [age, setAge] = useState('')

    const handleOnChange = e => {
        $("input").removeClass("border-danger");
        $("select").removeClass("border-danger");
        switch (e.target.name) {
            case "names":
                setNames(e.target.value)
                break;
            case "surnames":
                setSurnames(e.target.value)
                break;
            case "eventZone":
                setEventZone(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "phone":
                setPhone(e.target.value)
                break;
            case "idPlatform":
                setIdPlatform(e.target.value)
                break;
            case "age":
                setAge(e.target.value)
                break;
        }
    }

    const message = (icon, title) => {
        Swal.fire({
            position: 'top-end',
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false
        })
        handleButton()
    }

    const closeModal = () => {
        setNames('')
        setSurnames('')
        setEventZone('')
        setEmail('')
        setPhone('')
        setIdPlatform('')
        setAge('')
        $("#modalHelp").hide()
    }

    const handleButton = () => {
        setShowBttn(false);
        setShowLoad(true);
    }

    const modelResponse = () => {
        const matter = 'Confirmación de denuncia'
        Swal.fire({
            title: 'Atención',
            text: "Tus datos serán enviados, tus datos estan protegidos.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                sendComplaint(names, surnames, eventZone, email, phone, idPlatform, age).then(resp => {
                    if (resp.code === 1) {
                        message("success", `${resp.message}`)
                        sendEmail(email, matter).then(resp => {
                            if (resp.status === 1) {
                                message("success", `${resp.message}`)
                                handleButton()
                                closeModal()
                            } else if (resp.status === 0) {
                                message("error", `${resp.message}`)
                                handleButton()
                            }
                        })
                    } else if (resp.code === 0) {
                        message("error", `${resp.message}`)
                        handleButton()
                    }
                })
            } else {
                handleButton()
            }
        })
    }

    const handleOnSubmit = () => {
        setShowLoad(false)
        setShowBttn(true)
        if (names.trim().length === 0) {
            $(`#names`).addClass("border-danger")
            message('error', 'El campo Nombre(s) es obligatorio.')
            return;
        }
        if (surnames.trim().length === 0) {
            $(`#surnames`).addClass("border-danger")
            message('error', 'El campo Apellido(s) es obligatorio.')
            return;
        }
        if (eventZone.trim().length === 0) {
            $(`#eventZone`).addClass("border-danger")
            message('error', 'El campo Descripción es obligatorio.')
            return;
        }
        if (email.trim().length === 0) {
            $(`#email`).addClass("border-danger")
            message('error', 'El campo Email es obligatorio.')
            return;
        }
        if (phone.trim().length === 0) {
            $(`#phone`).addClass("border-danger")
            message('error', 'El campo Teléfono es obligatorio.')
            return;
        }
        if (idPlatform.trim().length === 0) {
            $(`#idPlatform`).addClass("border-danger")
            message('error', 'El campo Plataforma es obligatorio.')
            return;
        }
        if (age.trim().length === 0) {
            $(`#age`).addClass("border-danger")
            message('error', 'El campo Edad es obligatorio.')
            return;
        }
        modelResponse()
    }

    return (
        <div
            id="modalHelp"
            className="modal"
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header row">
                        <div className="col-11 mx-auto text-center">
                            <h5 className="modal-title"><BsChatSquareTextFill /> Denuncia</h5>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn-close" onClick={() => { $("#modalHelp").hide() }} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-11 mx-auto">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <h6 className="text-danger">Los datos con * son obligatorios:</h6>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <form className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="names"
                                                name="names"
                                                value={names}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="floatingInputValue">Nombre(s)*:</label>
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="surnames"
                                                name="surnames"
                                                value={surnames}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="floatingInputValue">Apellido(s)*:</label>
                                        </form>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <form className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="age"
                                                name="age"
                                                value={age}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="floatingInputValue">Edad*:</label>
                                        </form>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <form className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="floatingInputValue">Email*:</label>
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="floatingInputValue">Teléfono*:</label>
                                        </form>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <form className="form-floating">
                                            <select
                                                className="form-select"
                                                id='idPlatform'
                                                name='idPlatform'
                                                value={idPlatform}
                                                onChange={handleOnChange}
                                                aria-label="Default select example">
                                                <option value="">Selecciona</option>
                                                <option value="1">Facebook</option>
                                                <option value="2">TikTok</option>
                                                <option value="3">Whatsapp</option>
                                                <option value="4">Messenger</option>
                                                <option value="5">Twitter</option>
                                                <option value="6">SnapChat</option>
                                            </select>
                                            <label htmlFor="floatingInputValue">Plataforma*:</label>
                                        </form>
                                    </div>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="eventZone"
                                            name="eventZone"
                                            style={{ "height": "100px" }}
                                            value={eventZone}
                                            onChange={handleOnChange}>
                                        </textarea>
                                        <label htmlFor="floatingTextarea2">Descripción corta del suceso*:</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0 d-flex justify-content-center">
                        <button
                            type="button"
                            hidden={showBttn}
                            className="btn btn-primary"
                            onClick={handleOnSubmit}>
                            Guardar
                        </button>
                        <button
                            className="btn btn-primary"
                            hidden={showLoad}
                            type="button"
                            disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Cargando...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal