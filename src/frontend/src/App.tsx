import { ExternalLink, Heart, Instagram, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiPinterest } from "react-icons/si";

const products = [
  {
    id: 1,
    image: "/assets/generated/product-bookmagnet.dim_400x400.jpg",
    name: "Book Magnet Bookmarks 🧲",
    desc: "Magnetic page markers for book lovers",
    price: "₹499",
    category: "Desk Essentials",
    url: "https://amzn.in/d/09aqi9hZ",
  },
  {
    id: 2,
    image: "/assets/generated/product-calculator.dim_400x400.jpg",
    name: "Cute Pocket Calculator 🔢",
    desc: "Compact and stylish for students",
    price: "₹349",
    category: "Desk Essentials",
    url: "https://amzn.in/d/0epMqe23",
  },
  {
    id: 3,
    image: "/assets/generated/product-sushi-cat.dim_400x400.jpg",
    name: "Sushi Cat Mochi Squishy 🍣",
    desc: "Squeeze away stress with kawaii cat toy",
    price: "₹199",
    category: "Cute Decor",
    url: "https://amzn.in/d/0hB2DOce",
  },
  {
    id: 4,
    image: "/assets/generated/product-resin-charms.dim_400x400.jpg",
    name: "Mixed Resin Anime Charms 🎀",
    desc: "DIY jewelry making beads & flatback charms",
    price: "₹299",
    category: "Cute Decor",
    url: "https://amzn.in/d/06TVLJEH",
  },
  {
    id: 5,
    image: "/assets/generated/product-touch-lamp.dim_400x400.jpg",
    name: "MPROW Touch Night Lamp 🌙",
    desc: "Rechargeable USB-C LED lamp, 3 light modes",
    price: "₹249",
    category: "Daily Use Items",
    url: "https://amzn.in/d/0cNUKlpP",
  },
  {
    id: 6,
    image: "/assets/generated/product-drawer-organiser.dim_400x400.jpg",
    name: "3-Compartment Drawer Organiser 🗂️",
    desc: "White plastic desk storage for stationery",
    price: "₹179",
    category: "Desk Essentials",
    url: "https://amzn.in/d/0d1Ls8Py",
  },
  {
    id: 7,
    image: "/assets/generated/product-mindfulness-bookmarks.dim_400x400.jpg",
    name: "Mindfulness Bookmarks Set of 5 🌿",
    desc: "Laminated motivational quote bookmarks",
    price: "₹799",
    category: "Desk Essentials",
    url: "https://amzn.in/d/0bYzoWQG",
  },
  {
    id: 8,
    image: "/assets/generated/product8-art-markers.dim_600x600.jpg",
    name: "Dual Tip Art Markers 24 Colors 🎨",
    desc: "Chisel & fine tip, water-based, with carry bag",
    price: "₹399",
    category: "Desk Essentials",
    url: "https://amzn.in/d/01oEyMyD",
  },
  {
    id: 9,
    image: "/assets/generated/product-pencil-case-purple.dim_400x400.jpg",
    name: "Canvas Pencil Case Purple 🎒",
    desc: "6-layer hangable pouch, 3 compartments, large capacity",
    price: "₹549",
    category: "Desk Essentials",
    url: "https://amzn.in/d/056i5iZl",
  },
  {
    id: 10,
    image: "/assets/generated/product-cat-paw-highlighter.dim_400x400.jpg",
    name: "Cat Paw Highlighter Pens 🐾",
    desc: "12 colors, dual-tip 2-in-1, pack of 6",
    price: "₹299",
    category: "Desk Essentials",
    url: "https://amzn.in/d/02IlyppW",
  },
];

const categories = [
  { label: "All", emoji: "💕" },
  { label: "Desk Essentials", emoji: "✏️" },
  { label: "Cute Decor", emoji: "🧸" },
  { label: "Daily Use Items", emoji: "💡" },
];

const categoryBgColors: Record<string, string> = {
  "Desk Essentials": "bg-pink-100 text-pink-600",
  "Cute Decor": "bg-purple-100 text-purple-600",
  "Daily Use Items": "bg-blue-100 text-blue-600",
};

function useIntersectionObserver(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
}

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<HTMLElement>,
  );

  return (
    <div
      ref={ref}
      data-ocid={`product.card.${index + 1}`}
      className="product-card rounded-3xl overflow-hidden flex flex-col"
      style={{
        ...(isVisible
          ? {
              animation: `fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s both`,
            }
          : { opacity: 0 }),
      }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span
          className={`self-start text-xs font-bold px-2 py-0.5 rounded-full ${
            categoryBgColors[product.category] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {product.category}
        </span>
        <h3 className="font-bold text-base text-foreground leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.desc}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span
            className="font-extrabold text-lg"
            style={{ color: "oklch(0.62 0.12 10)" }}
          >
            {product.price}
          </span>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`product.primary_button.${index + 1}`}
            className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "oklch(0.80 0.10 10)",
              color: "oklch(0.99 0.006 80)",
            }}
          >
            Buy on Amazon 🛒
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const year = new Date().getFullYear();
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col cute-bg">
      {/* HEADER */}
      <header
        data-ocid="header.section"
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{
          background: "oklch(0.99 0.006 80 / 0.85)",
          borderColor: "oklch(0.90 0.04 10 / 0.4)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span
              className="text-xl sm:text-2xl font-black tracking-tight"
              style={{ color: "oklch(0.55 0.14 10)" }}
            >
              Cute Finds Hub 🌸
            </span>
            <span
              className="text-xs font-semibold hidden sm:block"
              style={{ color: "oklch(0.68 0.08 10)" }}
            >
              Adorable &amp; Useful Finds You&apos;ll Love 💕
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <button
                type="button"
                key={item}
                data-ocid={`nav.${item.toLowerCase()}.link`}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-bold transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.45 0.05 340)" }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl"
            onClick={() => setMobileMenuOpen((o) => !o)}
            data-ocid="nav.toggle"
            style={{ color: "oklch(0.55 0.14 10)" }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t"
              style={{
                background: "oklch(0.99 0.006 80 / 0.96)",
                borderColor: "oklch(0.90 0.04 10 / 0.4)",
              }}
            >
              <div className="flex flex-col px-6 py-3 gap-3">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-sm font-bold py-1.5 transition-colors duration-200"
                    style={{ color: "oklch(0.45 0.05 340)" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1" id="home">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="relative h-[340px] sm:h-[440px] md:h-[500px] w-full">
            <img
              src="/assets/generated/hero-banner.dim_1200x500.jpg"
              alt="Cute Finds Hub hero banner"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.10 10 / 0.55) 0%, oklch(0.85 0.06 295 / 0.50) 50%, oklch(0.85 0.06 225 / 0.45) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight drop-shadow-md"
                style={{ color: "oklch(0.99 0.006 80)" }}
              >
                Discover the cutest and most useful
                <br />
                Amazon finds ✨
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 text-base sm:text-lg font-semibold drop-shadow"
                style={{ color: "oklch(0.97 0.01 80)" }}
              >
                Handpicked adorable products just for you
              </motion.p>
              <motion.button
                type="button"
                onClick={() => scrollTo("shop")}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                data-ocid="hero.primary_button"
                className="mt-6 inline-flex items-center gap-2 font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-soft-lg transition-all duration-200 hover:scale-105"
                style={{
                  background: "oklch(0.99 0.006 80)",
                  color: "oklch(0.55 0.14 10)",
                }}
              >
                Explore Now 💕
              </motion.button>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section id="shop" className="pt-12 pb-4 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.label}
                  data-ocid={`categories.${cat.label.toLowerCase().replace(/ /g, "_")}.tab`}
                  onClick={() => setActiveCategory(cat.label)}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background:
                      activeCategory === cat.label
                        ? "oklch(0.80 0.10 10)"
                        : "oklch(0.96 0.04 10 / 0.6)",
                    color:
                      activeCategory === cat.label
                        ? "oklch(0.99 0.006 80)"
                        : "oklch(0.45 0.08 340)",
                    border:
                      activeCategory === cat.label
                        ? "2px solid transparent"
                        : "2px solid oklch(0.85 0.06 10)",
                    boxShadow:
                      activeCategory === cat.label
                        ? "0 4px 16px oklch(0.80 0.10 10 / 0.3)"
                        : "none",
                  }}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2
                className="text-3xl sm:text-4xl font-black"
                style={{ color: "oklch(0.42 0.08 340)" }}
              >
                Our Cute Finds 🛍️
              </h2>
              <p
                className="mt-2 text-sm sm:text-base font-medium"
                style={{ color: "oklch(0.58 0.04 340)" }}
              >
                Handpicked adorable &amp; useful Amazon picks just for you
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
              >
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div
                data-ocid="products.empty_state"
                className="text-center py-16 text-muted-foreground"
              >
                No products in this category yet 🌸
              </div>
            )}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 px-4 sm:px-6 cute-bg-alt">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">💖</div>
              <h2
                className="text-3xl sm:text-4xl font-black mb-4"
                style={{ color: "oklch(0.42 0.08 340)" }}
              >
                About Cute Finds Hub
              </h2>
              <p
                className="text-base sm:text-lg font-semibold leading-relaxed mb-3"
                style={{ color: "oklch(0.45 0.05 340)" }}
              >
                We find the cutest and most useful products on Amazon so you
                don&apos;t have to 💖
              </p>
              <p
                className="text-sm sm:text-base font-medium leading-relaxed"
                style={{ color: "oklch(0.58 0.04 340)" }}
              >
                Every item is handpicked with love to bring joy to your everyday
                life.
              </p>
              <div
                className="mt-8 text-3xl tracking-widest"
                style={{ color: "oklch(0.80 0.10 10 / 0.5)" }}
              >
                ✿ ✿ ✿
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t py-10 px-4"
        style={{
          background: "oklch(0.97 0.025 10)",
          borderColor: "oklch(0.90 0.04 10 / 0.4)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <span
            className="text-2xl font-black"
            style={{ color: "oklch(0.55 0.14 10)" }}
          >
            Cute Finds Hub 🌸
          </span>

          <a
            href="mailto:tinytreasure18@gmail.com"
            data-ocid="contact.email.link"
            className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2 border transition-all duration-200 hover:scale-105"
            style={{
              color: "oklch(0.55 0.14 10)",
              borderColor: "oklch(0.85 0.06 10)",
              background: "oklch(0.99 0.006 80)",
            }}
          >
            <Mail size={14} />
            tinytreasure18@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.instagram.link"
              className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: "oklch(0.96 0.04 10)",
                color: "oklch(0.55 0.14 10)",
              }}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.pinterest.link"
              className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: "oklch(0.96 0.04 10)",
                color: "oklch(0.55 0.14 10)",
              }}
              aria-label="Pinterest"
            >
              <SiPinterest size={18} />
            </a>
            <a
              href="https://amzn.in"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.amazon.link"
              className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: "oklch(0.96 0.04 10)",
                color: "oklch(0.55 0.14 10)",
              }}
              aria-label="Amazon"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          <p
            className="text-xs font-medium flex items-center gap-1 flex-wrap justify-center"
            style={{ color: "oklch(0.62 0.06 340)" }}
          >
            <span>&copy; {year} Cute Finds Hub. Made with</span>
            <Heart
              size={12}
              className="fill-current"
              style={{ color: "oklch(0.72 0.12 10)" }}
            />
            <span>
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
