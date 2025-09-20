// Centralized stats data module
// This replaces hardcoded statistics throughout the application

export const globalStats = {
  clientsSaved: '2,400+',
  clientsServed: '50+',
  projectsCompleted: '75+',
  successRate: '100%',
  avgCSATImprovement: '15%',
  avgTimeReduction: '40%',
  propertiesManaged: '200+',
  orderVolumeHandled: '10x'
};

export const segmentStats = {
  customerSuccess: {
    category: 'Customer Success',
    metrics: [
      { 
        label: 'Average CSAT Improvement', 
        value: '15%', 
        description: 'Across 20+ customer success projects' 
      },
      { 
        label: 'Support Ticket Reduction', 
        value: '35%', 
        description: 'Through process optimization and automation' 
      },
      { 
        label: 'Team Productivity Increase', 
        value: '50%', 
        description: 'Via workflow improvements and training' 
      },
      { 
        label: 'Knowledge Base Usage', 
        value: '+120%', 
        description: 'Improved documentation and accessibility' 
      }
    ]
  },
  ecommerce: {
    category: 'E-commerce Operations',
    metrics: [
      { 
        label: 'Order Volume Growth Handled', 
        value: '3-10x', 
        description: 'Successfully scaled operations for growth' 
      },
      { 
        label: 'Resolution Time Reduction', 
        value: '40%', 
        description: 'Through automation and process optimization' 
      },
      { 
        label: 'Customer Satisfaction', 
        value: '4.8/5', 
        description: 'Maintained during high-growth periods' 
      },
      { 
        label: 'Operational Cost Savings', 
        value: '25%', 
        description: 'Through process streamlining and automation' 
      }
    ]
  },
  propertyManagement: {
    category: 'Property Management',
    metrics: [
      { 
        label: 'Occupancy Rate Maintained', 
        value: '95%+', 
        description: 'Across 200+ properties managed' 
      },
      { 
        label: 'Maintenance Cost Reduction', 
        value: '30%', 
        description: 'Through predictive maintenance and vendor optimization' 
      },
      { 
        label: 'Tenant Satisfaction', 
        value: '4.7/5', 
        description: 'Improved communication and response times' 
      },
      { 
        label: 'Revenue Optimization', 
        value: '18%', 
        description: 'Through strategic pricing and occupancy management' 
      }
    ]
  }
};

export const impactHighlights = [
  {
    metric: '50+',
    label: 'Clients Served',
    description: 'Across multiple industries and business functions'
  },
  {
    metric: '75+',
    label: 'Projects Completed',
    description: 'Delivering measurable results and operational improvements'
  },
  {
    metric: '100%',
    label: 'Success Rate',
    description: 'Every project has achieved or exceeded initial objectives'
  },
  {
    metric: '2,400+',
    label: 'Hours Saved',
    description: 'For client teams through process optimization'
  }
];

export const trustMetrics = {
  certifications: [
    'Certified Customer Success Manager',
    'Lean Six Sigma Green Belt',
    'Project Management Professional (PMP)'
  ],
  industries: [
    'SaaS & Technology',
    'E-commerce & Retail',
    'Real Estate & Property Management',
    'Healthcare & Life Sciences',
    'Financial Services'
  ],
  companySize: [
    'Startups (10-50 employees)',
    'Scale-ups (50-200 employees)', 
    'Mid-market (200-1000 employees)',
    'Enterprise (1000+ employees)'
  ]
};