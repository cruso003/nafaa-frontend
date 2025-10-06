import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Fish,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                N
              </div>
              <h3 className="text-white font-bold">NaFAA</h3>
            </div>
            <p className="text-sm mb-4">
              National Fisheries and Aquaculture Authority - Committed to
              sustainable fisheries management and aquaculture development in
              Liberia.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/mission"
                  className="text-sm hover:text-white transition-colors"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/about/leadership"
                  className="text-sm hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm hover:text-white transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-sm hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/licensing"
                  className="text-sm hover:text-white transition-colors"
                >
                  Fishing Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="/services/registration"
                  className="text-sm hover:text-white transition-colors"
                >
                  Vessel Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inspection"
                  className="text-sm hover:text-white transition-colors"
                >
                  Inspection Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aquaculture"
                  className="text-sm hover:text-white transition-colors"
                >
                  Aquaculture Permits
                </Link>
              </li>
              <li>
                <Link
                  href="/regulations"
                  className="text-sm hover:text-white transition-colors"
                >
                  Regulations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Bushrod Island, Monrovia
                  <br />
                  Republic of Liberia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+231 777 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@nafaa.gov.lr</span>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} National Fisheries & Aquaculture
            Authority. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
