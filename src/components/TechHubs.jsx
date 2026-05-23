import React, { useState } from 'react';
import { Layers, Terminal, Database, Server, Cpu, Award, Zap, Code, ShieldCheck } from 'lucide-react';

export default function TechHubs() {
  const [activeTab, setActiveTab] = useState('devops');

  const categories = [
    { id: 'devops', label: 'DevOps & Cloud', icon: Terminal },
    { id: 'java', label: 'Java Full Stack', icon: Server },
    { id: 'salesforce', label: 'Salesforce Core', icon: Layers },
    { id: 'sap', label: 'SAP & ERP Enterprise', icon: Database },
    { id: 'ai', label: 'AI, ML & Big Data', icon: Cpu },
  ];

  // Deep tech specifications to showcase authority to B2B buyers
  const details = {
    devops: {
      title: "Cloud Infrastructure & Site Reliability Systems",
      description: "Scale your continuous deployment loops and infrastructure provisioning. Our cloud engineers build resilient, automated pipelines designed for SOC2-grade compliance and high availability.",
      kpi: "99.99% Deploy Uptime SLA",
      points: [
        "Infrastructure as Code: Custom modules in Terraform, OpenTofu, and Pulumi.",
        "Container Governance: High-scale Kubernetes orchestration, Docker, Helm setups.",
        "CI/CD GitOps: GitLab CI, GitHub Actions, ArgoCD, and secure automated delivery.",
        "Advanced Observability: Detailed Datadog integration, Prometheus, Grafana architectures."
      ],
      stack: ["Terraform", "Kubernetes", "AWS", "Google Cloud", "GitLab CI", "Grafana", "ArgoCD"]
    },
    java: {
      title: "Distributed Enterprise Java Architectures",
      description: "Build robust backend microservice structures capable of processing millions of concurrent transactions. Focused on low-latency caching, API gateways, and asynchronous messaging topologies.",
      kpi: "Under 50ms API response latency",
      points: [
        "Core Frameworks: Robust Spring Boot microservice networks, Spring Security, Hibernate.",
        "Stateful Streaming: High-throughput Apache Kafka event processing, RabbitMQ systems.",
        "Performance Tuning: JVM memory leak diagnostics, thread pools profiling, GC tuning.",
        "Modern Frontend Integrations: Fluid architectures bridging React (Next.js) & backend layers."
      ],
      stack: ["Spring Boot", "Hibernate", "Apache Kafka", "Redis", "React", "PostgreSQL", "Docker"]
    },
    salesforce: {
      title: "Custom CRM & Cloud Platform Engineering",
      description: "Supercharge your business sales, services, and support flows. We deploy premium Salesforce Certified Architects specializing in complex Apex architectures and enterprise-level system bridges.",
      kpi: "98% Salesforce Org Optimization",
      points: [
        "Custom Apex Logic: Native triggers, customized queueable classes, and highly scalable batch Apex.",
        "Modern Interface: Dynamic components using Lightning Web Components (LWC) and Aura.",
        "Integration Layers: Custom REST/SOAP API pipelines, MuleSoft connectors, external routing.",
        "Deployment Release: Auto-scaling CI/CD deployments using SFDX CLI and Copado setups."
      ],
      stack: ["Apex", "LWC", "Aura Components", "MuleSoft", "SFDX CLI", "GraphQL API", "Copado"]
    },
    sap: {
      title: "SAP S/4HANA & Enterprise Resource Systems",
      description: "Ensure flawless supply chains, financial records, and operational control. Our consultants specialize in seamless migration architectures, customized ABAP, and modern user experiences.",
      kpi: "Zero-Downtime HANA Migrations",
      points: [
        "Custom ABAP: Advanced Object-Oriented ABAP, Core Data Services (CDS) views, AMDP.",
        "Fiori Interface: Custom SAP Fiori application development, SAPUI5, and OData systems.",
        "Core Modules: In-depth consulting across FI/CO, MM, SD, PP, and EWM layers.",
        "Integration Bridges: Custom configurations with SAP BTP (Business Technology Platform)."
      ],
      stack: ["SAP S/4HANA", "ABAP OO", "SAP Fiori", "SAPUI5", "OData Services", "SAP BTP", "RFC Systems"]
    },
    ai: {
      title: "AI, ML, and Advanced Big Data Pipelines",
      description: "Bridge research and production models. We deliver AI/ML engineers experienced in deploying large models, real-time feature stores, and high-performance ingestion layers.",
      kpi: "10x Faster Feature Processing",
      points: [
        "Model Orchestration: Deploying and fine-tuning models using PyTorch, TensorFlow, and Hugging Face.",
        "Data Warehousing: Scalable snowflake schemas, Databricks pipelines, Apache Spark.",
        "Streaming Pipes: Real-time data ingestion using Apache Kafka and Flink.",
        "MLOps Workflows: Deployment pipelines in MLflow, Kubeflow, and SageMaker."
      ],
      stack: ["PyTorch", "Apache Spark", "Databricks", "Snowflake", "MLflow", "Kubeflow", "HuggingFace"]
    }
  };

  const activeContent = details[activeTab];

  return (
    <section id="tech-hubs" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/15 dark:bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
            Technological Mastery
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-slate-900 dark:text-white">
            Engineering Verticals Configured for Velocity
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-gray-400">
            Explore our core specializations. We maintain deep pre-vetted active talent networks across modern engineering systems.
          </p>
        </div>

        {/* Tab Selection Row (Horizontal scroll on mobile) */}
        <div className="flex justify-start md:justify-center border-b border-slate-200 dark:border-brand-glassDark pb-2 overflow-x-auto scrollbar-none gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'border-accent-purple text-accent-purple'
                    : 'border-transparent text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Content Display Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-6 md:p-10 rounded-3xl bg-slate-50 dark:bg-brand-cardDark border border-slate-200 dark:border-brand-glassDark shadow-sm">
          
          {/* Content Left (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" /> {activeContent.kpi}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold font-headline text-slate-900 dark:text-white">
              {activeContent.title}
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              {activeContent.description}
            </p>

            {/* Vetting checklist points */}
            <ul className="space-y-3 pt-2">
              {activeContent.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-0.5 rounded-full bg-accent-purple/15 text-accent-purple mt-1 flex-shrink-0">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-gray-300 font-medium leading-relaxed">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack Badges Grid Right (5 Columns) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-inner flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-emerald animate-pulse" /> Validated Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {activeContent.stack.map((stk, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-brand-glassDark border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-gray-300 font-mono"
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-6">
              <div className="text-3xs text-slate-400 font-bold uppercase tracking-wider mb-2">Talent Allocation Speed</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping"></span>
                Active pool has {15 + Math.floor(Math.random() * 10)} unallocated, cleared candidates.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
