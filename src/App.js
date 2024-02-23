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
  const [cart, setCart] = useState(menuItems.map(item => ({ ...item, quantity: 0 })));
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        (item.id === itemId) ? { ...item, quantity: item.quantity + 1 } : item
      );

      updateSubtotal(updatedCart);

      return updatedCart;
    });
  };
  
  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        (item.id === itemId && item.quantity > 0) ? { ...item, quantity: item.quantity - 1 } : item
      );

      updateSubtotal(updatedCart);

      return updatedCart;
    });
  };
  
  const clearCart = () => {
    setCart(prevCart => prevCart.map(item => ({ ...item, quantity: 0 })));
    
    setSubtotal(0);
  };

  const updateSubtotal = (updatedCart) => {
    const total = updatedCart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    setSubtotal(total);
  };
  
  const placeOrder = () => {
    const orderedItems = cart.filter(item => item.quantity > 0);

    if (orderedItems.length === 0) {
      alert('No items in the cart.');
    } else {
      const orderSummary = orderedItems.map(item => `${item.quantity} x ${item.title}`).join('\n');
      alert(`Order Placed!\n\n${orderSummary}\n\nTotal: $${subtotal.toFixed(2)}`);
      clearCart();
    }
  };

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
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
            quantity={cart.find(item => item.id === menuItem.id).quantity}
            onAdd={() => addToCart(menuItem.id)}
            onRemove={() => removeFromCart(menuItem.id)}
          />
        ))}
      </div>

      <div className="cart" >
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button className="rounded-3" style={{ backgroundColor: '#ADD8E6' }} onClick={placeOrder}>
          Order
        </button>
        <button className="rounded-3" onClick={clearCart}>Clear All</button>
      </div>
    </div>
  );
}

export default App;