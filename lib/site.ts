import {
  Boxes,
  Zap,
  Wrench,
  HardHat,
  Building2,
  Package,
  Search,
  Truck,
  ShieldCheck,
  Headset,
  BadgeCheck,
  Globe2,
  Factory,
  Cpu,
  Pill,
  Fuel,
  Wheat,
  Hammer,
  Car,
  type LucideIcon,
} from 'lucide-react'

export const siteConfig = {
  name: 'Shree Balaji Enterprises',
  shortName: 'Shree Balaji',
  tagline: 'Industrial Trading, Procurement & Sourcing',
  description:
    'Shree Balaji Enterprises is a trusted industrial trading, procurement and sourcing partner in India, supplying industrial products, electrical items, hardware, safety equipment, construction materials, packaging and custom sourcing solutions for businesses.',
  url: 'https://shreebalajienterprises.example',
  phone: '+91 84708 33247',
  phoneHref: '+918470833247',
  whatsapp: '918470833247',
  email: 'shreebalajienterprises1826@gmail.com',
  address: '1122/1, Nagariya Colony, Near Khushipura, Jhansi, Uttar Pradesh 284002, India',
  founded: '2026',
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
}

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
]

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChooseUs: Feature[] = [
  {
    icon: BadgeCheck,
    title: 'Verified Quality',
    description:
      'Every product is sourced from certified manufacturers and passes strict quality checks before dispatch.',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description:
      'A robust logistics network ensures your orders arrive on schedule, minimizing operational downtime.',
  },
  {
    icon: Search,
    title: 'Custom Sourcing',
    description:
      'Hard-to-find item? Our procurement specialists locate and negotiate the best value on your behalf.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    description:
      'Full documentation, GST invoicing and adherence to industry safety and regulatory standards.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description:
      'A single point of contact manages your account from enquiry to after-sales service.',
  },
  {
    icon: Globe2,
    title: 'Pan-India Reach',
    description:
      'We serve businesses across India with competitive pricing and reliable supply continuity.',
  },
]

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Package,
    title: 'Industrial Trading',
    description:
      'Supply of a wide catalogue of industrial goods across categories, backed by ready stock and bulk pricing.',
  },
  {
    icon: Search,
    title: 'Procurement Management',
    description:
      'End-to-end procurement handling — vendor evaluation, negotiation, purchase orders and delivery tracking.',
  },
  {
    icon: Globe2,
    title: 'Custom Sourcing',
    description:
      'Specialised sourcing for non-standard, imported or hard-to-find components and materials.',
  },
  {
    icon: Truck,
    title: 'Logistics & Fulfilment',
    description:
      'Consolidated shipping, warehousing and last-mile delivery managed through our partner network.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Incoming inspection, supplier audits and documentation to guarantee specification compliance.',
  },
  {
    icon: Headset,
    title: 'Vendor Consolidation',
    description:
      'Reduce your supplier count and paperwork — source multiple categories through a single trusted partner.',
  },
]

export type ProductCategory = {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

export const productCategories: ProductCategory[] = [
  {
    icon: Boxes,
    title: 'Industrial Products',
    description: 'Bearings, tools, abrasives, adhesives, lubricants and general industrial supplies.',
    items: ['Bearings & Seals', 'Power & Hand Tools', 'Abrasives', 'Industrial Lubricants', 'Adhesives & Sealants'],
  },
  {
    icon: Zap,
    title: 'Electrical Items',
    description: 'Cables, switchgear, motors, control panels and electrical accessories.',
    items: ['Cables & Wires', 'Switchgear', 'Motors & Drives', 'Control Panels', 'Lighting'],
  },
  {
    icon: Wrench,
    title: 'Hardware',
    description: 'Fasteners, fittings, valves, pipes and mechanical hardware.',
    items: ['Fasteners', 'Valves & Fittings', 'Pipes & Tubes', 'Hinges & Locks', 'Chains & Sprockets'],
  },
  {
    icon: HardHat,
    title: 'Safety Equipment',
    description: 'PPE and workplace safety gear compliant with industry standards.',
    items: ['Helmets & Hard Hats', 'Safety Shoes', 'Gloves', 'Eye & Ear Protection', 'Hi-Vis Clothing'],
  },
  {
    icon: Building2,
    title: 'Construction Materials',
    description: 'Building and civil construction supplies for projects of every scale.',
    items: ['Cement & Aggregates', 'Steel & Rebar', 'Plumbing', 'Waterproofing', 'Scaffolding'],
  },
  {
    icon: Package,
    title: 'Packaging Products',
    description: 'Protective, industrial and export packaging solutions.',
    items: ['Stretch & Shrink Film', 'Corrugated Boxes', 'Strapping', 'Pallets', 'Tapes & Labels'],
  },
]

export type Industry = {
  icon: LucideIcon
  title: string
  description: string
}

export const industries: Industry[] = [
  { icon: Factory, title: 'Manufacturing', description: 'MRO supplies and production consumables for plants and factories.' },
  { icon: Building2, title: 'Construction', description: 'Materials, hardware and safety gear for civil and infrastructure projects.' },
  { icon: Cpu, title: 'Electronics', description: 'Components, tooling and cleanroom consumables for electronics assembly.' },
  { icon: Pill, title: 'Pharmaceuticals', description: 'Compliant packaging, safety and facility supplies for pharma units.' },
  { icon: Fuel, title: 'Oil & Gas', description: 'Rugged industrial equipment and PPE for energy operations.' },
  { icon: Wheat, title: 'Agriculture', description: 'Equipment, packaging and hardware for agri-processing.' },
  { icon: Hammer, title: 'Engineering', description: 'Precision tools, fasteners and raw materials for fabrication.' },
  { icon: Car, title: 'Automotive', description: 'Assembly-line consumables, components and safety supplies.' },
]

export type Stat = { value: string; label: string }

export const stats: Stat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '2,000+', label: 'Products Supplied' },
  { value: '500+', label: 'Business Clients' },
  { value: '98%', label: 'On-Time Delivery' },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Shree Balaji Enterprises consolidated our entire MRO supply chain. Fewer vendors, faster delivery and consistently competitive pricing.',
    name: 'Rajesh Mehta',
    role: 'Procurement Head, Precision Auto Components',
  },
  {
    quote:
      'Their custom sourcing team found imported valves we struggled to procure for months. Reliable, responsive and transparent throughout.',
    name: 'Anita Sharma',
    role: 'Plant Manager, Nexa Pharmaceuticals',
  },
  {
    quote:
      'From safety equipment to packaging, they deliver on time every time. A genuine partner for our expanding construction projects.',
    name: 'Vikram Singh',
    role: 'Director, Skyline Infra Projects',
  },
]

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'What types of products do you supply?',
    answer:
      'We supply industrial products, electrical items, hardware, safety equipment, construction materials and packaging products, along with custom sourcing for specialised requirements.',
  },
  {
    question: 'Do you handle bulk and recurring orders?',
    answer:
      'Yes. We specialise in bulk supply and set up recurring supply agreements with dedicated pricing and priority fulfilment for regular customers.',
  },
  {
    question: 'Can you source products that are not in your catalogue?',
    answer:
      'Absolutely. Our procurement specialists locate hard-to-find, imported and non-standard items and negotiate the best value on your behalf.',
  },
  {
    question: 'Which regions do you serve?',
    answer:
      'We serve businesses across India through our logistics partner network, ensuring reliable supply continuity nationwide.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use our Request a Quote form with your product list and quantities, or call and email us directly. Most quotes are returned within one business day.',
  },
  {
    question: 'Do you provide GST invoicing and documentation?',
    answer:
      'Yes, all orders include GST-compliant invoicing and complete documentation to support your accounting and compliance needs.',
  },
]
