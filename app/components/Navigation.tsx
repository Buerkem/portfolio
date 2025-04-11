import Link from "next/link";
import { headerLinks } from "@/app/lib/data";

export default function Navigation() {
  return (
    <div className="flex justify-end">
      <nav>
        <ul className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full card-shadow">
          {headerLinks.map((link) => (
            <li key={link.href}>
              {link.target === "_blank" ? (
                <a
                  href={link.href}
                  className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
                  target={link.target}
                  rel={link.rel}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
