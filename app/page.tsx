import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Story from './components/Story';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollReveal><Trust /></ScrollReveal>
      <ScrollReveal><Story /></ScrollReveal>
      <ScrollReveal><Products /></ScrollReveal>
      <ScrollReveal><Reviews /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
    </main>
  );
}
