"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/content/services";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { gsap } from "@/lib/animations/gsap";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 60;
      setIsScrolled(scrolled);

      if (headerRef.current) {
        if (scrolled) {
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(5, 5, 5, 0.95)",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            borderBottomColor: "#1e1e24",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(headerRef.current, {
            backgroundColor: "transparent",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            borderBottomColor: "transparent",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Pega Flagship", href: "/pega", highlight: true },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all border-b border-transparent py-5 backdrop-blur-md",
        isScrolled && "shadow-2xl shadow-black/90"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-1">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Services Mega Dropdown trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md",
                pathname.startsWith("/services") || isServicesOpen
                  ? "text-white bg-accent/15 border border-accent/30 font-semibold"
                  : "text-text-muted hover:text-white hover:bg-bg-raised"
              )}
            >
              <span>Services</span>
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200", isServicesOpen && "rotate-180")}
              />
            </button>

            {/* Services Dropdown Panel */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[780px] bg-bg-card border border-border rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {/* Left Col: Flagship */}
                <div className="col-span-1 border-r border-border pr-6 flex flex-col justify-between bg-bg-raised p-4 rounded-lg border-l-2 border-accent">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-accent tracking-wider font-bold">
                      Flagship Practice
                    </span>
                    <h4 className="text-base font-bold font-display text-white mt-1">
                      Pega Implementation & Architecture
                    </h4>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed">
                      Certified CLSA delivery, Case Management, Decision Hub (CDH), and Pega Cloud modernization.
                    </p>
                  </div>
                  <Link
                    href="/pega"
                    onClick={() => setIsServicesOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase text-accent font-bold hover:text-accent-hover hover:underline mt-4"
                  >
                    <span>View Pega Hub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Mid & Right Cols: All 12 Services */}
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  <div className="col-span-2 flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-[10px] font-mono uppercase text-text-muted tracking-wider font-bold">
                      All Core Capabilities (12 Services)
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Browse Hub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="group/item flex flex-col p-2.5 rounded-lg hover:bg-bg-raised transition-colors"
                    >
                      <span className="text-xs font-semibold text-white group-hover/item:text-accent transition-colors truncate">
                        {service.title}
                      </span>
                      <span className="text-[11px] text-text-muted truncate mt-0.5">
                        {service.eyebrow}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                pathname === link.href
                  ? "text-white bg-accent/15 border border-accent/30 font-semibold"
                  : link.highlight
                  ? "text-white hover:text-accent font-semibold"
                  : "text-text-muted hover:text-white hover:bg-bg-raised"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Persistent CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Button href="/contact" size="sm" variant="primary" icon>
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button href="/contact" size="sm" variant="primary" className="text-xs px-3 py-1.5 sm:hidden">
            Consult
          </Button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-white hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-bg/98 backdrop-blur-xl z-40 lg:hidden overflow-y-auto p-6 flex flex-col justify-between border-t border-border">
          <div className="space-y-6">
            <div className="border-b border-border pb-4">
              <span className="text-xs font-mono uppercase text-accent tracking-wider block mb-3 font-bold">
                Flagship Practice
              </span>
              <Link
                href="/pega"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold font-display text-white hover:text-accent flex items-center justify-between"
              >
                <span>Pega Implementation Hub</span>
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </Link>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-text-muted tracking-wider block mb-3">
                Services (12 Capabilities)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg bg-bg-card border border-border text-sm font-medium text-white hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <span className="text-xs font-mono uppercase text-text-muted tracking-wider block">
                Company & Resources
              </span>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-semibold text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border space-y-4">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Consultation
            </Button>
            <div className="text-center">
              <a
                href="tel:+19724996667"
                className="text-xs font-mono text-text-muted hover:text-accent"
              >
                Call: +1 (972) 499-6667
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
