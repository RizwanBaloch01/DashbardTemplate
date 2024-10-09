'use client'; // Mark this component as a client component

import { useState } from 'react';
import { MdRemoveRedEye, MdDelete } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

interface Notification {
  id: number;
  message: string;
  date: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'System update available.', date: 'Oct 1, 2024', read: false },
    { id: 2, message: 'New message from Admin.', date: 'Sep 28, 2024', read: false },
    { id: 3, message: 'Scheduled maintenance on Oct 5.', date: 'Sep 25, 2024', read: true },
  ]);

  const markAsRead = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
        <FaBell className="mr-2" /> Notifications
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-md flex justify-between items-center border ${
                notification.read ? 'bg-gray-100' : 'bg-blue-50'
              }`}
            >
              <div>
                <p className={`text-lg ${notification.read ? 'text-gray-600' : 'text-black'}`}>
                  {notification.message}
                </p>
                <small className="text-gray-500">{notification.date}</small>
              </div>
              <div className="flex gap-2">
                {!notification.read && (
                  <button
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    onClick={() => markAsRead(notification.id)}
                  >
                    <MdRemoveRedEye />
                  </button>
                )}
                <button
                  className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
