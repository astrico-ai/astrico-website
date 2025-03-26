'use client';

import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal?tab=privacy' },
    { name: 'Terms of Service', href: '/legal?tab=terms' },
    { name: 'Security', href: '#security' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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
              <li>
                <a href="/legal?tab=privacy" className="text-gray-600 hover:text-primary-blue">Privacy Policy</a>
              </li>
              <li>
                <a href="/legal?tab=terms" className="text-gray-600 hover:text-primary-blue">Terms of Service</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary-blue">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Astrico. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-primary-blue transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 