import { useState } from 'react'


const PRODUCTS = [
  {
    id: 1,
    name: 'Skinless Chicken',
    image: '/images/Skinless.webp',
    category: 'Chicken',
    desc: 'Fresh skinless chicken cuts with low fat and high protein, perfect for healthy cooking, grilling, and curries.',
    badge: 'Healthy'
  },
  {
    id: 2,
    name: 'Dressed Chicken',
    image: '/images/DC.webp',
    category: 'Chicken',
    desc: 'Cleaned and freshly dressed chicken, ready to cook for delicious curries, fries, and family meals.',
    badge: 'Fresh'
  },
  {
    id: 3,
    name: 'Boneless Chicken',
    image: '/images/Boneless.webp',
    category: 'Chicken',
    desc: 'Tender boneless chicken pieces ideal for biryani, kebabs, gravies, starters, and quick cooking recipes.',
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Chicken Thigh',
    image: '/images/ChickenThighs.webp',
    category: 'Chicken',
    desc: 'Flavorful dark meat, ideal for biriyani, curries, and frying.'
  },
  {
    id: 5,
    name: 'Chicken Breast',
    image: '/images/ChickenBreast.webp',
    category: 'Chicken',
    desc: 'Lean, protein-rich breast cuts for healthy meals and grills.',
    badge: 'Healthy'
  },
  {
    id: 6,
    name: 'Chicken Drumstick',
    image: '/images/Chickendrumstick.webp',
    category: 'Chicken',
    desc: 'Classic drumsticks loved by all — great for frying and barbecue.'
  },
  {
    id: 7,
    name: 'Chicken Wings',
    image: '/images/ChickenWings.webp',
    category: 'Chicken',
    desc: 'Crispy, delicious wings perfect for snacks, starters, and parties.',
    badge: 'Popular'
  },
  {
    id: 8,
    name: 'Chicken Liver',
    image: '/images/ChickenLiver.webp',
    category: 'Chicken',
    desc: 'Fresh, nutrient-dense chicken liver for fry and curry preparations.'
  },
  {
    id: 9,
    name: 'Mutton',
    image: '/images/Mutton.webp',
    category: 'Mutton',
    desc: 'Tender, flavorful mutton cuts ideal for biryani, curry, and stew.',
    badge: 'Best Seller'
  },
  {
    id: 10,
    name: 'Mutton Head',
    image: '/images/MuttonHead.webp',
    category: 'Mutton',
    desc: 'Traditional mutton head for authentic bone broth and specialty dishes.'
  },
  {
    id: 11,
    name: 'Mutton Liver',
    image: '/images/MuttonLiver.webp',
    category: 'Mutton',
    desc: 'Rich and iron-packed mutton liver for fry, masala, and soup.'
  },
  {
    id: 12,
    name: 'Mutton Legs',
    image: '/images/Muttonlegs.webp',
    category: 'Mutton',
    desc: 'Hearty mutton legs perfect for slow-cooked stews and curries.'
  },
  {
    id: 13,
    name: 'Mutton Lungs',
    image: '/images/MuttonLungs.webp',
    category: 'Mutton',
    desc: 'Fresh mutton lungs used in traditional recipes and spicy fries.'
  },
  {
    id: 14,
    name: 'Country Chicken',
    image: '/images/CountryChicken.webp',
    category: 'Chicken',
    desc: 'Free-range country chicken known for its rich, authentic flavor.',
    badge: 'Premium'
  },
  {
    id: 15,
    name: 'Eggs',
    image: '/images/Eggs.webp',
    category: 'Eggs',
    desc: 'Farm-fresh eggs, packed with protein, perfect for all your cooking needs.',
    badge: 'Daily Fresh'
  },
  {
    id: 16,
    name: 'Chicken Lollipop',
    image: '/images/Lollipop.webp',
    category: 'Chicken',
    desc: 'Freshly cut raw chicken lollipop pieces with tender meat and exposed bone, perfect for crispy fries, BBQ, and spicy starters.',
    badge: 'Popular'
  },
  {
    id: 17,
    name: 'Smoky Turmeric Country Chicken',
    image: '/images/TurmericChicken.webp',
    category: 'Chicken',
    desc: 'Fresh country chicken pieces coated with natural turmeric for rich flavor, traditional cooking, and healthy homemade dishes.',
    badge: 'Traditional'
  },
]

const CATEGORIES = ['All', 'Chicken', 'Mutton', 'Eggs', 'Special']

const BADGE_COLORS = {
  'Popular': 'bg-orange-100 text-orange-700',
  'Best Seller': 'bg-green-100 text-green-700',
  'Healthy': 'bg-blue-100 text-blue-700',
  'Premium': 'bg-purple-100 text-purple-700',
  'Daily Fresh': 'bg-yellow-100 text-yellow-700',
  'Special': 'bg-red-100 text-red-700',
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const filtered =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory)

  const handleWhatsApp = (product) => {
    const msg = encodeURIComponent(
      `Hello SST! I am interested in *${product.name}*. Please share pricing and availability.`
    )
    window.open(`https://wa.me/919894868478?text=${msg}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display,serif' }}
          >
            Our Products
          </h1>
          <p className="text-red-200 text-lg max-w-xl mx-auto">
            Fresh chicken, mutton, and more — sourced daily for maximum quality
            and taste.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-gray-500 text-sm">
                Showing{' '}
                <span className="font-bold text-red-700">
                  {filtered.length}
                </span>{' '}
                products
                {selectedCategory !== 'All' && (
                  <span>
                    {' '}
                    in{' '}
                    <span className="font-bold">{selectedCategory}</span>
                  </span>
                )}
              </p>
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 bg-red-700 text-white px-5 py-3 rounded-lg font-semibold text-sm shadow-md hover:bg-red-800 transition-colors min-w-44 justify-between"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                    />
                  </svg>
                  {selectedCategory}
                </span>

                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-20 min-w-44 overflow-hidden">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat)
                        setDropdownOpen(false)
                      }}
                      className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors flex items-center justify-between ${selectedCategory === cat
                        ? 'bg-red-50 text-red-700'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {cat}

                      {selectedCategory === cat && (
                        <svg
                          className="w-4 h-4 text-red-700"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-700'
                  }`}
              >
                {cat}
                <span className="ml-1 text-xs opacity-70">
                  (
                  {cat === 'All'
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === cat).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="card group flex flex-col">

                {/* Product Image */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 relative overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />

                  {product.badge && (
                    <span
                      className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${BADGE_COLORS[product.badge] ||
                        'bg-red-100 text-red-700'
                        }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-1">
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>

                  <h3
                    className="font-bold text-gray-900 text-base mb-2"
                    style={{ fontFamily: 'Playfair Display,serif' }}
                  >
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {product.desc}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      Enquire
                    </button>

                    <a
                      href="tel:9894868478"
                      className="flex-1 btn-outline text-sm py-2 px-3 text-center rounded-lg flex items-center justify-center gap-1"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}