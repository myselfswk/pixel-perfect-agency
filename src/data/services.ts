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
  },
  {
    icon: HiOutlineChartBar,
    title: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Maximize ROI with precision-targeted paid campaigns across all major platforms.",
    longDesc: "We design and manage high-performance ad campaigns across Google, Meta, LinkedIn, and more. Every dollar is optimized through real-time bidding, A/B testing, and data-driven creative strategies.",
    features: ["Google Ads Management", "Social Media Advertising", "Retargeting Campaigns", "Conversion Rate Optimization", "A/B Testing", "Budget Optimization"],
    benefits: ["Maximized ad spend ROI", "Lower cost per acquisition", "Scalable growth channels", "Real-time performance insights"],
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile Development",
    slug: "mobile-development",
    desc: "Native and cross-platform mobile apps built for performance, engagement, and scale.",
    longDesc: "From concept to launch, we build mobile experiences that users love. Using React Native and native technologies, we deliver apps that are fast, beautiful, and built to scale across iOS and Android.",
    features: ["iOS & Android Development", "React Native Apps", "UI/UX Mobile Design", "App Store Optimization", "Push Notifications", "Analytics Integration"],
    benefits: ["Cross-platform reach", "Faster time to market", "Engaging user experiences", "Scalable architecture"],
  },
  {
    icon: HiOutlineSpeakerphone,
    title: "Social Media",
    slug: "social-media",
    desc: "Build authentic communities and amplify your brand voice across social channels.",
    longDesc: "We craft social strategies that build real communities and drive meaningful engagement. From content calendars to influencer partnerships, we make your brand impossible to ignore on every platform.",
    features: ["Content Calendar Management", "Community Management", "Influencer Partnerships", "Social Listening", "Paid Social Campaigns", "Performance Analytics"],
    benefits: ["Stronger brand awareness", "Engaged communities", "Authentic brand voice", "Measurable social ROI"],
  },
  {
    icon: HiOutlineCode,
    title: "Web Development",
    slug: "web-development",
    desc: "High-performance websites and apps built for speed, scale, and conversion.",
    longDesc: "We build fast, accessible, and beautiful websites using modern frameworks. Every project is crafted with clean code, responsive design, and conversion optimization at its core.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Integrations", "Performance Optimization", "Maintenance & Support"],
    benefits: ["Lightning-fast load times", "Higher conversion rates", "Scalable infrastructure", "Reduced maintenance costs"],
  },
  {
    icon: HiOutlineTemplate,
    title: "CMS Development",
    slug: "cms-development",
    desc: "Custom content management solutions that give your team full control over digital content.",
    longDesc: "We build and customize CMS platforms that empower your team to manage content effortlessly. Whether it's WordPress, headless CMS, or a fully custom solution, we deliver systems that scale with your business.",
    features: ["WordPress Development", "Headless CMS Solutions", "Custom Admin Panels", "Content Migration", "Plugin Development", "Multi-language Support"],
    benefits: ["Full content control", "Reduced developer dependency", "Faster content updates", "Scalable content architecture"],
  },
];
