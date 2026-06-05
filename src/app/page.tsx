import Image from "next/image";
import { Nav } from "@/components/nav";
import { siteContent } from "@/content";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Methods } from "@/components/methods";
import { Offerings } from "@/components/offerings";
import { Testimonials } from "@/components/testimonials";
import { Book } from "@/components/book";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Methods />
        <Offerings />
        <Testimonials />
        <Book />
        <Contact />
      </main>
      <footer className="border-t border-[rgba(20,48,95,0.1)] bg-[#f6f8fc] px-8 py-12 text-center">
        <Image
          src={siteContent.images.logo}
          alt="Victor Brands logo"
          width={150}
          height={48}
          className="mx-auto mb-5 h-10 w-auto opacity-80"
        />
        <p className="font-mono text-xs tracking-widest text-[#5a6478]">
          © {new Date().getFullYear()} {siteContent.footer.copy}
        </p>
        <p className="mt-2 text-xs text-[#9aa3b5]">
          <a href={`mailto:${siteContent.footer.email}`} className="transition-colors hover:text-[#2563eb]">
            {siteContent.footer.email}
          </a>
        </p>
      </footer>
    </>
  );
}
