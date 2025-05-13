import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../../firebase/config';

interface Contact {
  id: string;
  displayName: string;
  email: string;
  status: 'online' | 'offline';
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'users'),
      where('email', '!=', auth.currentUser.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newContacts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Contact[];
      setContacts(newContacts);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-64 bg-white border-r h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Contacts</h2>
      </div>
      <div className="divide-y">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 hover:bg-gray-50 cursor-pointer flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-medium">
                  {contact.displayName[0].toUpperCase()}
                </span>
              </div>
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">{contact.displayName}</p>
              <p className="text-sm text-gray-500">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 