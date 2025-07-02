import Layout from '../components/templates/Layout';
import HeroSection from '../components/organisms/HeroSection';
import ServicesSection from '../components/organisms/ServicesSection';
import CallToActionSection from '../components/organisms/CallToActionSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Home;
