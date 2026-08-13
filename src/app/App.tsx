import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AreasPage, ContactPage, ContentPage, HomePage, OfficePage } from "./pages";
import { normalizePathname } from "./routes";
import { Seo } from "./seo";

const routes = {
  "/": HomePage,
  "/escritorio": OfficePage,
  "/areas-de-atuacao": AreasPage,
  "/conteudos": ContentPage,
  "/contato": ContactPage,
} as const;

export default function App() {
  const pathname = normalizePathname(window.location.pathname);
  const Page = routes[pathname as keyof typeof routes] ?? HomePage;

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-[#111c36]">
      <Seo pathname={pathname} />
      <Header />
      <main className="overflow-x-hidden">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
