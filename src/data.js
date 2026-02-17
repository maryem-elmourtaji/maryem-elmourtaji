const restaurants = [
  {
    id: 1,
    name: "La Table d'Or",
    city: "Casablanca",
    image: "wtp1.jpeg",
    menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: true },
      { id: 3, seats: 6, available: false }
    ]
  },
  {
    id: 2,
    name: "Food Palace",
    city: "Rabat",
    image: "wtp2.jpeg", 
     menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: false }
    ]
  },
  {
    id: 3,
    name: "Ocean View",
    city: "Agadir",
    image: "wtp3.jpeg",
 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 6, available: true }
    ]
  },
  {
    id: 4,
    name: "Atlas Grill",
    city: "Marrakech",
    image: "wtp4.jpeg",
 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 4, available: true },
      { id: 2, seats: 8, available: false }
    ]
  },
  {
    id: 5,
    name: "Chef’s Corner",
    city: "Fès",
    image: "wtp5.jpeg",
 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: true }
    ]
  },
  {
    id: 6,
    name: "Italiano",
    city: "Tanger",
    image: "wtp6.jpeg",
   menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: false },
      { id: 2, seats: 6, available: true }
    ]
  },
  {
    id: 7,
    name: "Asian Taste",
    city: "Casablanca",
    image: "wtp7.jpeg",
    menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 4, available: true },
      { id: 2, seats: 6, available: true }
    ]
  },
  {
    id: 8,
    name: "Green Garden",
    city: "Rabat",
    image: "wtp8.jpeg",
    menu: [
      {
        id: 1,
        name: "Pizza Margherita",
        price: 60,
        image: "https://images.unsplash.com/photo-1601924579440-1f7fbe6c16f9"
      },
      {
        id: 2,
        name: "Pasta Carbonara",
        price: 75,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
      }
    ],
     menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: false }
    ]
  },



  {
    id: 9,
    name: "La Table d'Or",
    city: "Casablanca",
    image: "wtp1.jpeg",
 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: true }
    ]
  },
  {
    id: 10,
    name: "Food Palace",
    city: "Rabat",
    image: "wtp2.jpeg",

 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
   


    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: false }
    ]
  },
  {
    id: 11,
    name: "Ocean View",
    city: "Agadir",
    image: "wtp3.jpeg",
  menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 4, available: true }
    ]
  },
  {
    id: 12,
    name: "Atlas Grill",
    city: "Marrakech",
    image: "wtp4.jpeg",
     menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 6, available: true }
    ]
  }

,
  {
    id: 1,
    name: "La Table d'Or",
    city: "Casablanca",
    image: "wtp5.jpeg",
 menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: true }
    ]
  },
  {
    id: 2,
    name: "Food Palace",
    city: "Rabat",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
   menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 2, available: true },
      { id: 2, seats: 4, available: false }
    ]
  },
  {
    id: 3,
    name: "Ocean View",
    city: "Agadir",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    menu: [
      { id: 1, name: "Pizza Margherita", price: 60, image: "img1.jpeg" },
      { id: 2, name: "Pasta Carbonara", price: 75, image: "img2.jpeg" },
      { id: 3, name: "Lasagna", price: 80, image: "img3.jpeg" },
      { id: 4, name: "Ravioli", price: 70, image: "img4.jpeg" },
      { id: 5, name: "Risotto ai Funghi", price: 85, image: "img5.jpeg" },
      { id: 6, name: "Bruschetta", price: 40, image: "img6.jpeg" },
      { id: 7, name: "Tiramisu", price: 50, image: "img7.jpeg" },
      { id: 8, name: "Gelato", price: 45, image: "img8.jpeg" },
      { id: 9, name: "Focaccia", price: 55, image: "img9.jpeg" },
      { id: 10, name: "Panna Cotta", price: 50, image: "img10.jpeg" },
      { id: 11, name: "Gnocchi", price: 65, image: "img11.jpeg" },
      { id: 12, name: "Caprese Salad", price: 50, image: "img12.jpeg" },
      { id: 13, name: "Spaghetti Bolognese", price: 70, image: "img13.jpeg" },
      { id: 14, name: "Minestrone Soup", price: 55, image: "img14.jpeg" },
      { id: 15, name: "Polenta", price: 60, image: "img15.jpeg" },
      { id: 16, name: "Osso Buco", price: 120, image: "img16.jpeg" },
      { id: 17, name: "Vitello Tonnato", price: 110, image: "img17.jpeg" },
      { id: 18, name: "Calzone", price: 75, image: "img18.jpeg" },
      { id: 19, name: "Arancini", price: 65, image: "img19.jpeg" },
      { id: 20, name: "Cannoli", price: 50, image: "img20.jpeg" }
    ],
    tables: [
      { id: 1, seats: 4, available: true }
    ]
  }
];

export default restaurants;

