/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Navbar,
  Hero,
  Services,
  ServiceArea,
  About,
  TrustRow,
  FAQ,
  ContactForm,
  Footer,
  StickyMobileCTA
} from './components/AdaptSections';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustRow />
        <Services />
        <About />
        <ServiceArea />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
