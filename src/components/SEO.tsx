import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'CloudSaathi — Fractional DevOps Experts | On-Demand DevOps Services',
  description = 'Get senior DevOps engineers without the full-time hire. CI/CD, Kubernetes, cloud migration, and infrastructure management — starting in 2 weeks.',
  keywords = 'devops solutions, devops problems solved, fractional devops, devops without full-time hire, how to setup devops, devops migration help, ci/cd setup solution, infrastructure automation, devops security solutions, cloud migration services, devops incident recovery, devops compliance help, terraform setup, kubernetes deployment, aws devops solutions, azure devops help, gcp devops setup, devops cost reduction, devops automation, infrastructure as code setup, devops best practices, devops consulting solutions, cloud infrastructure optimization, devops training, devops troubleshooting, fractional devops services, on-demand devops, cloudsaathi, cloud-certified devops experts',
  image = 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
  url = 'https://cloudsaathi.com',
  type = 'website',
}: SEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CloudSaathi',
    alternateName: 'Cloud Saathi DevOps',
    description: 'CloudSaathi specializes in Fractional DevOps services, providing enterprise-grade DevOps expertise without the need for full-time hires. Our cloud-certified experts serve organizations worldwide, offering on-demand DevOps services including cloud migration, security audits, CI/CD setup, infrastructure as code, and compliance assistance with global standards.',
    url: 'https://cloudsaathi.com',
    logo: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
    image: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
    slogan: 'DevOps Expertise On Demand - No Full-Time Hire Needed',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9643389007',
      contactType: 'Customer Service',
      email: 'connect@cloudsaathi.com',
      areaServed: ['Worldwide', 'IN', 'US', 'AU', 'GB'],
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add social media links when available
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Worldwide',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
    serviceType: [
      'Fractional DevOps Services',
      'On-Demand DevOps Consulting',
      'Cloud Migration Services',
      'DevOps Infrastructure Setup',
      'Security Auditing and Hardening',
      'Incident Recovery Services',
      'Compliance Assistance',
      'DevOps Training and Consultancy',
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Kubernetes Consulting',
      'AWS DevOps',
      'Azure DevOps',
      'GCP DevOps',
    ],
    offers: {
      '@type': 'Offer',
      description: 'Fractional DevOps services - pay only for what you need, when you need it. No full-time hire required.',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CloudSaathi',
    alternateName: 'Cloud Saathi DevOps',
    url: 'https://cloudsaathi.com',
    logo: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
    description: 'CloudSaathi specializes in Fractional DevOps services, providing enterprise-grade DevOps expertise without the need for full-time hires. Our cloud-certified experts offer on-demand DevOps services for businesses worldwide.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9643389007',
      contactType: 'Customer Service',
      email: 'connect@cloudsaathi.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'DevOps',
      'Cloud Computing',
      'AWS',
      'Azure',
      'Google Cloud Platform',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'Infrastructure as Code',
      'Terraform',
      'Cloud Security',
      'Cloud Migration',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'DevOps Services',
    provider: {
      '@type': 'Organization',
      name: 'CloudSaathi',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DevOps Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'One-Time Infrastructure Setup',
            description: 'Professional DevOps infrastructure setup and configuration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Migration Services',
            description: 'Seamless cloud infrastructure migration with zero downtime',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infrastructure Auditing',
            description: 'Comprehensive security and performance audits of your infrastructure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Configuration',
            description: 'Enterprise-grade security setup and hardening',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Incident Recovery',
            description: '24/7 incident response and disaster recovery support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compliance Assistance',
            description: 'Help meeting regulatory compliance requirements',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Fencing',
            description: 'Multi-layer security implementation for your infrastructure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training & Consultancy',
            description: 'DevOps training, workshops, and strategic consultancy',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://cloudsaathi.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://cloudsaathi.com/#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: 'https://cloudsaathi.com/#services',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://cloudsaathi.com/#contact',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Fractional DevOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fractional DevOps is a service model where you get enterprise-grade DevOps expertise without hiring a full-time DevOps engineer. You pay only for the services you need, when you need them—whether it\'s one-time setup, ongoing support, or specific projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to hire a full-time DevOps engineer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, that\'s the benefit of fractional DevOps. You get professional DevOps services on-demand without the cost and commitment of a full-time hire. Perfect for organizations that need DevOps expertise but don\'t have enough workload to justify a full-time position.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive fractional DevOps services including: one-time infrastructure setup, cloud migration, infrastructure auditing, security configuration, incident recovery, compliance assistance, security fencing, and training & consultancy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does pricing work for fractional DevOps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our pricing is flexible and based on your needs. You can engage us for one-time projects, ongoing support, or a hybrid model. Pay only for what you use—no long-term commitments or full-time salary overhead.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide 24/7 support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer 24/7 incident recovery and support services. When things go wrong, we help you recover quickly to minimize downtime. We also provide ongoing monitoring and support based on your requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes CloudSaathi different from other DevOps service providers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSaathi specializes exclusively in Fractional DevOps services, meaning you get enterprise-grade expertise without hiring full-time staff. Our team includes cloud-certified experts with credentials from AWS, Azure, and GCP, with experience serving organizations across different sectors and regions worldwide. We offer flexible, on-demand services tailored to your specific needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cloud platforms do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support all major cloud platforms including AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform (GCP), and multi-cloud environments. Our team includes certified experts in each platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with cloud migration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, cloud migration is one of our core services. We help businesses migrate their infrastructure to the cloud with minimal downtime, ensuring a smooth transition and optimized cloud architecture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with mission-driven organizations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have extensive experience working with mission-driven and purpose-driven organizations worldwide. We understand the unique challenges of balancing operational excellence with meaningful impact, and offer specialized DevOps services tailored to organizations that create positive change.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I set up DevOps infrastructure without hiring a full-time engineer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSaathi offers fractional DevOps services where you can get professional DevOps infrastructure setup on-demand. We handle CI/CD pipeline configuration, cloud infrastructure setup, security configuration, and monitoring—all without needing a full-time DevOps engineer. Perfect for startups and growing businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I reduce cloud infrastructure costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our DevOps experts help optimize your cloud infrastructure costs through right-sizing resources, implementing auto-scaling, identifying unused resources, and optimizing configurations. We provide cost analysis and recommendations to reduce your monthly cloud spend while maintaining performance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I migrate to the cloud without downtime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSaathi provides zero-downtime cloud migration services. We use blue-green deployments, canary releases, and gradual migration strategies to ensure your applications remain available during the transition. Our team handles the entire migration process from planning to execution.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to implement CI/CD pipeline for my application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We set up complete CI/CD pipelines using tools like Jenkins, GitHub Actions, GitLab CI, or AWS CodePipeline. Our fractional DevOps service includes pipeline configuration, automated testing integration, deployment automation, and monitoring setup. You get a production-ready CI/CD system without hiring a full-time DevOps engineer.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to secure my cloud infrastructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our security services include infrastructure security audits, implementing security best practices, setting up firewalls and access controls, configuring encryption, implementing security monitoring, and ensuring compliance with industry standards. We provide comprehensive security hardening for your cloud infrastructure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do if my production system goes down?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSaathi offers 24/7 incident recovery services. When your system goes down, we help diagnose the issue, implement fixes, restore services, and perform post-incident analysis. Our on-demand DevOps support ensures rapid recovery to minimize business impact.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to implement Infrastructure as Code (IaC)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help implement Infrastructure as Code using Terraform, CloudFormation, or Pulumi. Our services include writing IaC templates, setting up version control, implementing best practices, and automating infrastructure provisioning. This enables consistent, repeatable, and scalable infrastructure management.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Started with Fractional DevOps Services',
    description: 'Step-by-step guide to getting started with CloudSaathi fractional DevOps services',
    image: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
    totalTime: 'PT1H',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Contact CloudSaathi',
        text: 'Reach out to CloudSaathi via email at connect@cloudsaathi.com or call +91-9643389007 to discuss your DevOps needs.',
        image: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Discuss Your Requirements',
        text: 'Share your specific DevOps requirements, whether it\'s infrastructure setup, cloud migration, security audit, or ongoing support.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Get Customized Proposal',
        text: 'Receive a tailored proposal for fractional DevOps services that fits your budget and timeline, with no full-time hire required.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Start Your Project',
        text: 'Begin working with our cloud-certified DevOps experts on-demand, paying only for the services you need.',
      },
    ],
  };

  // Review Schema for Testimonials - Multiple Reviews
  const reviewsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'CloudSaathi Fractional DevOps Services',
        provider: {
          '@type': 'Organization',
          name: 'CloudSaathi',
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Priya Sharma',
        jobTitle: 'CTO',
        worksFor: {
          '@type': 'Organization',
          name: 'Education for All Foundation',
        },
      },
      reviewBody: "We needed DevOps expertise but couldn't justify a full-time hire. CloudSaathi's fractional model gave us exactly what we needed—professional setup and ongoing support without the overhead.",
      datePublished: '2024-12-01',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'CloudSaathi Cloud Migration Services',
        provider: {
          '@type': 'Organization',
          name: 'CloudSaathi',
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Dr. Rajesh Kumar',
        jobTitle: 'Technical Lead',
        worksFor: {
          '@type': 'Organization',
          name: 'Rural Health Initiative',
        },
      },
      reviewBody: "Their one-time migration service was perfect. We got enterprise-grade DevOps setup in weeks, and now we can scale without worrying about infrastructure. No full-time DevOps engineer needed!",
      datePublished: '2024-11-15',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Service',
        name: 'CloudSaathi Security Audit Services',
        provider: {
          '@type': 'Organization',
          name: 'CloudSaathi',
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Anita Mehta',
        jobTitle: 'Founder',
        worksFor: {
          '@type': 'Organization',
          name: "Children's Hope Foundation",
        },
      },
      reviewBody: "The security audit and compliance assistance saved us months of work. We get expert DevOps support on-demand, and the cost is a fraction of what a full-time hire would cost.",
      datePublished: '2024-11-20',
    },
  ];

  // WebSite Schema with Search Action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CloudSaathi',
    alternateName: 'Cloud Saathi DevOps',
    url: 'https://cloudsaathi.com',
    description: 'Fractional DevOps services providing enterprise-grade DevOps expertise without the need for full-time hires.',
    publisher: {
      '@type': 'Organization',
      name: 'CloudSaathi',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cloudsaathi.com/gemini_generated_image_p27k3op27k3op27k-fotor-bg-remover-20251214184529.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cloudsaathi.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  // ItemList Schema for Services
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CloudSaathi DevOps Services',
    description: 'Complete list of fractional DevOps services offered by CloudSaathi',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'One-Time Infrastructure Setup',
          description: 'Professional DevOps infrastructure setup and configuration',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Cloud Migration Services',
          description: 'Seamless cloud infrastructure migration with zero downtime',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Infrastructure Auditing',
          description: 'Comprehensive security and performance audits of your infrastructure',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Security Configuration',
          description: 'Enterprise-grade security setup and hardening',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Incident Recovery',
          description: '24/7 incident response and disaster recovery support',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'Compliance Assistance',
          description: 'Help meeting regulatory compliance requirements',
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
        item: {
          '@type': 'Service',
          name: 'Security Fencing',
          description: 'Multi-layer security implementation for your infrastructure',
        },
      },
      {
        '@type': 'ListItem',
        position: 8,
        item: {
          '@type': 'Service',
          name: 'Training & Consultancy',
          description: 'DevOps training, workshops, and strategic consultancy',
        },
      },
    ],
  };

  // Course Schema for Training Services
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'DevOps Training & Consultancy',
    description: 'Comprehensive DevOps training, workshops, and strategic consultancy services by CloudSaathi cloud-certified experts',
    provider: {
      '@type': 'Organization',
      name: 'CloudSaathi',
      url: 'https://cloudsaathi.com',
    },
    courseCode: 'CS-DEVOPS-TRAINING',
    educationalLevel: 'Professional',
    teaches: [
      'DevOps Best Practices',
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Cloud Platform Management',
      'Security Configuration',
      'Kubernetes Administration',
    ],
    inLanguage: 'en',
  };

  // PriceRange Schema
  const priceRangeSchema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    price: '0',
    priceCurrency: 'USD',
    valueAddedTaxIncluded: true,
    description: 'Flexible pricing based on project requirements. Contact us for a customized quote.',
  };

  // Solution-Oriented Schema for AI Crawlers
  const solutionSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DevOps Solutions Provided by CloudSaathi',
    description: 'Comprehensive list of DevOps problems and solutions offered by CloudSaathi',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Solution',
          name: 'DevOps Setup Without Full-Time Hire',
          description: 'Solution: Get professional DevOps infrastructure setup, CI/CD pipelines, and cloud configuration without hiring a full-time DevOps engineer. CloudSaathi provides fractional DevOps services for one-time setup projects.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Solution',
          name: 'Cloud Migration Solution',
          description: 'Solution: Migrate your infrastructure to AWS, Azure, or GCP with zero downtime. CloudSaathi handles the entire migration process including planning, execution, and optimization.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Solution',
          name: 'CI/CD Pipeline Setup',
          description: 'Solution: Set up automated CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI, or cloud-native tools. Includes automated testing, deployment automation, and monitoring.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Solution',
          name: 'Infrastructure Security Hardening',
          description: 'Solution: Secure your cloud infrastructure with security audits, firewall configuration, access controls, encryption setup, and compliance assistance. Protect your infrastructure from threats.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Solution',
          name: 'Production Incident Recovery',
          description: 'Solution: 24/7 incident response and disaster recovery services. When your system goes down, CloudSaathi helps diagnose issues, implement fixes, and restore services quickly.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Solution',
          name: 'Infrastructure as Code Implementation',
          description: 'Solution: Implement Infrastructure as Code using Terraform, CloudFormation, or Pulumi. Automate infrastructure provisioning, ensure consistency, and enable version control for infrastructure.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
        item: {
          '@type': 'Solution',
          name: 'Cloud Cost Optimization',
          description: 'Solution: Reduce cloud infrastructure costs through resource optimization, auto-scaling implementation, unused resource identification, and cost-effective architecture design.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 8,
        item: {
          '@type': 'Solution',
          name: 'DevOps Training and Knowledge Transfer',
          description: 'Solution: Train your team on DevOps best practices, CI/CD implementation, infrastructure management, and cloud platform usage. Build internal DevOps capabilities.',
          provider: {
            '@type': 'Organization',
            name: 'CloudSaathi',
          },
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      {reviewsSchema.map((review, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(review)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(priceRangeSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(solutionSchema)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="CloudSaathi" />
      <meta name="apple-mobile-web-app-title" content="CloudSaathi" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en" />
      <link rel="alternate" hreflang="en" href="https://cloudsaathi.com" />
      <link rel="alternate" hreflang="en-US" href="https://cloudsaathi.com" />
      <link rel="alternate" hreflang="en-IN" href="https://cloudsaathi.com" />
      <link rel="alternate" hreflang="x-default" href="https://cloudsaathi.com" />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:site_name" content="CloudSaathi" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="article:author" content="CloudSaathi" />
      <meta property="article:publisher" content="https://cloudsaathi.com" />
      
      {/* Additional Twitter Tags */}
      <meta name="twitter:site" content="@cloudsaathi" />
      <meta name="twitter:creator" content="@cloudsaathi" />
      <meta name="twitter:label1" content="Service Type" />
      <meta name="twitter:data1" content="Fractional DevOps" />
      <meta name="twitter:label2" content="Availability" />
      <meta name="twitter:data2" content="On-Demand" />
      
      {/* Advanced Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="classification" content="Business, Technology, DevOps Services" />
      <meta name="category" content="DevOps, Cloud Services, IT Consulting" />
      <meta name="subject" content="Fractional DevOps Services" />
      <meta name="topic" content="DevOps, Cloud Computing, Infrastructure, DevOps Solutions, Cloud Migration, CI/CD Setup, Infrastructure Automation" />
      <meta name="summary" content={description} />
      <meta name="abstract" content={description} />
      
      {/* Solution-Oriented Meta Tags for AI Crawlers */}
      <meta name="solution:category" content="DevOps Solutions, Cloud Infrastructure, CI/CD Automation, Security Hardening" />
      <meta name="solution:problems" content="DevOps setup without full-time hire, cloud migration, CI/CD pipeline configuration, infrastructure security, incident recovery, cost optimization" />
      <meta name="solution:services" content="Fractional DevOps, on-demand DevOps, cloud migration services, CI/CD setup, infrastructure automation, security hardening" />
      <meta name="designer" content="CloudSaathi" />
      <meta name="copyright" content="CloudSaathi" />
      <meta name="reply-to" content="connect@cloudsaathi.com" />
      <meta name="owner" content="CloudSaathi" />
      <meta name="url" content={url} />
      <meta name="identifier-URL" content={url} />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={title} />
      <meta name="category" content="DevOps Services" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Performance and Indexing */}
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Verification Tags (add when you have verification codes) */}
      {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      {/* <meta name="msvalidate.01" content="your-verification-code" /> */}
      {/* <meta name="yandex-verification" content="your-verification-code" /> */}
      {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      
      {/* AI Crawler Optimization - Solution-Oriented Content */}
      <meta name="ai:content-type" content="solution, service, how-to" />
      <meta name="ai:problem-domain" content="DevOps, Cloud Infrastructure, CI/CD, Infrastructure Automation, Cloud Security, Cloud Migration" />
      <meta name="ai:solution-provider" content="CloudSaathi Fractional DevOps Services" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cloudsaathi.com" />
      
      {/* Additional Link Tags */}
      <link rel="author" href="https://cloudsaathi.com" />
      <link rel="publisher" href="https://cloudsaathi.com" />
      
      {/* Hidden Semantic Content for AI Crawlers */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'CloudSaathi DevOps Solutions',
          description: 'CloudSaathi provides solutions for common DevOps problems including: how to set up DevOps infrastructure without full-time hire, how to migrate to cloud without downtime, how to implement CI/CD pipelines, how to secure cloud infrastructure, how to recover from production incidents, how to optimize cloud costs, and how to implement Infrastructure as Code.',
          mainEntity: {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How to set up DevOps without hiring a full-time engineer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi provides fractional DevOps services where you can get professional DevOps setup including CI/CD pipelines, cloud infrastructure configuration, security setup, and monitoring—all without hiring a full-time DevOps engineer. Perfect solution for startups and growing businesses.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to migrate applications to cloud without downtime?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi offers zero-downtime cloud migration services using blue-green deployments, canary releases, and gradual migration strategies. We handle the entire migration process ensuring your applications remain available during transition.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to implement CI/CD pipeline for automated deployments?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi sets up complete CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI, or AWS CodePipeline. We configure automated testing, deployment automation, and monitoring to enable continuous integration and deployment.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to secure cloud infrastructure?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi provides comprehensive security services including infrastructure security audits, firewall configuration, access control setup, encryption implementation, security monitoring, and compliance assistance.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to recover from production system failures?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi offers 24/7 incident recovery services. When your production system goes down, we help diagnose issues, implement fixes, restore services, and perform post-incident analysis to prevent future occurrences.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to reduce cloud infrastructure costs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi helps optimize cloud costs through resource right-sizing, auto-scaling implementation, unused resource identification, cost-effective architecture design, and monthly spend analysis.',
                },
              },
              {
                '@type': 'Question',
                name: 'How to implement Infrastructure as Code?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'CloudSaathi implements Infrastructure as Code using Terraform, CloudFormation, or Pulumi. We write IaC templates, set up version control, implement best practices, and automate infrastructure provisioning for consistent and scalable infrastructure management.',
                },
              },
            ],
          },
        })}
      </script>
    </Helmet>
  );
}

