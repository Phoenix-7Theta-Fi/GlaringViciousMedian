import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UpcomingAppointments from '../components/appointments/UpcomingAppointments';
import PastAppointments from '../components/appointments/PastAppointments';
import AppointmentManagement from '../components/appointments/AppointmentManagement';

const AppointmentsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <UpcomingAppointments />
      <PastAppointments />
      <AppointmentManagement />
      <Footer />
    </div>
  );
};

export default AppointmentsPage;
