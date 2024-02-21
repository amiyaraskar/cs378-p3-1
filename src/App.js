import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import { useState } from 'react';
// This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item.
// Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese Dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese Rice Rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese Noodle Soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Green Tea Cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Rice Cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese Skewered Chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese Ooctopus Balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese Raw Fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese Savory Pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Curry with Fried Pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuHeader = [
  {
    imageName: 'logo.png',
    subheading1: 'Delicious Japanese Cuisine',
    subheading2: 'The Fresh Choice of UT!'
  }
]

function App() {
  return (
    <div>
      {menuHeader.map((header) => (
        <Header
          imageName={header.imageName}
          subheading1={header.subheading1}
          subheading2={header.subheading2}
        />
      ))}
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;