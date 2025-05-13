'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase/config';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ChatWindow from './components/chat/ChatWindow';
import ContactList from './components/contacts/ContactList';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        {showRegister ? (
          <div>
            <RegisterForm />
            <p className="text-center mt-4">
              Déjà un compte ?{' '}
              <button
                onClick={() => setShowRegister(false)}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Se connecter
              </button>
            </p>
          </div>
        ) : (
          <div>
            <LoginForm />
            <p className="text-center mt-4">
              Pas encore de compte ?{' '}
              <button
                onClick={() => setShowRegister(true)}
                className="text-indigo-600 hover:text-indigo-500"
              >
                S&apos;inscrire
              </button>
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <ContactList />
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
