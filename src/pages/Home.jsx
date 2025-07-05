import Layout from '../components/templates/Layout';
import HeroSection from '../components/organisms/HeroSection';
import ServicesSection from '../components/organisms/ServicesSection';
import CallToActionSection from '../components/organisms/CallToActionSection';
import { Helmet } from "react-helmet";

const Home = () => {
  return (

    <Layout>
      <Helmet>
        <title>SecureDev | Experts en cybersécurité et développement logiciel</title>
        <meta name="description" content="Startup experte en cybersécurité, développement web et cloud. Sécurisez votre entreprise avec SecureDev." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Home;
