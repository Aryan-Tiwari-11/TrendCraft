import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext)
    
    const [showFilter, setShowFilter] = useState(true)
    const [filterdProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)){
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }else{
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)){
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice()

        if (showSearch && search){
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0){
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }

    const sortProducts = () => {
        let fpCopy = filterdProducts.slice()
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(() => { applyFilter() }, [category, subCategory, search, showSearch, products])
    useEffect(() => { sortProducts(); }, [sortType])

  return (
    <section className="relative w-full bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

            {/* Filter Sidebar */}
            <div className="w-full md:w-60 flex-shrink-0">
                <p 
                  onClick={() => setShowFilter(!showFilter)} 
                  className='text-lg font-semibold mb-4 flex items-center justify-between cursor-pointer text-gray-800'
                >
                    FILTERS
                    <img src={assets.dropdown_icon} alt='' className={`h-4 transition-transform ${showFilter ? 'rotate-90' : ''}`} />
                </p>

                <div className={`${showFilter ? '' : 'hidden'} md:block space-y-6`}>
                    {/* Category */}
                    <div className="border border-gray-300 rounded-md p-4">
                        <p className="mb-3 text-sm font-medium text-gray-800">CATEGORIES</p>
                        <div className="flex flex-col gap-2 text-gray-700">
                            {['Men', 'Women', 'Kids'].map(cat => (
                                <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#FF6B6B] transition">
                                    <input type="checkbox" value={cat} onChange={toggleCategory} className="w-4 h-4 accent-[#4ECDC4]" />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* SubCategory */}
                    <div className="border border-gray-300 rounded-md p-4">
                        <p className="mb-3 text-sm font-medium text-gray-800">TYPE</p>
                        <div className="flex flex-col gap-2 text-gray-700">
                            {['Topwear', 'Bottomwear', 'Winterwear'].map(sub => (
                                <label key={sub} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#FF6B6B] transition">
                                    <input type="checkbox" value={sub} onChange={toggleSubCategory} className="w-4 h-4 accent-[#4ECDC4]" />
                                    {sub}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex items-center gap-2">
                        <p className="text-gray-500">ALL <span className="text-gray-900 font-semibold">COLLECTION</span></p>
                        <div className="w-12 h-[2px] bg-[#4ECDC4] rounded"></div>
                    </div>

                    <select 
                        onChange={(e) => setSortType(e.target.value)} 
                        className="border border-gray-300 rounded-md text-sm px-3 py-1"
                    >
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filterdProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))}
                </div>
            </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#FF6B6B] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-[#4ECDC4] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    </section>
  )
}

export default Collection
