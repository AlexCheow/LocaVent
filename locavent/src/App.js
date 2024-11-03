// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import MenuPage from './MenuPage';
import NotificationsPage from './NotificationsPage';
import NotificationDetails from './NotificationDetails';
import EventDetailsPage from './EventDetailsPage';
import SavedEventsPage from './SavedEventsPage';
import CalendarPage from './CalendarPage';
import MyTicketsPage from './MyTicketsPage';
import PaymentMethod from './PaymentMethod';
import CardPayment from './CardPayment';
import Authentication from './Authentication';
import Tickets from './Tickets';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="menu" element={<MenuPage />} />

        <Route path="notifications" element={<NotificationsPage />} />

        <Route path="event/:id" element={<EventDetailsPage />} />

        <Route path="saved-events" element={<SavedEventsPage />} />

        <Route path="calendar" element={<CalendarPage />} />

        <Route path="my-tickets" element={<MyTicketsPage />} />

        <Route path="/NotificationDetails" element={<NotificationDetails />} />

        <Route path="payment-method" element={<PaymentMethod />} />

        <Route path="card-payment" element={<CardPayment />} />

        <Route path="authentication" element={<Authentication />} />
        
        <Route path="tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
