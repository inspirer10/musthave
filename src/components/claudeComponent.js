import { useState, useEffect } from 'react';
import {
    Search,
    X,
    Filter,
    ChevronDown,
    Heart,
    ShoppingBag,
    User,
    Menu,
} from 'lucide-react';

// Przykładowe dane produktów
const products = [
    {
        id: 1,
        name: 'BLACK GOT T-SHIRT',
        price: 129,
        category: 'tops',
        brand: 'MUSTHAVE',
        colors: ['black'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: true,
        discount: 0,
    },
    {
        id: 2,
        name: 'BEIGE HOODIE',
        price: 149,
        category: 'hoodies',
        brand: 'MUSTHAVE',
        colors: ['beige'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: false,
        discount: 0,
    },
    {
        id: 3,
        name: 'YELLOW DRESS',
        price: 149,
        category: 'dresses',
        brand: 'MUSTHAVE',
        colors: ['yellow'],
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: true,
        discount: 0,
    },
    {
        id: 4,
        name: 'DENIM JEANS',
        price: 189,
        category: 'trousers',
        brand: 'MUSTHAVE',
        colors: ['blue'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: false,
        discount: 15,
    },
    {
        id: 5,
        name: 'CREAM BLOUSE',
        price: 99,
        category: 'tops',
        brand: 'MUSTHAVE',
        colors: ['cream'],
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: false,
        discount: 0,
    },
    {
        id: 6,
        name: 'BLACK SWEATSHIRT',
        price: 139,
        category: 'sweatshirts',
        brand: 'MUSTHAVE',
        colors: ['black'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
        isFavorite: false,
        isNew: false,
        discount: 10,
    },
];

// Kategorie produktów
const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'trousers', name: 'Spodnie & Jeansy' },
    { id: 'tops', name: 'Bluzki & Topy' },
    { id: 'sweatshirts', name: 'Bluzy' },
    { id: 'dresses', name: 'Sukienki & Kombinezony' },
    { id: 'hoodies', name: 'Bluzy z kapturem' },
];

// Opcje sortowania
const sortOptions = [
    { id: 'popularity', name: 'Popularność' },
    { id: 'price-asc', name: 'Cena (od najniższej)' },
    { id: 'price-desc', name: 'Cena (od najwyższej)' },
    { id: 'newest', name: 'Najnowsze' },
];

export default function ClothingCategory() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('popularity');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    // Efekt filtrujący produkty na podstawie wybranych filtrów
    useEffect(() => {
        let result = [...products];

        // Filtracja po kategorii
        if (activeCategory !== 'all') {
            result = result.filter(
                (product) => product.category === activeCategory
            );
        }

        // Filtracja po cenie
        result = result.filter((product) => {
            const finalPrice = product.discount
                ? product.price * (1 - product.discount / 100)
                : product.price;
            return finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
        });

        // Filtracja po rozmiarach
        if (selectedSizes.length > 0) {
            result = result.filter((product) =>
                product.sizes.some((size) => selectedSizes.includes(size))
            );
        }

        // Filtracja po kolorach
        if (selectedColors.length > 0) {
            result = result.filter((product) =>
                product.colors.some((color) => selectedColors.includes(color))
            );
        }

        // Sortowanie
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.sort((a, b) => (b.isNew === true) - (a.isNew === true));
                break;
            default:
                // Sortowanie domyślne - popularność
                break;
        }

        setFilteredProducts(result);
    }, [activeCategory, sortBy, priceRange, selectedSizes, selectedColors]);

    // Funkcja obsługująca dodawanie/usuwanie rozmiaru z filtrów
    const toggleSize = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter((s) => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    // Funkcja obsługująca dodawanie produktu do ulubionych
    const toggleFavorite = (productId) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? { ...product, isFavorite: !product.isFavorite }
                : product
        );
        // W prawdziwej aplikacji tutaj byłby API call
    };

    return (
        <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-3'>Cena</h3>
            <div className='flex items-center justify-between'>
                <span>{priceRange[0]} zł</span>
                <span>{priceRange[1]} zł</span>
            </div>
            <div className='mt-2'>
                {/* Tu byłby komponent range slider */}
                <input
                    type='range'
                    min='0'
                    max='500'
                    className='w-full'
                    value={priceRange[1]}
                    onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                />
            </div>
        </div>
    );
}
