import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';

function FloatingAI() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#7c3aed" wireframe />
      </mesh>
    </Float>
  );
}

export default function LandingPage() {
  const formLink = "https://your-google-form-link-here";

  const days = [
    "Intro to AI & Prompting",
    "Python for AI Basics",
    "Data Handling & Visualization",
    "Mini AI Project Build",
    "Machine Learning Basics",
    "Real-world AI Use Cases",
    "Final Project + Certificate"
  ];

  const rewards = [
    "Completion Certificate",
    "Leaderboard Ranking",
    "Top Performer Badge",
    "Project Showcase",
    "Internship Opportunities"
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-16 items-center">

        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            🚀 7-Day Free AI Skills Challenge
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Join students across Andhra Pradesh & Telangana and build real AI skills in just 7 days.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>✅ No experience required</p>
            <p>✅ Daily hands-on AI tasks</p>
            <p>✅ Real projects + certificate</p>
            <p>✅ Leaderboard + gamification</p>
          </div>

          <a
            href={formLink}
            className="inline-block mt-6 bg-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500"
          >
            🚀 Register Now Free
          </a>
        </motion.div>

        {/* 3D VISUAL */}
        <div className="h-[400px] md:h-[500px]">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={1} />
            <pointLight position={[2, 2, 2]} />
            <Stars />
            <FloatingAI />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="px-8 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Build Skills", desc: "Learn AI from zero to project level" },
          { title: "Get Certified", desc: "Earn verified completion certificate" },
          { title: "Stand Out", desc: "Boost resume with real AI projects" },
        ].map((i, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="text-gray-400 mt-2">{i.desc}</p>
          </div>
        ))}
      </section>

      {/* 7 DAY PLAN */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">📅 7-Day Learning Plan</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {days.map((d, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-xl">
              <p className="text-indigo-400">Day {i + 1}</p>
              <p className="text-white font-semibold">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GAMIFICATION */}
      <section className="px-8 py-16 bg-gradient-to-r from-purple-900 to-black">
        <h2 className="text-3xl font-bold text-center mb-8">🎮 Gamified Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/40 p-6 rounded-xl">
            <h3 className="font-semibold text-xl">Leaderboard System</h3>
            <p className="text-gray-300 mt-2">Compete with students across AP & Telangana</p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl">
            <h3 className="font-semibold text-xl">Daily Streaks</h3>
            <p className="text-gray-300 mt-2">Stay consistent and climb rankings</p>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">🏆 Rewards</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {rewards.map((r, i) => (
            <span key={i} className="bg-indigo-600 px-4 py-2 rounded-full">
              {r}
            </span>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-8 py-16 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-8">⭐ Why Students Join</h2>
        <div className="text-center text-gray-300 max-w-2xl mx-auto">
          "I learned more in 7 days than my entire semester" – Sample Student
          <br /><br />
          "Best AI challenge for beginners" – College Student Review
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center px-8 py-20">
        <h2 className="text-4xl font-bold">Ready to Start Your AI Journey?</h2>
        <p className="text-gray-400 mt-3">Join 1000+ students already registering</p>

        <a
          href={formLink}
          className="inline-block mt-6 bg-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-500"
        >
          🚀 Register Now
        </a>
      </section>

    </div>
  );
}
