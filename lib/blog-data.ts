export type BlogCategory = "All Posts" | "Product" | "Research" | "News" | "Company";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Exclude<BlogCategory, "All Posts">;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-cave-erp",
    title: "Getting Started with CAVE ERP: Your First 30 Days",
    excerpt: "A comprehensive guide to setting up your organization on CAVE ERP, from initial configuration to your first automated workflow.",
    content: "Full blog post content here...",
    category: "Product",
    author: "Sarah Johnson",
    authorRole: "Product Manager",
    publishedAt: "2025-01-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "ai-powered-automation-research",
    title: "The Future of AI-Powered Automation in Enterprise Software",
    excerpt: "Exploring how artificial intelligence is transforming enterprise resource planning and what it means for modern organizations.",
    content: "Full blog post content here...",
    category: "Research",
    author: "Michael Chen",
    authorRole: "Research Lead",
    publishedAt: "2025-01-12",
    readTime: 12,
    featured: true,
  },
  {
    id: "cave-erp-q4-2024-updates",
    title: "CAVE ERP Q4 2024: Major Updates and New Features",
    excerpt: "Discover the latest features, improvements, and enhancements we've added to CAVE ERP in the fourth quarter of 2024.",
    content: "Full blog post content here...",
    category: "Product",
    author: "David Okafor",
    authorRole: "Engineering Lead",
    publishedAt: "2025-01-08",
    readTime: 6,
  },
  {
    id: "enterprise-security-compliance",
    title: "Enterprise Security and Compliance: How CAVE ERP Protects Your Data",
    excerpt: "Understanding the security measures and compliance standards that make CAVE ERP a trusted choice for enterprise organizations.",
    content: "Full blog post content here...",
    category: "Company",
    author: "Amara Okafor",
    authorRole: "Security Specialist",
    publishedAt: "2025-01-05",
    readTime: 10,
  },
  {
    id: "workplace-productivity-study",
    title: "New Study: How ERP Systems Increase Workplace Productivity by 40%",
    excerpt: "Recent research reveals how organizations using integrated ERP systems like CAVE ERP see significant productivity improvements.",
    content: "Full blog post content here...",
    category: "Research",
    author: "Lisa Wang",
    authorRole: "Research Analyst",
    publishedAt: "2024-12-28",
    readTime: 7,
  },
  {
    id: "cave-partnership-announcement",
    title: "CAVE ERP Partners with Leading Technology Providers",
    excerpt: "We're excited to announce new strategic partnerships that will expand integration capabilities for CAVE ERP users worldwide.",
    content: "Full blog post content here...",
    category: "News",
    author: "James Okoro",
    authorRole: "Business Development",
    publishedAt: "2024-12-22",
    readTime: 5,
  },
  {
    id: "finance-module-deep-dive",
    title: "Mastering the Finance Module: Advanced Tips and Tricks",
    excerpt: "Learn advanced features of CAVE ERP's finance module to streamline your financial operations and reporting.",
    content: "Full blog post content here...",
    category: "Product",
    author: "Fatima Ibrahim",
    authorRole: "Product Specialist",
    publishedAt: "2024-12-18",
    readTime: 9,
  },
  {
    id: "remote-work-erp-trends",
    title: "ERP Trends 2025: Supporting Remote and Hybrid Workforces",
    excerpt: "How modern ERP systems are adapting to support distributed teams and the future of remote work management.",
    content: "Full blog post content here...",
    category: "Research",
    author: "Michael Chen",
    authorRole: "Research Lead",
    publishedAt: "2024-12-15",
    readTime: 11,
  },
  {
    id: "customer-success-story-tech",
    title: "Success Story: How TechCorp Streamlined Operations with CAVE ERP",
    excerpt: "Learn how a leading technology company reduced operational costs by 35% and improved efficiency using CAVE ERP.",
    content: "Full blog post content here...",
    category: "Company",
    author: "Grace Adeyemi",
    authorRole: "Customer Success",
    publishedAt: "2024-12-10",
    readTime: 6,
  },
  {
    id: "ai-integration-guide",
    title: "A Practical Guide to AI Integration in Your ERP Workflows",
    excerpt: "Step-by-step guide to implementing AI-powered automation in your organization's ERP processes for maximum efficiency.",
    content: "Full blog post content here...",
    category: "Product",
    author: "Sarah Johnson",
    authorRole: "Product Manager",
    publishedAt: "2024-12-05",
    readTime: 10,
  },
];

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "All Posts") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug);
}
