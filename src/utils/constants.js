export const baseURL = "https://dummyjson.com/carts/user/1";
export const defaultAddress = {
  firstName: "Jhon",
  lastName: "Doe",
  address1: "New York",
  address2: "",
  city: "NYC",
  state: "London",
  code: "10015",
  mobile: "9234562031",
  email: "jhon.doe@gmail.com",
};
export const defaultCart = {
  cartData: [],
  price: 0,
};
export const cardDetail = {
  "name": "Ashwani Kumar",
  "cardNumber": "4444 4444 4444 4444",
  "expirationDate": "12/29",
  "cvv": "123",
}
export const filterData = {
  filters: {
    discountPercentage: [
      {
        name: '10%',
        isApply: true
      },
      {
        name: '20%',
        isApply: false
      },
      {
        name: '50%',
        isApply: false
      },
      {
        name: 'Free',
        isApply: false
      }
    ],
    price: [
      {
        name: '$10-$100',
        start: 10,
        end: 100,
        isApply: false
      },
      {
        name: '$100-$500',
        start: 100,
        end: 500,
        isApply: false
      },
      {
        name: '$500-$1000',
        start: 500,
        end: 1000,
        isApply: false
      },
      {
        name: '$1000 above',
        start: 1000,
        isApply: false
      }
    ],
    brand: [
      {
        name: 'Apple',
        isApply: false
      },
      {
        name: 'Samsung',
        isApply: false
      },
      {
        name: 'Sneakers',
        isApply: false
      },
      {
        name: 'Top Sweater',
        isApply: false
      },
      {
        name: 'Soft Cotton',
        isApply: false
      }
    ],
    rating: [
      {
        name: '5',
        isApply: false
      },
      {
        name: '4',
        isApply: false
      },
      {
        name: '3',
        isApply: false
      }
    ]

  }
}
export const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
export const sampleProducts = {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}
export const imageNotFound =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAAGBCAYAAAAg6qePAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgkSURBVHgB7d2vb1TNAoDh/W6uAYsFiwUJSLBYsFiwWJBg+R/QWCxYLLVYsJDUgORmNhmylO2vj4X7tud5kk2T5mxT9WZmzpw5/+zv739fAUT8ZwUQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkCKKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIooASmiBKSIEpAiSkDKf1csxocPH1afPn1aff36dXVWXLx4cXXt2rXVpUuXVizDP/v7+99XnHuvX79ef86qu3fvrj+cf0ZKC/D58+cfQbp8+fJ69HFWjP99/v9Xr15dfzjfRGkB9vb21j/HFOjp06ers+bZs2fraefHjx9FaQEsdC/AXEM6q+syc2T37du3FeefKAEpogSkiBKQIkpAiigBKaIEpIgSkCJKQIod3ezc2Kz59u3b9Q7ssRN7bNocj7fcuXPHg7UcS5TYqRGhFy9e/HQSwXh2bZxQ8O7du9X9+/dXN2/eXMFhRImdGfGZQRqPhty4cWN15cqV9e9HkMbPly9frkdLnmHjMKLEzozgjCCN6Dx+/Pinqdrt27fXwRojqXHd8+fPV7CNhW52Yk7RhocPH/6ydjRGTo8ePfrlWjjISIlfzPWfEY+x/nOSNaAxAhouXLiwnrJtMxe8HUPCUUSJnxw8oXIE6s2bN+vp2FGHw82F7eMOkDtLB8zx/2H6xg+bQdocIW27o3bQHPWM0dUYBW2zOW07bDQFosTaZpDGWdgPHjz48RmOC9PmHbW54H3Qq1evfrkWDhIlfgnS5gH9Y7R00jDN743rxt21sS4116fG996/f//TdbCNNaWFOypI05zGjRHQDNO2NaYx+hkBGyOiuSfpoHv37tk8yZFEacFOEqTppGEa1404jb+7+ZjJeHfbrVu31nff4CiitFCnCdJ00jCNCM0p31HGNHCMqMYLAawxMYnSAv2bIE0nDdNxDq5PjZCNTZfuymGhe2F+J0jTaRa/t9n8zozZfG7usO0ELIcoLci4E/a7QZr+bZg2rx3rS+NFk+NO3RgpjWmcMCFKC/S7QZpOG6aDQZrTvs0HeIUJUVqYXQVpOmmYDgvSJExMorQg4w7Xn9i4eFyYjgvSJEwMosROHBamkwZp2hamsQjOctgSwM5s2y7w5cuXEwdpmmGaQRpxYjmMlNipgyOm0wZp2nZ6JcsgSuzcZph+xwyTM5iWRZT4I353g+U0T6tkOUSJP2ZXYWJZRIk/Spg4LVHijxMmTkOU+CsOhmkejQsHiRJ/zWaYxquYYBubJ/mrRpjGKZRu83MYIyX+OkHiKKIEpIgSkCJKQIooLcBcwzmrT9vPo0vcsVsGd98WYD47Ng5Me/LkyZl68n6+hmm4fv36ivPvn/39/e8rzr3Nt5icRbs+xpcuUVqQMeLY29s7U494jKnnGOl5WeVyiBKQYqEbSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUgRZSAFFECUkQJSBElIEWUgBRRAlJECUgRJSBFlIAUUQJSRAlIESUg5X8zlIXerXSykwAAAABJRU5ErkJggg==";
export const imageURL1 =
  "https://images.unsplash.com/photo-1632282003890-020318a49e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60";
export const gender = ["Male", "Female", "Other/Choose a Self-identity"];
export const countries = ["India", "Sri Lanka", "Thailand", "Singapore"];
export const months = [
  "01-January",
  "02-February",
  "03-March",
  "04-April",
  "05-May",
  "06-June",
  "07-July",
  "08-August",
  "09-September",
  "10-October",
  "11-November",
  "12-December",
];

export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const customerServiceArr = [
  "Shipping",
  "Returns",
  "Payment Methods",
  "Service & Repairs",
  "Product Info and Warranty",
  "Airline Carry-On Guide",
  "FAQs",
  "Gift Card & Services",
  "Replacement Parts",
  "Setting your ABC Lock",
];
export const myAccArr = ["Sign In", "Track Orders", "Register Your ABC"];
export const aboutTumiArr = [
  "ABC Difference",
  "Corporate Gifts & Incentives",
  "Careers",
];

export const copyRight = [
  "ABC Canada, ULC",
  "Terms & Conditions",
  "Transparency in Supply Chain Act Web Accessibility Statement",
  "Modern Slavery Statement",
  "Privacy Policy",
  "Sitemap",
];

export const PRODUCT_FILTERS = {
  discountPercentage: [
    { name: "10%", isApply: false },
    { name: "20%", isApply: false },
    { name: "50%", isApply: false },
    { name: "Free", isApply: false },
  ],

  price: [
    { name: "$10-$100", start: 10, end: 100, isApply: false },
    { name: "$100-$500", start: 100, end: 500, isApply: false },
    { name: "$500-$1000", start: 500, end: 1000, isApply: false },
    { name: "$1000 above", start: 1000, isApply: false },
  ],

  brand: [
    { name: "Apple", isApply: false },
    { name: "Samsung", isApply: false },
    { name: "Sneakers", isApply: false },
    { name: "Top Sweater", isApply: false },
    { name: "Soft Cotton", isApply: false },
  ],
  rating: [
    { name: "5", isApply: false },
    { name: "4", isApply: false },
    { name: "3", isApply: false },
  ],
};

export const products_data = [
  {
    products: [
      {
        id: 24,
        title: "cereals muesli fruit nuts",
        description:
          "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
      },
    ],
  },
];
