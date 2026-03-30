
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <h4 className="text-3xl font-black tracking-tighter text-primary italic">STRENGTH UP FITNESS</h4>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Premium gym facility in Kalyan. Helping you build the best version of yourself through science-backed training and elite atmosphere.
            </p>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-lg font-black uppercase tracking-widest italic">Quick Links</h5>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#membership" className="text-muted-foreground hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-lg font-black uppercase tracking-widest italic">Connect</h5>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Kalyan, Maharashtra</li>
              <li><a href="tel:8879741567" className="text-muted-foreground hover:text-primary transition-colors">+91 88797 41567</a></li>
              <li><a href="mailto:info@strengthupfitness.com" className="text-muted-foreground hover:text-primary transition-colors">info@strengthup.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-border text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Strength Up Fitness. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-bold text-primary italic">BUILD STRENGTH. BUILD DISCIPLINE.</p>
        </div>
      </div>
    </footer>
  );
}
