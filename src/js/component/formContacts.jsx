import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();


    const [formDataContact, setFormDataContact] = useState({
        name: store.selected?.name || '',
        address: store.selected?.address || '',
        email: store.selected?.email || '',
        phone: store.selected?.phone || ''
    })
    const handleChange = e => setFormDataContact({ ...formDataContact, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault();
        {/*if(formDataContact.name.trim() == '' || 
            formDataContact.address.trim() == '' ||
            formDataContact.email.trim() == '' || 
            formDataContact.phone.trim() == ''){
            alert('You must fill in all fields!');
            return;
        }*/}
        store.selected ? actions.updateContacts(id, formDataContact) : actions.addContactsAgenda(formDataContact)
        navigate('/');
    }

    return (
        <>
            <h1 className="mt-3 ms-3 title-contact">Add New Contact</h1>
            <form onSubmit={handleSubmit} className="form-control border-0">
                <input type="text" value={formDataContact.name} name="name" onChange={handleChange} placeholder="Full Name" className="form-control mb-3" />
                <input type="text" value={formDataContact.address} name="address" onChange={handleChange} placeholder="Address" className="form-control mb-3" />
                <input type="email" value={formDataContact.email} name="email" onChange={handleChange} placeholder="Email" className="form-control mb-3" />
                <input type="text" value={formDataContact.phone} name="phone" onChange={handleChange} placeholder="Phone number" className="form-control mb-3" />

                {store.selected ? <input type="submit" value={'Edit'} className="btn btn-secondary w-100" /> : <input type="submit" value={'Create'} className="btn btn-secondary w-100" />}
            </form>
            <Link to={'/'} className="btn btn-secondary btn_changes mb-3">
                <span className="fa-solid fa-arrow-left link-light"></span>
            </Link>

        </>

    )
}