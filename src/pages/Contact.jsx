import Layout from '../components/templates/Layout';
import Typography from '../components/atoms/Typography';

const Contact = () => (
  <Layout>
    <section className="section">
      <div className="">
          <section className='hero-section' style={{padding:"100px"}}> 
         <Typography variant="h1" className="section-title mb-4">
          Contactez-nous
        </Typography>
        <Typography variant="p" className="lead mb-4" style={{ textAlign: "center" }}>
          Une question ? Un projet ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
        </Typography></section>
        <div className="row justify-content-center" style={{margin:"20px"}}>
          <div className="col-md-8" >
            <form className="card card-custom p-4 shadow-sm" style={{background:'#c0edff86'}}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom</label>
                <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Adresse e-mail</label>
                <input type="email" className="form-control" id="email" placeholder="Votre e-mail" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Votre message" required />
              </div>
              <button type="submit" className="btn btn-primary-custom w-100 mt-2">
                Envoyer
              </button>
            </form>
            <div className="text-center mt-4">
              <Typography variant="p" className="text-muted">
                Ou écrivez-nous à <a href="mailto:contact@securedev.com" className="text-primary-custom">contact@securedev.com</a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;