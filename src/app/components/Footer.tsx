'use client';

import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal?tab=privacy' },
    { name: 'Terms of Service', href: '/legal?tab=terms' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Astrico</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Unify your enterprise knowledge and empower your teams to work smarter.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-600 hover:text-primary-blue transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-600 hover:text-primary-blue transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex justify-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Astrico. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 