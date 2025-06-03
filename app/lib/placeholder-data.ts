// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CAB',
    name: 'Aldi',
    email: 'Al@di.com',
    image_url: '/customers/al-di.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CCB',
    name: 'Maxi',
    email: 'max@i.com',
    image_url: '/customers/ma-xi.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CDB',
    name: 'Sandi',
    email: 'San@di.com',
    image_url: '/customers/san-di.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CEB',
    name: 'Curt Kobain',
    email: 'Curt@Cobain.com',
    image_url: '/customers/curt-co.png',
  },
];

const products = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    product_name: 'Wireless Bluetooth Headphones',
    price: 7999, // $79.99 in cents
    stock: 25,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    image: '/images/toko1.png',
    sales: 145,
  },
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Smart Watch Series 5',
    price: 29999, // $299.99 in cents
    stock: 18,
    description: 'Advanced fitness tracking, heart rate monitoring, and smartphone integration.',
    image: '/images/toko2.png',
    sales: 89,
  },
  {
    id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Portable Laptop Stand',
    price: 4999, // $49.99 in cents
    stock: 42,
    description: 'Ergonomic adjustable laptop stand for better posture and cooling.',
    image: '/images/toko3.png',
    sales: 203,
  },
  {
    id: '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'USB-C Hub 7-in-1',
    price: 3499, // $34.99 in cents
    stock: 67,
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
    image: '/images/toko4.png',
    sales: 178,
  },
  {
    id: '6ba7b813-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Mechanical Gaming Keyboard',
    price: 12999, // $129.99 in cents
    stock: 31,
    description: 'RGB backlit mechanical keyboard with blue switches and programmable keys.',
    image: '/images/toko5.png',
    sales: 92,
  },
  {
    id: '6ba7b814-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Wireless Charging Pad',
    price: 2499, // $24.99 in cents
    stock: 85,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    image: '/images/toko1.png',
    sales: 267,
  },
  {
    id: '6ba7b815-9dad-11d1-80b4-00c04fd430c8',
    product_name: '4K Webcam',
    price: 8999, // $89.99 in cents
    stock: 15,
    description: 'Ultra HD 4K webcam with auto-focus and built-in microphone for streaming.',
    image: '/images/toko2.png',
    sales: 134,
  },
  {
    id: '6ba7b816-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Bluetooth Speaker',
    price: 5999, // $59.99 in cents
    stock: 38,
    description: 'Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.',
    image: '/images/toko3.png',
    sales: 156,
  },
  {
    id: '6ba7b817-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'Phone Car Mount',
    price: 1999, // $19.99 in cents
    stock: 94,
    description: 'Magnetic car mount for smartphones with 360-degree rotation and strong grip.',
    image: '/images/toko4.png',
    sales: 298,
  },
  {
    id: '6ba7b818-9dad-11d1-80b4-00c04fd430c8',
    product_name: 'LED Desk Lamp',
    price: 3999, // $39.99 in cents
    stock: 56,
    description: 'Adjustable LED desk lamp with touch control and USB charging port.',
    image: '/images/toko5.png',
    sales: 187,
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    product_id: products[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    product_id: products[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    product_id: products[2].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    product_id: products[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    product_id: products[4].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    product_id: products[5].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    product_id: products[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[7].id,
    product_id: products[7].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[8].id,
    product_id: products[8].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[9].id,
    product_id: products[9].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    product_id: products[0].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[0].id,
    product_id: products[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[8].id,
    product_id: products[5].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue, products };
