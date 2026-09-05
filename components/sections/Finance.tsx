"use client";

import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import SectionLabel from "../ui/SectionLabel";

export default function Finance() {
  return (
    <section className="py-24 lg:py-32 bg-[#06152D] text-white" id="finance">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-12 lg:mb-20">
          <ScrollReveal>
            <SectionLabel text="Financial Solutions" className="text-white/80" />
          </ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Financial solutions for life & business
          </h2>
          <p className="text-white/80">Options subject to eligibility and provider approval.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal>
            <div className="p-6 rounded-neu bg-[#072034] shadow-md">
              <h3 className="font-semibold text-lg mb-2">Business Banking</h3>
              <p className="text-white/80 text-sm mb-4">Guidance on business accounts, payments, and integrations to keep your finances flowing.</p>
              <Link href="#contact" className="inline-block text-sm font-semibold text-[#F5B51B]">Learn more</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="p-6 rounded-neu bg-[#072034] shadow-md">
              <h3 className="font-semibold text-lg mb-2">Business Loans</h3>
              <p className="text-white/80 text-sm mb-4">Explore funding options designed for growth. Advice and introductions where appropriate.</p>
              <Link href="#contact" className="inline-block text-sm font-semibold text-[#F5B51B]">Explore options</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="p-6 rounded-neu bg-[#072034] shadow-md">
              <h3 className="font-semibold text-lg mb-2">Personal Loans</h3>
              <p className="text-white/80 text-sm mb-4">Support and guidance to find suitable personal finance solutions. No guarantees — subject to eligibility.</p>
              <Link href="#contact" className="inline-block text-sm font-semibold text-[#F5B51B]">Find out more</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
