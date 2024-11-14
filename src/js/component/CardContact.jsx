import React from "react";
import { useContext } from 'react'
import { Context } from '../store/appContext.js'
import { Link } from "react-router-dom";


export const CardContact = (props) => {
    const { id, name, address, email, phone } = props.contact;
    const { store, actions } = useContext(Context);
    return (
        <>

            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-3 d-flex justify-content-center">
                        <figure>
                            <img src="https://picsum.photos/200" className="rounded-circle img-fluid contact-info_image" alt={name} />
                        </figure>
                    </div>
                    <div className="col-sm-12 col-md-6 contact-info_responsive">
                        <h5 className="contact-info_title">{name}</h5>
                        <div className="d-flex contact-info">
                            <span className="fa-solid fa-location-dot"></span>
                            <p>{address}</p>

                        </div>
                        <div className="d-flex contact-info">
                            <span className="fa-solid fa-envelope"></span>
                            <p>{email}</p>
                        </div>
                        <div className="d-flex contact-info">
                            <span className="fa-solid fa-phone"></span>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 button-actions-content d-flex justify-content-end">
                        <Link onClick={() => actions.contactSelect(props.contact)} to={`/contact/${id}`}>
                            <span className="fa-solid fa-pen edit-contact link-dark"></span>
                        </Link>
                        <Link onClick={() => actions.deleteContacts(id)}>
                            <span className="fa-solid fa-trash del-contact link-dark"></span>
                        </Link>
                    </div>
                </div>
            </li>

        </>
    )
}