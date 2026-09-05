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
  url?: string;
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
  darkBg?: boolean;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mam Naheeda",
    role: "Owner",
    company: "Synergy Therapy Rooms",
    content: "Excellent work — Hashim Tech delivered a beautiful logo with a quick turnaround and took on board my preferences. Highly recommended.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-naheeda/88/88.jpg",
    url: "https://synergytherapyrooms.co.uk/",
  },
  {
    id: "2",
    name: "Fhad Rehman",
    role: "Founder",
    company: "Mayfair Battery & Jumpstart",
    content: "Hashim Tech set up everything from scratch — logo, website, social media, business registration. Professional service from start to finish.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-fhad/88/88.jpg",
    url: "https://mayfairjumpstart.com/",
  },
  {
    id: "3",
    name: "Fhad Rehman",
    role: "Founder",
    company: "Roadwise Breakdown Recovery",
    content: "Second business I trusted Hashim Tech with. Logo, full website, social media — everything delivered on time and exactly as requested.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-fhad2/88/88.jpg",
    url: "https://roadwiserecovery.com/",
  },
  {
    id: "4",
    name: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Finance",
    content: "Hashim Tech transformed our outdated platform into something our users actually love. The attention to detail in both design and performance was remarkable.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-sarah/88/88.jpg",
  },
  {
    id: "5",
    name: "Marcus Wright",
    role: "CTO",
    company: "Orbitra Analytics",
    content: "Working with Hashim Tech felt like having an in-house team that truly understood our vision. They didn't just build what we asked — they delivered something better.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-marcus/88/88.jpg",
  },
  {
    id: "6",
    name: "Aisha Patel",
    role: "Founder",
    company: "NovaTech Health",
    content: "The mobile app they built for us handles thousands of daily sessions without a hitch. Their technical expertise in healthcare compliance gave us total confidence.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-aisha/88/88.jpg",
  },
];

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    featured: true,
    image: "https://synergytherapyrooms.co.uk/wp-content/uploads/2026/07/synergytherapyrooms_logo-1.png",
    fallbackImage: "https://synergytherapyrooms.co.uk/wp-content/uploads/2026/07/synergytherapyrooms_logo-1.png",
    alt: "Synergy Therapy Rooms logo",
    category: "Healthcare · Branding · Logo",
    title: "Synergy Therapy Rooms",
    summary: "Complete brand identity for Mam Naheeda's health, wellness and aesthetics clinic — logo design, favicon, Instagram branding, and professional WordPress website.",
    tech: ["Logo Design", "Favicon", "Branding", "WordPress"],
    url: "https://synergytherapyrooms.co.uk/",
    services: ["Logo", "Favicon", "Instagram Logo", "Website"],
    darkBg: false,
  },
  {
    id: "2",
    featured: true,
    image: "https://mayfairjumpstart.com/wp-content/uploads/2026/07/mayfair-jumpstart-8-1-819x1024.jpeg",
    fallbackImage: "https://picsum.photos/seed/mayfair/900/600.jpg",
    alt: "Mayfair Battery & Jumpstart - mobile battery assistance in Central London",
    category: "Business Setup · Website · Social Media",
    title: "Mayfair Battery & Jumpstart",
    summary: "Full business setup for Fhad Rehman — logo design, business profiling, company registration, professional website, social media setup, and ongoing digital presence management.",
    tech: ["Logo Design", "Business Profiling", "Company Registration", "Web Design", "Social Media"],
    url: "https://mayfairjumpstart.com/",
    services: ["Logo", "Business Profiling", "Company Registration", "Website", "Social Media", "SEO"],
  },
  {
    id: "3",
    featured: true,
    image: "https://roadwiserecovery.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/roadwise/900/600.jpg",
    alt: "Roadwise Breakdown Recovery website",
    category: "Business Setup · Website · Social Media",
    title: "Roadwise Breakdown Recovery",
    summary: "Complete business setup for Fhad Rehman — logo design, business profiling, professional website with booking system, social media management, and full digital branding.",
    tech: ["Logo Design", "Business Profiling", "Web Design", "Social Media", "SEO"],
    url: "https://roadwiserecovery.com/",
    services: ["Logo", "Business Profiling", "Company Registration", "Website", "Social Media", "SEO"],
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
