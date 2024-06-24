import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import VideoConsultation from '../components/consultation/VideoConsultation';
import ChatConsultation from '../components/consultation/ChatConsultation';
import VoiceConsultation from '../components/consultation/VoiceConsultation';
import TextChat from '../components/consultation/TextChat';
import FileSharing from '../components/consultation/FileSharing';
import Notes from '../components/consultation/Notes';
import Prescriptions from '../components/consultation/Prescriptions';

const ConsultationPage: React.FC = () => {
  return (
    <div>
      <Header />
      <VideoConsultation />
      <ChatConsultation />
      <VoiceConsultation />
      <TextChat />
      <FileSharing />
      <Notes />
      <Prescriptions />
      <Footer />
    </div>
  );
};

export default ConsultationPage;
