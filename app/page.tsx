"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AgentProfile } from "@/components/agent-profile"
import { ListingsSection } from "@/components/listings-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AgentProfile />
      <ListingsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
