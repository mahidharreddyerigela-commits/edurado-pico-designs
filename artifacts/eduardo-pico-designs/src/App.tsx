import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Business } from "@/components/Business";
import { Testimonials } from "@/components/Testimonials";
import { GivingBack } from "@/components/GivingBack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Collections />
      <Gallery />
      <About />
      <HowItWorks />
      <Business />
      <Testimonials />
      <GivingBack />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HomePage />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
