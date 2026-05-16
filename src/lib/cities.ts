export type City = {
  slug: string;
  name: string;
  state: string;
  region: string;
  nearbyAreas: string[];
  mapQuery: string;
  priority: number;
};

export const cities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    region: "NCR",
    nearbyAreas: ["Pitampura", "Rohini", "Karol Bagh", "Connaught Place", "Dwarka"],
    mapQuery: "Delhi+India",
    priority: 1,
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "NCR",
    nearbyAreas: ["Sector 62", "Sector 18", "Greater Noida", "Noida Extension"],
    mapQuery: "Noida+Uttar+Pradesh",
    priority: 0.95,
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    region: "NCR",
    nearbyAreas: ["Cyber City", "Golf Course Road", "Sohna Road", "MG Road"],
    mapQuery: "Gurugram+Haryana",
    priority: 0.95,
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    nearbyAreas: ["Andheri", "BKC", "Lower Parel", "Nariman Point"],
    mapQuery: "Mumbai+Maharashtra",
    priority: 0.9,
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    region: "South India",
    nearbyAreas: ["Whitefield", "Koramangala", "HSR Layout", "Electronic City"],
    mapQuery: "Bengaluru+Karnataka",
    priority: 0.9,
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West India",
    nearbyAreas: ["Hinjewadi", "Kharadi", "Baner", "Viman Nagar"],
    mapQuery: "Pune+Maharashtra",
    priority: 0.85,
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South India",
    nearbyAreas: ["HITEC City", "Gachibowli", "Banjara Hills", "Madhapur"],
    mapQuery: "Hyderabad+Telangana",
    priority: 0.85,
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    nearbyAreas: ["OMR", "T Nagar", "Anna Nagar", "Guindy"],
    mapQuery: "Chennai+Tamil+Nadu",
    priority: 0.85,
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West India",
    nearbyAreas: ["SG Highway", "Satellite", "Navrangpura", "GIFT City"],
    mapQuery: "Ahmedabad+Gujarat",
    priority: 0.8,
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    nearbyAreas: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C-Scheme"],
    mapQuery: "Jaipur+Rajasthan",
    priority: 0.8,
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
