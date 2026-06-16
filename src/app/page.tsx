import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { Profile } from "@/components/profile";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Methods } from "@/components/methods";
import { Offerings } from "@/components/offerings";
import { CaseStudy } from "@/components/case-study";
import { Testimonials } from "@/components/testimonials";
import { Book } from "@/components/book";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Profile />
        <About />
        <Services />
        <Methods />
        <Offerings />
        <CaseStudy />
        <Testimonials />
        <Book />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
