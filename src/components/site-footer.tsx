import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content";

const { footer, contact, images } = siteContent;

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(20,48,95,0.1)] bg-[#f6f8fc] px-8 py-16 md:px-[8vw]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand + tagline */}
        <div>
          <Image
            src={images.logo}
            alt="Victor Brands logo"
            width={150}
            height={48}
            className="mb-5 h-10 w-auto opacity-80"
          />
          <p className="max-w-xs text-sm leading-relaxed text-[#5a6478]">{footer.tagline}</p>
        </div>

        {/* Contact */}
        <div>
          <p className="label mb-4">Contact</p>
          <ul className="flex flex-col gap-2 text-sm text-[#5a6478]">
            <li>
              <a href={`mailto:${footer.email}`} className="transition-colors hover:text-[#2563eb]">
                {footer.email}
              </a>
            </li>
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-[#2563eb]">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.linkedin && (
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#2563eb]">
                  {contact.linkedinLabel}
                </a>
              </li>
            )}
            <li>{contact.location}</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="label mb-4">Juridisch</p>
          <ul className="flex flex-col gap-2 text-sm text-[#5a6478]">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#2563eb]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[rgba(20,48,95,0.08)] pt-6 text-center md:text-left">
        <p className="font-mono text-xs tracking-widest text-[#9aa3b5]">
          © {new Date().getFullYear()} {footer.copy}
        </p>
      </div>
    </footer>
  );
}
