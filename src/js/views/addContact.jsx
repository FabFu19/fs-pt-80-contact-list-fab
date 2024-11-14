import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const AddContacts = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex justify-content-end mb-4 mt-3 me-3">
            <Link onClick={() => actions.contactSelect(null)} to={'/contact/newcontact'} className="btn btn-secondary">
                +
            </Link>
        </div>

    )

}