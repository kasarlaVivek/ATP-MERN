import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import './Product.css'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const products = [
    {
      productId: 1,
      name: "AirPods Pro",
      price: 249,
      brand: "Apple",
      description: "Active noise cancellation with adaptive transparency mode and spatial audio for immersive sound.",
      image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 2,
      name: "Galaxy Watch 6",
      price: 299,
      brand: "Samsung",
      description: "Advanced health monitoring with BioActive sensor, sleep coaching and 40 hour battery life.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 3,
      name: "MX Master 3S",
      price: 99,
      brand: "Logitech",
      description: "Ultra-fast scrolling, ergonomic design and near-silent clicks for all-day productivity.",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 4,
      name: "MacBook Air M3",
      price: 1299,
      brand: "Apple",
      description: "Supercharged by M3 chip with 18-hour battery life and a stunning Liquid Retina display.",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 5,
      name: "Sony WH-1000XM5",
      price: 349,
      brand: "Sony",
      description: "Industry-leading noise cancellation with 30-hour battery and crystal clear hands-free calling.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 6,
      name: "iPad Mini 6",
      price: 499,
      brand: "Apple",
      description: "Portable powerhouse with A15 Bionic chip, USB-C connectivity and all-day battery life.",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 7,
      name: "Mechanical Keyboard K3",
      price: 89,
      brand: "Keychron",
      description: "Compact wireless mechanical keyboard with RGB backlight and multi-device Bluetooth support.",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 8,
      name: "Dell UltraSharp 27\"",
      price: 579,
      brand: "Dell",
      description: "4K IPS display with factory-calibrated color accuracy and USB-C 90W power delivery.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 9,
      name: "Pixel 8 Pro",
      price: 999,
      brand: "Google",
      description: "Google AI built-in with pro-level camera system, 7 years of updates and real-time call translation.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    },
    {
      productId: 10,
      name: "Portable SSD T9",
      price: 119,
      brand: "Samsung",
      description: "Blazing-fast 2000MB/s transfer speeds in a compact, shock-resistant portable drive.",
      image: "https://images.unsplash.com/photo-1590674899484-d33d5276393b?auto=format&fit=crop&q=80&w=800"
    }
  ];




  const brands = useMemo(() => {
    return ["All", ...new Set(products.map(p => p.brand))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === "All" || p.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand, products]);

  return (
    <div className="fade-in">
      <header className="search-section">
        <h1 className="main-title">Tech Catalog</h1>
        <p className="subtitle">Discover the latest in premium electronics and accessories</p>
        
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search products or brands..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select 
            className="filter-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </header>

      {filteredProducts.length > 0 ? (
        <div className="container">
          {filteredProducts.map((productObj) => (
            <ProductCard data={productObj} key={productObj.productId} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
          <p>No products found matching your search.</p>
          <button 
            onClick={() => {setSearchQuery(""); setSelectedBrand("All")}}
            style={{ marginTop: '1rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;