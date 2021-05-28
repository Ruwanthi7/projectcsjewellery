import bcrypt from 'bcryptjs';
const data ={
    users: [
        {
        name: 'Ruwanthi',
        email: 'ruwanthithamali@gmail.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: 'Sanjaya',
        email: 'sanjayachathuranga@gmail.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
    {
        name: 'Kavintha',
        email: 'chathuranga@gmail.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
],
products: [
    {
        
        name: 'engagement ring',
        category: 'ring',
        image: './images/engagementring.jpg',
        price: 25000,
        countInStock: 10,
        rating: 2.7,
        numReviews: 6,
        description: "This is gold jewellery engagement ring",

    },
    {
       
        name: 'necklace',
        category: 'ring',
        image: '/images/jewellery.jfif',
        price: 35000,
        countInStock: 20,
        rating: 3.7,
        numReviews: 10,
        description: "This is gold jewellery",

    },
    {
       
        name: 'earings',
        category: 'ring',
        image: '/images/jewellery.jfif',
        price: 25000,
        countInStock: 0,
        rating: 2.5,
        numReviews: 19,
        description: "This is gold jewellery",

    },
    {
        
        name: 'bangles',
        category: 'ring',
        image: '/images/jewellery.jfif',
        price: 54000,
        countInStock: 15,
        rating: 2.5,
        numReviews: 12,
        description: "This is gold jewellery",

    },
    {
       
        name: 'rings',
        category: 'ring',
        image: '/images/jewellery.jfif',
        price: 15000,
        countInStock: 30,
        rating: 3.7,
        numReviews: 22,
        description: "This is gold jewellery",

    },
    {
        
        name: 'bracelet',
        category: 'ring',
        image: '/images/jewellery.jfif',
        price: 25000,
        rating: 4,
        countInStock: 10,
        numReviews: 35,
        description: "This is gold jewellery",

    },
],
}

export default data;