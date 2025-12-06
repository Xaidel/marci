"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative background element */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">Discover Your Dream Home</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Expert real estate guidance for the Pahrump market. Let Marci Metzger help you find the perfect home with
            nearly 30 years of experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore Listings
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 md:h-[500px] relative mt-12 overflow-hidden rounded-t-3xl shadow-2xl">
        <img src="/luxury-home-pahrump-desert-mountains.jpg" alt="Luxury home in Pahrump" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </section>
  )
}
