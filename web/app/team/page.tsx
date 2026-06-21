"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Code,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Sparkles,
  Twitter,
  Users as UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TeamPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      name: "Deubaybe Dounia",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with 15+ years in African tech ecosystem from Chad",
      image: "/dounia.jpg",
      linkedin: "#",
      twitter: "#",
      email: "dounia@byte.com",
      location: "N'Djamena, Chad",
      specialty: "Leadership & Strategy",
      icon: Award,
      achievements: ["Forbes 30 Under 30", "Tech Leader Award 2024"],
    },
    {
      name: "Emmanuel Adoum",
      role: "Co-Founder & CTO",
      bio: "Cloud architect and AI specialist from Chad",
      image: "/emmanuel-jpg.jpg",
      linkedin: "#",
      twitter: "#",
      email: "emmanuel@byte.com",
      location: "N'Djamena, Chad",
      specialty: "Cloud & AI Architecture",
      icon: Code,
      achievements: ["AWS Certified", "AI Innovation Award"],
    },
    {
      name: "Sampebgo Clement",
      role: "Co-Founder & Database Administrator",
      bio: "Product strategist focused on African market needs from BF",
      image: "/clement.jpg",
      linkedin: "#",
      twitter: "#",
      email: "clement@byte.com",
      location: "Ouagadougou, Burkina Faso",
      specialty: "Product Strategy",
      icon: Briefcase,
      achievements: ["Product Excellence Award", "Innovation Leader"],
    },
    {
      name: "Soaliye Albert",
      role: "Co-Founder & Lead Engineer",
      bio: "Full-stack developer passionate about scalable systems from Niger",
      image: "/albert.jpg",
      linkedin: "#",
      twitter: "#",
      email: "albert@byte.com",
      location: "Niamey, Niger",
      specialty: "Full-Stack Development",
      icon: Code,
      achievements: [
        "Senior Developer Certification",
        "Open Source Contributor",
      ],
    },
    {
      name: "Fatima Al-Rashid",
      role: "Head of Design",
      bio: "UX/UI designer creating beautiful African-inspired interfaces",
      image: "/professional-african-woman-designer.jpg",
      linkedin: "#",
      twitter: "#",
      email: "fatima@byte.com",
      location: "Lagos, Nigeria",
      specialty: "UX/UI Design",
      icon: Palette,
      achievements: ["Design Excellence Award", "Featured in Design Weekly"],
    },
    {
      name: "Kofi Asante",
      role: "Business Development",
      bio: "Strategic partnerships and market expansion specialist",
      image: "/professional-african-man-business.jpg",
      linkedin: "#",
      twitter: "#",
      email: "kofi@byte.com",
      location: "Accra, Ghana",
      specialty: "Business Strategy",
      icon: UsersIcon,
      achievements: ["Partnership Excellence", "Market Expansion Leader"],
    },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <Navbar isScrolled={isScrolled} />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
                Our Amazing Team
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
            >
              Talented professionals from across Africa, dedicated to
              transforming the tech landscape
              <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { value: "6", label: "Team Members" },
                { value: "5", label: "Countries" },
                { value: "3+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={index}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">
                  Want to Join Our Team?
                </h2>
                <p className="text-foreground/60 mb-8">
                  We&apos;re always looking for talented individuals who are
                  passionate about African tech innovation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all"
                >
                  View Open Positions →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Team Card Component with proper typing
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
  location: string;
  specialty: string;
  icon: typeof Code;
  achievements: string[];
}

function TeamCard({
  member,
  index,
  setHoveredCard,
}: {
  member: TeamMember;
  index: number;
  setHoveredCard: (index: number | null) => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="perspective-1000"
    >
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of Card */}
          <div
            className={`${isFlipped ? "invisible" : "visible"}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Image Section */}
            <div className="relative h-80 overflow-hidden bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

              {/* Icon Badge */}
              <motion.div
                className="absolute top-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-xl border border-border/50"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <member.icon className="w-5 h-5 text-accent" />
              </motion.div>

              {/* Location Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1 border border-border/50"
              >
                <MapPin className="w-3 h-3 text-accent" />
                {member.location}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <motion.h3
                className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors"
                whileHover={{ x: 4 }}
              >
                {member.name}
              </motion.h3>

              <p className="text-primary font-semibold mb-2 text-sm">
                {member.role}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <span className="text-xs text-foreground/40">
                  {member.specialty}
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
              </div>

              <p className="text-foreground/60 text-sm mb-5 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 p-2.5 rounded-xl bg-gradient-to-r from-[#0077B5]/10 to-[#0077B5]/5 hover:from-[#0077B5]/20 hover:to-[#0077B5]/10 border border-[#0077B5]/20 hover:border-[#0077B5]/40 transition-all flex items-center justify-center gap-2 group/social"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5] group-hover/social:scale-110 transition-transform" />
                </motion.a>

                <motion.a
                  href={member.twitter}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 p-2.5 rounded-xl bg-gradient-to-r from-[#1DA1F2]/10 to-[#1DA1F2]/5 hover:from-[#1DA1F2]/20 hover:to-[#1DA1F2]/10 border border-[#1DA1F2]/20 hover:border-[#1DA1F2]/40 transition-all flex items-center justify-center gap-2 group/social"
                >
                  <Twitter className="w-4 h-4 text-[#1DA1F2] group-hover/social:scale-110 transition-transform" />
                </motion.a>

                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 p-2.5 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border border-accent/20 hover:border-accent/40 transition-all flex items-center justify-center gap-2 group/social"
                >
                  <Mail className="w-4 h-4 text-accent group-hover/social:scale-110 transition-transform" />
                </motion.a>
              </div>

              {/* Tap to flip indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-4 text-center text-xs text-foreground/40 flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                Click to see achievements
              </motion.div>
            </div>
          </div>

          {/* Back of Card */}
          <div
            className={`absolute inset-0 ${
              isFlipped ? "visible" : "invisible"
            } bg-card p-6 flex flex-col justify-center`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isFlipped ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Award className="w-10 h-10 text-accent" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-6">Achievements</h3>

              <div className="space-y-4">
                {member.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ⭐
                    </motion.div>
                    <span className="text-sm font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="mt-6 px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium"
              >
                ← Back
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl"
          animate={{
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
