import { useEffect, useState } from 'react';
import styles from './style';
import {
  About,
  Button,
  Footer,
  FAQ,
  Features,
  Hero,
  Navbar,
  Newsletter,
  Pricing,
  Service,
  Team,
  Feat,
} from './components';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-eyebrow', { y: 12, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 20, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-body', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-cta', { y: 14, opacity: 0, duration: 0.6 }, '-=0.4');

      gsap.utils.toArray('.reveal').forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        });
      });

      gsap.utils.toArray('.reveal-group').forEach((group) => {
        const items = group.querySelectorAll('.reveal-item');
        if (!items.length) return;
        gsap.from(items, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
          },
        });
      });

      gsap.to('.hero-float', {
        y: -12,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-visual img', {
        yPercent: 6,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gsap = window.gsap;
    if (!gsap) return;
    const hero = document.querySelector('.hero-visual');
    const floaters = hero ? hero.querySelectorAll('.hero-float') : [];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      if (floaters.length && hero) {
        const rect = hero.getBoundingClientRect();
        const hx = (event.clientX - rect.left) / rect.width - 0.5;
        const hy = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(floaters, {
          x: hx * 20,
          y: hy * 20,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    const handleLeave = () => {
      if (floaters.length) {
        gsap.to(floaters, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-shell w-full overflow-hidden">
      <div className={`bg-nav ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary`}>
        <Service />
        <div className="w-full section-alt">
          <About />
        </div>
        <div className={`px-40 ${styles.flexCenter} py-[40px]`}>
          <Features />
        </div>
        <Feat />
        <Team />
        <FAQ />

        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
