import React from 'react'
import Product from './product'

const products = [
              {
                productId: 1,
                name: "AirPods Pro",
                price: 249,
                brand: "Apple",
                description: "Active noise cancellation with adaptive transparency mode and spatial audio for immersive sound.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 2,
                name: "Galaxy Watch 6",
                price: 299,
                brand: "Samsung",
                description: "Advanced health monitoring with BioActive sensor, sleep coaching and 40 hour battery life.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 3,
                name: "MX Master 3S",
                price: 99,
                brand: "Logitech",
                description: "Ultra-fast scrolling, ergonomic design and near-silent clicks for all-day productivity.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 4,
                name: "MacBook Air M3",
                price: 1299,
                brand: "Apple",
                description: "Supercharged by M3 chip with 18-hour battery life and a stunning Liquid Retina display.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 5,
                name: "Sony WH-1000XM5",
                price: 349,
                brand: "Sony",
                description: "Industry-leading noise cancellation with 30-hour battery and crystal clear hands-free calling.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 6,
                name: "iPad Mini 6",
                price: 499,
                brand: "Apple",
                description: "Portable powerhouse with A15 Bionic chip, USB-C connectivity and all-day battery life.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 7,
                name: "Mechanical Keyboard K3",
                price: 89,
                brand: "Keychron",
                description: "Compact wireless mechanical keyboard with RGB backlight and multi-device Bluetooth support.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 8,
                name: "Dell UltraSharp 27\"",
                price: 579,
                brand: "Dell",
                description: "4K IPS display with factory-calibrated color accuracy and USB-C 90W power delivery.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 9,
                name: "Pixel 8 Pro",
                price: 999,
                brand: "Google",
                description: "Google AI built-in with pro-level camera system, 7 years of updates and real-time call translation.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              },
              {
                productId: 10,
                name: "Portable SSD T9",
                price: 119,
                brand: "Samsung",
                description: "Blazing-fast 2000MB/s transfer speeds in a compact, shock-resistant portable drive.",
                image: "https://www.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=187&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
              }
            ]

const Products = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center p-5'>
      {
        products.map((prodObj) =>
             <Product key={prodObj.productId} className=" " {...prodObj} />)
      }
    </div>
  )
}

export default Products