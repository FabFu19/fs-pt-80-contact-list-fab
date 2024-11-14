import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardContact } from "../component/CardContact.jsx";
import { AddContacts } from "./addContact.jsx";





export const Contacts = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container pt-3">
                <div className="style-content-contacts">
                    <AddContacts />
                    <h1 className="mb-3 ms-3 title-contact">Contacts</h1>
                    <ul className="list-group">
                        {store.contactList?.contacts?.length > 0 ? store.contactList?.contacts?.map(el => <CardContact contact={el} key={el.id} />)
                            :
                            (<div className="alert alert-secondary d-flex justify-content-center ms-3 me-3">
                                <h6>Contact list empty!</h6></div>)}
                    </ul>
                </div>

            </div>


        </>
    )
}