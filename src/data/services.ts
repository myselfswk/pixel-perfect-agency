import { HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineDeviceMobile, HiOutlineSpeakerphone, HiOutlineCode, HiOutlineTemplate } from "react-icons/hi";
import { IconType } from "react-icons";

export interface ServiceData {
  icon: IconType;
  title: string;
  slug: string;
  desc: string;
  longDesc: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const services: ServiceData[] = [
  {
    icon: HiOutlineGlobeAlt,
    title: "SEO Optimization",
    slug: "seo-optimization",
    desc: "Dominate search results with data-driven SEO strategies that deliver sustainable organic growth.",
    longDesc: "Our SEO strategies combine technical expertise with creative content to boost your search rankings. We analyze your market, audit your site, and build a roadmap that drives qualified organic traffic month over month.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Link Building Campaigns", "Local SEO", "Analytics & Reporting"],
    benefits: ["Higher organic rankings", "Increased qualified traffic", "Better conversion rates", "Sustainable long-term growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: HiOutlineChartBar,
    title: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Maximize ROI with precision-targeted paid campaigns across all major platforms.",
    longDesc: "We design and manage high-performance ad campaigns across Google, Meta, LinkedIn, and more. Every dollar is optimized through real-time bidding, A/B testing, and data-driven creative strategies.",
    features: ["Google Ads Management", "Social Media Advertising", "Retargeting Campaigns", "Conversion Rate Optimization", "A/B Testing", "Budget Optimization"],
    benefits: ["Maximized ad spend ROI", "Lower cost per acquisition", "Scalable growth channels", "Real-time performance insights"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile Development",
    slug: "mobile-development",
    desc: "Native and cross-platform mobile apps built for performance, engagement, and scale.",
    longDesc: "From concept to launch, we build mobile experiences that users love. Using React Native and native technologies, we deliver apps that are fast, beautiful, and built to scale across iOS and Android.",
    features: ["iOS & Android Development", "React Native Apps", "UI/UX Mobile Design", "App Store Optimization", "Push Notifications", "Analytics Integration"],
    benefits: ["Cross-platform reach", "Faster time to market", "Engaging user experiences", "Scalable architecture"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    icon: HiOutlineSpeakerphone,
    title: "Social Media",
    slug: "social-media",
    desc: "Build authentic communities and amplify your brand voice across social channels.",
    longDesc: "We craft social strategies that build real communities and drive meaningful engagement. From content calendars to influencer partnerships, we make your brand impossible to ignore on every platform.",
    features: ["Content Calendar Management", "Community Management", "Influencer Partnerships", "Social Listening", "Paid Social Campaigns", "Performance Analytics"],
    benefits: ["Stronger brand awareness", "Engaged communities", "Authentic brand voice", "Measurable social ROI"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    icon: HiOutlineCode,
    title: "Web Development",
    slug: "web-development",
    desc: "High-performance websites and apps built for speed, scale, and conversion.",
    longDesc: "We build fast, accessible, and beautiful websites using modern frameworks. Every project is crafted with clean code, responsive design, and conversion optimization at its core.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Integrations", "Performance Optimization", "Maintenance & Support"],
    benefits: ["Lightning-fast load times", "Higher conversion rates", "Scalable infrastructure", "Reduced maintenance costs"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    icon: HiOutlineTemplate,
    title: "CMS Development",
    slug: "cms-development",
    desc: "Custom content management solutions that give your team full control over digital content.",
    longDesc: "We build and customize CMS platforms that empower your team to manage content effortlessly. Whether it's WordPress, headless CMS, or a fully custom solution, we deliver systems that scale with your business.",
    features: ["WordPress Development", "Headless CMS Solutions", "Custom Admin Panels", "Content Migration", "Plugin Development", "Multi-language Support"],
    benefits: ["Full content control", "Reduced developer dependency", "Faster content updates", "Scalable content architecture"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];
