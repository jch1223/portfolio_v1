import dynamic from 'next/dynamic';

const Admin = dynamic(import('../../components/Admin'), {
  loading: () => <p>Loading</p>,
  ssr: false
});

const Index = props => {
  return <Admin />;
};

export default Index;
