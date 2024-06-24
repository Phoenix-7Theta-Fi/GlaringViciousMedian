import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PersonalInformation from '../components/profile/PersonalInformation';
import HealthInformation from '../components/profile/HealthInformation';
import Settings from '../components/profile/Settings';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Header />
      <PersonalInformation />
      <HealthInformation />
      <Settings />
      <Footer />
    </div>
  );
};

export default ProfilePage;
