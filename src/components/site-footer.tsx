import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-nafaa-ocean text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/nafaa-logo.png"
                alt="NaFAA Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <div className="font-bold">National Fisheries & Aquaculture Authority</div>
                <div className="text-xs text-blue-200">Republic of Liberia</div>
              </div>
            </div>
            <p className="text-sm text-blue-100 mb-4">
              Managing Liberia's fisheries and aquaculture resources for sustainable development.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About NaFAA</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/statistics" className="text-blue-100 hover:text-white transition-colors">Statistics & Data</Link></li>
              <li><Link href="/resources" className="text-blue-100 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/news" className="text-blue-100 hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="/careers" className="text-blue-100 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/vessel-registration" className="text-blue-100 hover:text-white transition-colors">Vessel Registration</Link></li>
              <li><Link href="/services/fishing-licenses" className="text-blue-100 hover:text-white transition-colors">Fishing Licenses</Link></li>
              <li><Link href="/services/license-renewal" className="text-blue-100 hover:text-white transition-colors">License Renewal</Link></li>
              <li><Link href="/services/catch-reporting" className="text-blue-100 hover:text-white transition-colors">Catch Reporting</Link></li>
              <li><Link href="/services/payments" className="text-blue-100 hover:text-white transition-colors">Payments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-blue-200" />
                <span className="text-blue-100">Bushrod Island, Monrovia, Liberia</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-blue-200" />
                <span className="text-blue-100">+231 (0) 777 123 456</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-blue-200" />
                <span className="text-blue-100">info@nafaa.gov.lr</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-blue-200 mb-2">Office Hours:</p>
              <p className="text-sm text-blue-100">Mon - Fri: 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-100">
              © 2025 National Fisheries and Aquaculture Authority. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="text-blue-100 hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
