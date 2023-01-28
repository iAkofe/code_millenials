import styles from "./style";
import { About, Button, Footer, FAQ, Features, Hero, Navbar, Newsletter, Pricing, Service, Team, Feat} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-nav ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary`}>
        <Service />
        <div  className="w-full bg-secondary">
        <About />
        </div>
        <div className={`px-40 ${styles.flexCenter} py-[40px]`}>
        <Features />
        </div>
        <Feat />
        <Team />
        <FAQ />
        <Pricing />
        <Newsletter />
        <Footer />
    </div>
  </div>
);

export default App;