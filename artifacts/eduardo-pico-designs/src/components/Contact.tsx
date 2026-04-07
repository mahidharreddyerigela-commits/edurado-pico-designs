import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
    toast({
      title: "Message received.",
      description: "Thank you for reaching out. We'll be in touch within 1-2 business days.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-border" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight">
              If you wish to <br />work with us, <br /><i className="text-primary font-light">reach out.</i>
            </h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-12 max-w-md">
              Whether you're planning a personal gift, a corporate order, or a one-of-a-kind creation, we'd love to hear from you. Every collaboration begins with a conversation.
            </p>

            <div className="space-y-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Email</span>
                <a href="mailto:eduardopicodesigns@gmail.com" className="text-foreground hover:text-primary transition-colors font-light" data-testid="contact-email">
                  eduardopicodesigns@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Phone</span>
                <a href="tel:+17262031225" className="text-foreground hover:text-primary transition-colors font-light">
                  (726) 203-1225
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Response Time</span>
                <span className="text-foreground font-light">Within 1-2 business days</span>
              </div>
            </div>

            {/* Social links */}
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">Follow the Studio</span>
              <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/eduardopicodesigns/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors" data-testid="social-instagram">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.facebook.com/EduardoPicoDesigns/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors" data-testid="social-facebook">
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a href="https://www.tiktok.com/@eduardo.pico.designs" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground hover:text-primary transition-colors" data-testid="social-tiktok">
                  <SiTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0 py-3 text-base"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0 py-3 text-base"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Custom order, collaboration, inquiry..."
                          className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0 py-3 text-base"
                          data-testid="input-subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project, occasion, or vision..."
                          rows={5}
                          className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none px-0 py-3 text-base"
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-primary transition-colors duration-300"
                    data-testid="btn-submit-contact"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
