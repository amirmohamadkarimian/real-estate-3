export interface Property {
  id: string
  name: string
  location: string
  price: string
  image: string
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: '$2.35 Million',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    price: '$4.10 Million',
    image:
      'https://images.unsplash.com/photo-1600596542815-ff5989d68c1f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'desert-contemporary-estate',
    name: 'Desert Contemporary Estate',
    location: 'Scottsdale, Arizona, USA',
    price: '$1.85 Million',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe999c4fd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'beverly-hills-residence',
    name: 'Beverly Hills Residence',
    location: 'Beverly Hills, California, USA',
    price: '$6.75 Million',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a8a0d5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'palm-springs-retreat',
    name: 'Palm Springs Retreat',
    location: 'Palm Springs, California, USA',
    price: '$3.20 Million',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'coastal-modern-manor',
    name: 'Coastal Modern Manor',
    location: 'Newport Beach, California, USA',
    price: '$5.40 Million',
    image:
      'https://images.unsplash.com/photo-1600566753190-7f3b76c1a4ed?auto=format&fit=crop&w=1000&q=80',
  },
]
