
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Get in Touch</h2>
              <h3 className="text-4xl md:text-6xl font-black">LOCATE <span className="text-accent italic">US.</span></h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're located in the heart of Kalyan. Visit us for a free tour of our facilities and meet our expert trainers.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:8879741567" className="flex items-center space-x-4 group p-4 bg-secondary/20 hover:bg-primary transition-all duration-300">
                <Phone className="w-8 h-8 text-primary group-hover:text-background" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-background/80">Call Us</p>
                  <p className="text-2xl font-black group-hover:text-background">8879741567</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-secondary/20">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="text-2xl font-black">Kalyan, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-secondary/20">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Working Hours</p>
                  <p className="text-2xl font-black">6 AM - 10 PM (Mon-Sat)</p>
                </div>
              </div>
            </div>

            <Button className="h-16 px-10 text-xl font-black uppercase tracking-tighter italic w-full sm:w-auto" asChild>
              <a href="https://wa.me/918879741567">
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="h-[500px] w-full bg-secondary/30 relative">
            {/* Google Maps Embed Placeholder - would typically use an actual embed code here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.13570146468!2d73.04944917454807!3d19.23190825319808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796874e0d421d%3A0x6e9a656461942d47!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714828112345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-75 invert hue-rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
