// pages/doctorProfile.tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { supabase } from '../services/supabase';
import { DoctorProfile } from '../components/doctorProfile/DoctorProfile';

interface DoctorProfilePageProps {
  doctor: {
    id: string;
    name: string;
    specialization: string;
    experience: number;
    certifications: string[];
    languages: string[];
    fee: number;
    availability: string;
    reviews: {
      patientName: string;
      rating: number;
      comment: string;
    }[];
  } | null;
}

const DoctorProfilePage = ({ doctor }: DoctorProfilePageProps) => {
  const router = useRouter();

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div>
      <DoctorProfile doctor={doctor} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const { data: doctor, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !doctor) {
    return {
      props: {
        doctor: null,
      },
    };
  }

  return {
    props: {
      doctor,
    },
  };
};

export default DoctorProfilePage;
