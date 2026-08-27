import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Business Units', href: '/business' },
  { label: 'Projects', href: '/projects' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
];

export const SiteLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-canvas text-charcoal-body font-sans">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-evergreen-active text-border text-[11px] font-mono border-b border-evergreen py-1.5 hidden md:block">
        <div className="container-corporate flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>ASTERRA MANUFACTURING GROUP • INDUSTRIAL EXCELLENCE</span>
            <span>ISO 9001:2015 / ISO 14001 CERTIFIED</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">HQ: Addis Ababa</Link>
            <span>•</span>
            <a href="tel:+251115550199" className="hover:text-white transition-colors">+251 (0) 11 555 0199</a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="container-corporate flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-evergreen text-white flex items-center justify-center font-serif font-bold text-xl border border-evergreen-hover group-hover:bg-evergreen-hover transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-evergreen tracking-tight leading-none">
                ASTERRA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal-muted mt-0.5">
                Manufacturing Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-[0.1em] transition-colors py-2 relative ${
                    isActive
                      ? 'text-evergreen font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-evergreen'
                      : 'text-charcoal-body hover:text-evergreen'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-xs">
              Corporate Inquiry
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-evergreen hover:bg-ivory-canvas rounded-xs transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-evergreen text-white flex flex-col p-6 overflow-y-auto lg:hidden">
          <nav className="flex flex-col space-y-4 pt-4 border-b border-evergreen-hover pb-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-serif tracking-wide py-2 ${isActive ? 'text-white font-bold' : 'text-border'}`
              }
            >
              Home
            </NavLink>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-wide py-2 ${isActive ? 'text-white font-bold' : 'text-border'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-8 space-y-6">
            <Link to="/contact" className="btn-primary w-full bg-white text-evergreen text-center">
              Corporate Inquiry
            </Link>
            <div className="text-xs text-border space-y-2 font-mono">
              <p>Addis Ababa, Ethiopia</p>
              <p>inquiries@asterragroup.com</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN PAGE OUTLET */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* 5. CORPORATE FOOTER */}
      <footer className="bg-evergreen text-white border-t border-evergreen-hover pt-16 pb-12 mt-auto">
        <div className="container-corporate">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-evergreen-hover">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white text-evergreen flex items-center justify-center font-serif font-bold text-lg">
                  A
                </div>
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  ASTERRA GROUP
                </span>
              </div>
              <p className="text-xs text-border max-w-sm leading-relaxed">
                Asterra Manufacturing Group is a diversified industrial production organization delivering precision components, heavy materials, and engineering infrastructure across regional and international export corridors.
              </p>
              <div className="pt-2 text-xs font-mono text-border flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mineral-teal shrink-0" />
                <span>ISO 9001:2015 • ISO 14001 • ISO 45001</span>
              </div>
            </div>

            {/* Column 2: Governance & Heritage */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-border font-bold mb-4">
                Organization
              </h4>
              <ul className="space-y-2.5 text-xs text-border">
                <li><Link to="/about" className="hover:text-white transition-colors">Corporate Story & History</Link></li>
                <li><Link to="/leadership" className="hover:text-white transition-colors">Board & Executive Team</Link></li>
                <li><Link to="/about#values" className="hover:text-white transition-colors">Institutional Values</Link></li>
                <li><Link to="/about#esg" className="hover:text-white transition-colors">Sustainability & ESG</Link></li>
              </ul>
            </div>

            {/* Column 3: Capabilities */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-border font-bold mb-4">
                Operations
              </h4>
              <ul className="space-y-2.5 text-xs text-border">
                <li><Link to="/business/precision-metals-fabrication" className="hover:text-white transition-colors">DIV-01: Precision Metals</Link></li>
                <li><Link to="/business/industrial-materials-building-products" className="hover:text-white transition-colors">DIV-02: Building Products</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
                <li><Link to="/business" className="hover:text-white transition-colors">Plant Capacities</Link></li>
              </ul>
            </div>

            {/* Column 4: Knowledge & Inquiries */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-border font-bold mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs text-border">
                <li><Link to="/insights" className="hover:text-white transition-colors">Industry Insights & Papers</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Engineering Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Procurement Inquiries</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-border font-mono">
            <p>© {new Date().getFullYear()} Asterra Manufacturing Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
