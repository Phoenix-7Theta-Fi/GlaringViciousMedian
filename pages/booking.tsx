import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SelectConsultationType from '../components/booking/SelectConsultationType';
import DatePicker from '../components/booking/DatePicker';
import TimeSlotPicker from '../components/booking/TimeSlotPicker';
import PatientDetailsForm from '../components/booking/PatientDetailsForm';
import HealthSummary from '../components/booking/HealthSummary';
import PaymentGateway from '../components/booking/PaymentGateway';
import AppointmentConfirmation from '../components/booking/AppointmentConfirmation';

const BookingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SelectConsultationType />
      <DatePicker />
      <TimeSlotPicker />
      <PatientDetailsForm />
      <HealthSummary />
      <PaymentGateway />
      <AppointmentConfirmation />
      <Footer />
    </div>
  );
};

export default BookingPage;
