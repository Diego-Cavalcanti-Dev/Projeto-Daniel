import { Header } from "./components/header";
import { Hero, HeroHighlights } from "./components/hero";
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f5f7fb_0%,#e2e8f2_40%,#d3dae6_100%)] px-0.5 pb-1.5 pt-0.5 sm:px-3 sm:pb-4 sm:pt-2 lg:px-5 lg:pb-6 lg:pt-2.5">
      <div className="relative min-h-[calc(100vh-0.5rem)] overflow-hidden rounded-[1.5rem] border border-white/75 bg-[#f8fafc] shadow-[0_18px_40px_rgba(8,26,82,0.08),0_34px_95px_rgba(8,26,82,0.16)] sm:min-h-[calc(100vh-1rem)] sm:rounded-[2rem]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(199,162,74,0.14),transparent_42%),radial-gradient(circle_at_top_right,rgba(8,26,82,0.08),transparent_36%)]" />
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <HeroHighlights />
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
    </div>
  );
}
