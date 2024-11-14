
const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			URL: 'https://playground.4geeks.com/contact/',
			contactList: null,
			selected: null
			
		},
		actions: {
			contactSelect: (contact) => setStore({selected: contact}),
			createUserAgenda: async () => {
				try {
					const res = await fetch(getStore().URL + 'agendas/Fabian', {
						method: 'POST'
					});
					if(!res.ok) throw new Error('Ups something went wrong creating agenda');
					getActions().getInfAgenda()
					return true
				} catch (error) {
					console.error(error);
				}
			},
			getInfAgenda: async () => {
				try {
					const res = await fetch(getStore().URL + 'agendas/Fabian');
					if(res.status == 404) return getActions().createUserAgenda()
					if(!res.ok) throw new Error('Ups something went wrong retrieving the contact information');
					const data = await res.json();
					setStore({contactList: data})
					return true
				} catch (error) {
					console.error(error);
				}
			},
			addContactsAgenda: async (contact) => {
				try {
					if (!contact || !contact.name || !contact.email || !contact.phone || !contact.address) {
						alert('You must fill in all fields!');
						return;
					}
					const res = await fetch(getStore().URL + 'agendas/Fabian/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if(!res.ok) throw new Error('Ups something went wrong creating contact');
					return getActions().getInfAgenda()
				} catch (error) {
					console.error(error);
				}
			},
			updateContacts: async (id, contact) => {
				try {
					const res = await fetch(getStore().URL + `agendas/Fabian/contacts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if(!res.ok) throw new Error('Ups something went wrong updating agenda');
					return getActions().getInfAgenda()
				} catch (error) {
					console.error(error);
				}
			},
			deleteContacts: async (id) => {
				try {
					const res = await fetch(getStore().URL + `agendas/Fabian/contacts/${id}`, {
						method: 'DELETE'
					})
					if(!res.ok) throw new Error('Ups something went wrong deleting agenda');
					return getActions().getInfAgenda()
				} catch (error) {
					console.error(error);
				}
			},
		}
	};
};

export default getState;
