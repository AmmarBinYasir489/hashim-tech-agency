import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default redis;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  services: string[];
  image: string;
  fallbackImage: string;
  alt: string;
  url?: string;
  featured: boolean;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mam Naheeda",
    role: "Owner",
    company: "Synergy Therapy Rooms",
    content: "Hashim Tech created our logo, favicon, Instagram branding and full website. Everything was delivered professionally and on time. Highly recommend their services.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Finance",
    content: "Hashim Tech rebuilt our entire digital infrastructure. The new platform handles 10x the traffic at half the operational cost. Exceptional work.",
    rating: 5,
  },
  {
    id: "3",
    name: "Marcus Wright",
    role: "CTO",
    company: "Orbitra Analytics",
    content: "The analytics dashboard Hashim Tech built processes 2M+ events daily with sub-second latency. Their technical execution is outstanding.",
    rating: 5,
  },
  {
    id: "4",
    name: "Aisha Patel",
    role: "Founder",
    company: "NovaTech Health",
    content: "From concept to launch in 12 weeks — Hashim Tech delivered a HIPAA-compliant telehealth platform that exceeded all expectations.",
    rating: 5,
  },
];

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    featured: true,
    image: "https://synergytherapyrooms.co.uk/wp-content/uploads/2026/05/synergy-homepage-consultation-practitioner-client.webp",
    fallbackImage: "https://picsum.photos/seed/synergy/900/600.jpg",
    alt: "Synergy Therapy Rooms - modern clinic interior",
    category: "Healthcare · Website · Branding",
    title: "Synergy Therapy Rooms",
    summary: "Complete brand identity, logo design, favicon, Instagram branding, and professional website for Mam Naheeda's health, wellness and aesthetics clinic.",
    tech: ["Logo Design", "WordPress", "Branding", "Web Design"],
    url: "https://synergytherapyrooms.co.uk/",
    services: ["Logo", "Favicon", "Instagram Logo", "Website", "Business Profiling"],
  },
  {
    id: "2",
    featured: true,
    image: "https://mayfairjumpstart.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/mayfair/900/600.jpg",
    alt: "Mayfair Jumpstart website",
    category: "Business Setup · Website",
    title: "Mayfair Jumpstart",
    summary: "Complete business setup including website design, business profiling, social media setup, and operational workflows.",
    tech: ["Website Design", "Business Profiling", "Social Media"],
    url: "https://mayfairjumpstart.com/",
    services: ["Website", "Business Profiling", "Social Media"],
  },
  {
    id: "3",
    featured: false,
    image: "https://roadwiserecovery.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/roadwise/600/400.jpg",
    alt: "Roadwise Recovery website",
    category: "Healthcare · Recovery Services",
    title: "Roadwise Recovery",
    summary: "Full business and web presence with patient intake, scheduling, and SEO-focused site.",
    tech: ["Website Design", "SEO", "Business Profiling"],
    url: "https://roadwiserecovery.com/",
    services: ["Website", "SEO", "Business Profiling"],
  },
  {
    id: "4",
    featured: false,
    image: "https://picsum.photos/seed/meridian-fin/600/400.jpg",
    fallbackImage: "https://picsum.photos/seed/meridian-fin/600/400.jpg",
    alt: "Meridian Finance platform",
    category: "Finance · Web Application",
    title: "Meridian — Banking Reimagined",
    summary: "A fintech platform with real-time dashboards, automated compliance checks, and a seamless onboarding flow.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    services: ["Website", "Web Application"],
  },
  {
    id: "5",
    featured: false,
    image: "https://picsum.photos/seed/orbitra/600/400.jpg",
    fallbackImage: "https://picsum.photos/seed/orbitra/600/400.jpg",
    alt: "Orbitra Analytics dashboard",
    category: "Analytics · SaaS Dashboard",
    title: "Orbitra Analytics",
    summary: "Real-time analytics dashboard for e-commerce brands with custom reporting and AI-powered insights.",
    tech: ["React", "D3.js", "Node.js"],
    services: ["Web Application", "Dashboard"],
  },
  {
    id: "6",
    featured: false,
    image: "https://picsum.photos/seed/novatech/600/400.jpg",
    fallbackImage: "https://picsum.photos/seed/novatech/600/400.jpg",
    alt: "NovaTech Health app",
    category: "Healthcare · Mobile App",
    title: "NovaTech Health",
    summary: "Cross-platform telehealth app with video consultations, prescription management, and HIPAA-compliant data handling.",
    tech: ["React Native", "Firebase", "WebRTC"],
    services: ["Mobile App", "Healthcare"],
  },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await redis.get<Testimonial[]>("testimonials");
  if (!data || data.length === 0) {
    await redis.set("testimonials", DEFAULT_TESTIMONIALS);
    return DEFAULT_TESTIMONIALS;
  }
  return data;
}

export async function setTestimonials(data: Testimonial[]): Promise<void> {
  await redis.set("testimonials", data);
}

export async function getProjects(): Promise<Project[]> {
  const data = await redis.get<Project[]>("projects");
  if (!data || data.length === 0) {
    await redis.set("projects", DEFAULT_PROJECTS);
    return DEFAULT_PROJECTS;
  }
  return data;
}

export async function setProjects(data: Project[]): Promise<void> {
  await redis.set("projects", data);
}
