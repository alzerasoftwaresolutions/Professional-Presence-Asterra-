import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { businessUnits, company } from '../data';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Operating Divisions', href: '/business', hasDropdown: true },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
];

export const SiteLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu & dropdown on route change, scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
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

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-canvas text-charcoal-body font-sans">
      {/* 1. TOP UTILITY BAR (Tablet & Desktop) */}
      <div className="bg-evergreen text-border text-[11px] font-mono border-b border-evergreen-hover py-2 hidden md:block">
        <div className="container-corporate flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-bold text-white tracking-wide">ASTERRA MANUFACTURING GROUP S.C.</span>
            <span>•</span>
            <span className="text-mineral-teal">EN 1090-2 EXC3 // ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-border/80">Industrial Zone 4, Addis Ababa</span>
            <span>•</span>
            <a
              href={`tel:${company.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors font-bold text-white flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-mineral-teal" />
              <span>{company.contact.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container-corporate flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-evergreen text-white flex items-center justify-center font-serif font-bold text-lg sm:text-xl border border-evergreen-hover group-hover:bg-evergreen-hover transition-colors shadow-xs">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-evergreen tracking-tight leading-none">
                ASTERRA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-charcoal-muted mt-0.5 font-semibold">
                Manufacturing Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `text-xs font-semibold uppercase tracking-[0.1em] transition-colors py-2 flex items-center gap-1 min-h-[44px] ${
                          isActive || location.pathname.startsWith('/business')
                            ? 'text-evergreen font-bold border-b-2 border-evergreen'
                            : 'text-charcoal-body hover:text-evergreen'
                        }`
                      }
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white border border-border shadow-lg py-2 mt-1 z-50 animate-fadeIn">
                        <div className="px-4 py-2 border-b border-border/60 bg-ivory-canvas/60">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted font-bold">
                            Operating Divisions Directory
                          </span>
                        </div>
                        {businessUnits.map((u) => (
                          <Link
                            key={u.slug}
                            to={`/business/${u.slug}`}
                            className="block px-4 py-2.5 hover:bg-ivory-canvas transition-colors border-b border-border/30 last:border-0"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] font-bold text-mineral-teal uppercase">
                                {u.divisionCode}
                              </span>
                              <span className="font-serif font-bold text-xs text-evergreen">
                                {u.name.split('—')[1] || u.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-charcoal-muted line-clamp-1 mt-0.5">
                              {u.tagline}
                            </p>
                          </Link>
                        ))}
                        <div className="p-2 border-t border-border bg-ivory-canvas/30 text-center">
                          <Link
                            to="/business"
                            className="font-mono text-[10px] uppercase tracking-wider text-evergreen font-bold hover:underline inline-flex items-center gap-1"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>Explore All 4 Plant Blueprints</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-xs font-semibold uppercase tracking-[0.1em] transition-colors py-2 relative min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-evergreen font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-evergreen'
                        : 'text-charcoal-body hover:text-evergreen'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-xs py-2.5 px-4">
              Submit Corporate RFQ
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="text-[11px] font-mono font-bold uppercase tracking-wider bg-evergreen text-white px-3 py-1.5 border border-evergreen hover:bg-evergreen-hover"
            >
              RFQ Desk
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-evergreen hover:bg-ivory-canvas border border-border min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE & TABLET NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-50 bg-evergreen/98 backdrop-blur-xl text-white flex flex-col justify-between p-5 sm:p-8 overflow-y-auto lg:hidden animate-fadeIn">
          <div className="space-y-6">
            {/* Quick Header Identity */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="font-mono text-[11px] text-mineral-teal uppercase font-bold tracking-wider">
                Corporate Directory Portal
              </span>
              <span className="text-[10px] font-mono text-border/80 px-2 py-0.5 bg-white/10">
                Zone 4 Facilities
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base sm:text-lg font-serif tracking-wide py-3 px-3 flex items-center justify-between border-b border-white/10 ${
                    isActive ? 'bg-white/10 text-white font-bold text-mineral-teal' : 'text-border hover:bg-white/5'
                  }`
                }
              >
                <span>Home Overview</span>
                {location.pathname === '/' && (
                  <span className="text-[10px] font-mono text-mineral-teal font-bold px-2 py-0.5 bg-white/10">ACTIVE</span>
                )}
              </NavLink>

              {NAV_LINKS.map((link) => {
                const isActive = location.pathname.startsWith(link.href);
                return (
                  <div key={link.href} className="border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={link.href}
                        className={`text-base sm:text-lg font-serif tracking-wide py-3 px-3 flex-1 flex items-center justify-between ${
                          isActive ? 'text-mineral-teal font-bold' : 'text-border hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="text-[10px] font-mono text-mineral-teal font-bold px-2 py-0.5 bg-white/10">
                            ACTIVE
                          </span>
                        )}
                      </NavLink>
                      {link.hasDropdown && (
                        <button
                          onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                          className="p-3 text-border hover:text-white cursor-pointer"
                          aria-label="Toggle Divisions List"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileDivisionsOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Expandable Divisions in Mobile Menu */}
                    {link.hasDropdown && mobileDivisionsOpen && (
                      <div className="pl-4 pr-2 pb-3 space-y-1.5 border-l-2 border-mineral-teal ml-3 my-1 animate-fadeIn">
                        {businessUnits.map((u) => (
                          <Link
                            key={u.slug}
                            to={`/business/${u.slug}`}
                            className="block text-xs font-mono text-border/90 hover:text-white py-1.5 px-2 bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between"
                          >
                            <span className="font-bold text-mineral-teal">{u.divisionCode}</span>
                            <span className="truncate ml-2 text-white font-sans text-xs">{u.name.split('—')[1] || u.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Quick Direct Desk Actions at Bottom */}
          <div className="pt-6 mt-6 border-t border-white/15 space-y-3">
            <Link
              to="/contact"
              className="btn-primary w-full bg-mineral-teal text-white border-mineral-teal text-center justify-center font-bold font-mono text-xs uppercase tracking-wider"
            >
              Submit Corporate RFQ
            </Link>
            <a
              href={`tel:${company.contact.phonePrimary.replace(/\s+/g, '')}`}
              className="btn-secondary w-full text-white border-white/30 hover:bg-white/10 text-center justify-center font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-mineral-teal" />
              <span>Call Direct Dispatch: {company.contact.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}

      {/* 4. PAGE OUTLET */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 5. FOOTER */}
      <footer className="bg-evergreen-active text-white border-t border-evergreen-hover pt-16 pb-12">
        <div className="container-corporate space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Column 1: Brand & Charter */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white text-evergreen flex items-center justify-center font-serif font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-white">
                    ASTERRA
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-mineral-teal">
                    Manufacturing Group S.C.
                  </div>
                </div>
              </div>

              <p className="text-xs text-border/85 leading-relaxed">
                East Africa’s premier diversified industrial manufacturing group. Operating 4 synchronized production facilities across 68,000 m² of covered plant infrastructure.
              </p>

              <div className="pt-2 text-xs font-mono text-border/70 space-y-1">
                <div>Share Company Reg. No. 09-412</div>
                <div>Industrial Zone 4, Addis Ababa, Ethiopia</div>
              </div>
            </div>

            {/* Column 2: Operating Divisions */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-mineral-teal">
                Operating Divisions
              </h4>
              <ul className="space-y-2 text-xs text-border/85">
                {businessUnits.map((unit) => (
                  <li key={unit.slug}>
                    <Link
                      to={`/business/${unit.slug}`}
                      className="hover:text-mineral-teal transition-colors flex items-center gap-1.5"
                    >
                      <span className="font-mono text-[10px] text-mineral-teal">{unit.divisionCode}</span>
                      <span>{unit.name.split('—')[1] || unit.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Modules */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-mineral-teal">
                Directorship Portals
              </h4>
              <ul className="space-y-2 text-xs text-border/85">
                <li><Link to="/about" className="hover:text-mineral-teal transition-colors">Corporate Story</Link></li>
                <li><Link to="/projects" className="hover:text-mineral-teal transition-colors">Case Studies Archive</Link></li>
                <li><Link to="/leadership" className="hover:text-mineral-teal transition-colors">Governance & Board</Link></li>
                <li><Link to="/insights" className="hover:text-mineral-teal transition-colors">Applied Metallurgy Papers</Link></li>
                <li><Link to="/careers" className="hover:text-mineral-teal transition-colors">Apprenticeship Academy</Link></li>
                <li><Link to="/contact" className="hover:text-mineral-teal transition-colors">Commercial Tender Desk</Link></li>
              </ul>
            </div>

            {/* Column 4: Quality & Dispatch Desks */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-mineral-teal">
                Compliance & Direct Desks
              </h4>
              <div className="space-y-2 text-xs text-border/85 font-mono">
                <div>
                  <span className="text-border/60 block text-[10px]">TENDER ESTIMATION:</span>
                  <span className="text-white">{company.contact.procurementEmail}</span>
                </div>
                <div>
                  <span className="text-border/60 block text-[10px]">EXECUTIVE DESK:</span>
                  <span className="text-white">{company.contact.generalEmail}</span>
                </div>
                <div>
                  <span className="text-border/60 block text-[10px]">DISPATCH TELEPHONE:</span>
                  <span className="text-white font-bold">{company.contact.phonePrimary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hairline */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-border/60">
            <div>
              &copy; {new Date().getFullYear()} Asterra Manufacturing Group S.C. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of RFQ</Link>
              <span>•</span>
              <span>ISO 9001:2015 & EN 1090-2</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
