import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { TrustBar } from "./components/trust-bar";
import { Services } from "./components/services";
import { Personas } from "./components/personas";
import { Process } from "./components/process";
import { Differentials } from "./components/differentials";
import { Blog } from "./components/blog";
import { FAQ } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Personas />
        <Process />
        <Differentials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
