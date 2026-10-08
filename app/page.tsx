"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const experience = [
  {
    company: "Bell Canada",
    role: "Data Engineer – AI & GenAI Platform",
    dates: "JUL 2024 — PRESENT",
  },
  {
    company: "CIBC",
    role: "Data Engineer – AI/ML",
    dates: "MAY 2022 — JUN 2024",
  },
  {
    company: "Manulife",
    role: "Data Engineer",
    dates: "JAN 2021 — MAR 2022",
  },
];

const skills = [
  {
    title: "Languages & Querying",
    items: ["Python", "SQL", "Spark SQL"],
  },
  {
    title: "Data Engineering",
    items: ["PySpark", "Apache Spark", "ETL / ELT", "Data Quality"],
  },
  {
    title: "Streaming & Search",
    items: ["Apache Kafka", "Elasticsearch", "Vector Search", "Semantic Retrieval"],
  },
  {
    title: "Cloud & Platforms",
    items: ["Microsoft Azure", "Databricks", "REST APIs"],
  },
  {
    title: "AI Data Workflows",
    items: ["RAG", "GenAI Pipelines", "Analytics", "AI-driven Workflows"],
  },
];

const projects = [
  {
    number: "01",
    title: "Enterprise RAG Knowledge Pipeline",
    description:
      "A retrieval-ready ingestion pipeline for knowledge articles, troubleshooting guides, service policies, product documentation, and historical support cases. Includes chunking, metadata enrichment, deduplication, indexing, and incremental refresh.",
    stack: ["Python", "Elasticsearch", "Vector Search", "Semantic Search", "RAG", "REST APIs"],
    accent: true,
  },
  {
    number: "02",
    title: "Real-Time Kafka Streaming Pipeline",
    description:
      "Near real-time pipelines for customer, service, order, and support events, built to support operational workflows and retrieval applications.",
    stack: ["Apache Kafka", "Python", "PySpark", "Spark SQL", "Azure"],
  },
  {
    number: "03",
    title: "Azure ETL/ELT Data Pipeline",
    description:
      "Scalable pipelines that ingest, transform, validate, and curate customer, billing, order, provisioning, and support data for analytics and AI applications.",
    stack: ["Azure", "Python", "PySpark", "Spark SQL", "ETL / ELT"],
  },
  {
    number: "04",
    title: "Fraud Risk & Anomaly Detection Pipeline",
    description:
      "Data workflows for KYC, customer, account, and transaction data, with cleansing, enrichment, feature engineering, and quality checks for fraud-risk and anomaly-detection use cases.",
    stack: ["Python", "PySpark", "SQL", "Kafka", "PostgreSQL", "Machine Learning"],
  },
];

const certifications = [
  "Databricks Certified Data Engineer Professional",
  "Databricks Certified Generative AI Engineer Associate",
];

const enter = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071018]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-[7%]">
          <a href="#top" className="font-mono text-xs font-bold tracking-[0.18em] sm:text-sm">
            <span className="text-white">MANISH</span>
            <span className="text-sky-400"> / </span>
            <span className="hidden text-slate-400 sm:inline">AI DATA ENGINEER</span>
          </a>

          <div className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.12em] xl:flex">
            {navigation.map(([label, id], index) => (
              <a key={id} href={`#${id}`} className="text-slate-300 transition hover:text-white">
                <span className="mr-1 text-sky-400">0{index + 1}</span>{label.toUpperCase()}
              </a>
            ))}
            <a
              href="https://github.com/Reddy-datahub"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-4 py-3 text-white transition hover:border-sky-400/60"
            >
              GITHUB ↗
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="border border-white/15 px-4 py-2 font-mono text-xs tracking-widest xl:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? "CLOSE ×" : "MENU ☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#071018] px-[7%] py-5 xl:hidden">
            <div className="flex flex-col gap-5 font-mono text-xs tracking-widest">
              {navigation.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-slate-300">
                  {label.toUpperCase()} <span className="text-sky-400">↘</span>
                </a>
              ))}
              <a href="https://github.com/Reddy-datahub" target="_blank" rel="noopener noreferrer" className="text-white">
                GITHUB ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-[7%] pb-20 pt-32 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial="hidden" animate="visible" variants={enter} transition={{ duration: 0.7 }}>
          <p className="mb-7 font-mono text-xs tracking-[0.32em] text-sky-400 sm:text-sm">
            DATA PLATFORMS · STREAMING · GENAI
          </p>
          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Manish<br />Reddy<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-8 font-mono text-sm tracking-[0.18em] text-slate-500">&gt; ROLE.TITLE</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            AI Data Engineer <span className="text-sky-400">/</span>{" "}
            <span className="text-slate-400">Data Platforms & GenAI</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            5+ years building scalable data platforms, ETL/ELT pipelines, and real-time streaming solutions. I work across Python, PySpark, Spark SQL, Kafka, Azure, and Databricks, with a focus on reliable data and AI-ready workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-sky-500 px-6 py-4 font-mono text-xs font-bold tracking-widest text-white transition hover:bg-sky-400">
              EXPLORE PROJECTS ↓
            </a>
            <a href="#contact" className="border border-white/20 px-6 py-4 font-mono text-xs font-bold tracking-widest text-white transition hover:border-sky-400/70">
              GET IN TOUCH ↗
            </a>
            <a href="https://www.linkedin.com/in/manish-g-6733297" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-6 py-4 font-mono text-xs font-bold tracking-widest text-white transition hover:border-sky-400/70">
              LINKEDIN ↗
            </a>
            <a href="/Manish-Reddy-Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-6 py-4 font-mono text-xs font-bold tracking-widest text-white transition hover:border-sky-400/70">
              RESUME PDF ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="border border-sky-400/40 bg-slate-950/70 p-3 shadow-[0_0_70px_rgba(14,165,233,0.12)]">
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-white/10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(14,165,233,0.2),transparent_60%),linear-gradient(145deg,#101d29,#071018_65%)] p-6 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em]">
                <span className="text-emerald-400">● DATA SYSTEMS</span>
                <span className="text-slate-500">PROFILE / 01</span>
              </div>
              <div className="self-center text-center">
                <div className="font-mono text-8xl font-bold tracking-[-0.12em] text-white/90 sm:text-9xl">
                  M<span className="text-sky-400">.</span>R
                </div>
                <p className="mt-5 font-mono text-xs tracking-[0.3em] text-slate-400">AI · DATA · ENGINEERING</p>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-5 font-mono text-[10px] tracking-[0.16em]">
                <span className="max-w-[65%] text-slate-300">PYTHON / SPARK / KAFKA / AZURE</span>
                <span className="text-sky-400">5+ YRS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section id="about" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="01" label="ABOUT" title={<>Engineering data<br /><span className="text-slate-500">for what comes next.</span></>} />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>I&apos;m an AI Data Engineer with 5+ years of experience building scalable data platforms, ETL/ELT pipelines, and real-time streaming solutions.</p>
              <p className="text-slate-400">My work spans data quality, analytics, and AI-driven workflows. I also build the data foundations for RAG, vector search, semantic retrieval, and GenAI applications.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Metric value="5+" label="YEARS EXPERIENCE" />
              <Metric value="03" label="DATA TEAMS" />
              <Metric value="REAL-TIME" label="STREAMING DATA" />
              <Metric value="AI-READY" label="DATA PIPELINES" />
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-y border-white/10 py-6 font-mono text-xs tracking-[0.16em] text-slate-500">
            {["PYTHON", "PYSPARK", "SPARK SQL", "KAFKA", "AZURE", "DATABRICKS", "RAG", "VECTOR SEARCH"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="02" label="EXPERIENCE" title={<>Building reliable<br /><span className="text-slate-500">data foundations.</span></>} />
          <div className="space-y-4">
            {experience.map((job, index) => (
              <article key={job.company} className="grid gap-5 border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:grid-cols-[90px_1fr_auto] md:items-center">
                <span className="font-mono text-xs tracking-[0.2em] text-sky-400">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">{job.company}</h3>
                  <p className="mt-2 text-slate-400">{job.role}</p>
                </div>
                <p className="font-mono text-xs tracking-[0.14em] text-slate-500">{job.dates}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="03" label="SKILLS" title={<>Tools for the<br /><span className="text-slate-500">whole data lifecycle.</span></>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <article key={group.title} className="border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                <p className="font-mono text-xs tracking-[0.24em] text-sky-400">0{index + 1} / SKILLSET</p>
                <h3 className="mt-4 text-xl font-semibold">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="border border-white/10 px-3 py-2 font-mono text-[11px] text-slate-300">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="04" label="PROJECTS" title={<>Selected data<br /><span className="text-slate-500">systems.</span></>} />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className={`border p-6 sm:p-8 ${project.accent ? "border-sky-400/30 bg-sky-400/[0.035]" : "border-white/10 bg-white/[0.02]"}`}>
                <p className="font-mono text-xs tracking-[0.24em] text-sky-400">PROJECT {project.number}</p>
                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="border border-white/10 px-3 py-2 font-mono text-[10px] tracking-wide text-slate-300">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="certifications" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="05" label="CERTIFICATIONS" title={<>Learning that<br /><span className="text-slate-500">keeps moving.</span></>} />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <article key={certification} className="flex gap-5 border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <span className="font-mono text-xs tracking-widest text-sky-400">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug">{certification}</h3>
                  <p className="mt-3 font-mono text-xs tracking-[0.18em] text-slate-500">DATABRICKS · 2026</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" className="border-t border-white/5 px-[7%] py-24 sm:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={enter} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="06" label="CONTACT" title={<>Let&apos;s build<br /><span className="text-slate-500">something useful.</span></>} />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-slate-400">Interested in data engineering, streaming platforms, or AI-ready data systems? Get in touch.</p>
            <div className="space-y-3">
              <ContactLink label="EMAIL" value="reddy.mg99@gmail.com" href="mailto:reddy.mg99@gmail.com" />
              <ContactLink label="LINKEDIN" value="Connect on LinkedIn ↗" href="https://www.linkedin.com/in/manish-g-6733297" external />
              <ContactLink label="GITHUB" value="Reddy-datahub ↗" href="https://github.com/Reddy-datahub" external />
              <ContactLink label="RESUME" value="View resume PDF ↗" href="/Manish-Reddy-Resume.pdf" external />
            </div>
          </div>
          <footer className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.18em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>MANISH REDDY / AI DATA ENGINEER</span>
            <span>PORTFOLIO · 2026</span>
          </footer>
        </div>
      </motion.section>
    </main>
  );
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: ReactNode }) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="mb-4 font-mono text-xs tracking-[0.3em] text-sky-400">{number} / {label}</p>
      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{title}</h2>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <p className="text-2xl font-bold sm:text-3xl">{value}</p>
      <p className="mt-3 font-mono text-[9px] tracking-[0.16em] text-slate-500">{label}</p>
    </div>
  );
}

function ContactLink({ label, value, href, external = false }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="block border border-white/10 p-5 transition hover:border-sky-400/50">
      <p className="font-mono text-[10px] tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-2 text-base text-slate-100">{value}</p>
    </a>
  );
}
