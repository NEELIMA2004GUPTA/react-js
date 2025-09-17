import { useContext,createContext,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ? Syntax overview to display theme in child component using context api
// const ThemeContext = createContext();

// function App(){
//   const theme="dark";
//   return(
//     <ThemeContext.Provider value={theme}>
//       <ChildComponent />
//     </ThemeContext.Provider>
//   );
// }

// function ChildComponent(){
//   const theme=useContext(ThemeContext);
//   return <h1>Current theme : {theme}</h1>
// }

// ? example: Theme switcher 

// const ThemeContext= createContext();
// function App(){
//   const[theme,setTheme]=useState("light");
//   return (
//     <ThemeContext.Provider value={{theme,setTheme}}>
//       <Toolar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolar(){
//   return(
//     <div>
//       <ThemeButton />
//     </div>
//   );
// }

// function ThemeButton(){
//   const {theme,setTheme}=useContext(ThemeContext);
//   return(
//     <button style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//       }} onClick={()=>setTheme(theme==="light"?"dark":"light")}>
//       Switch theme
//     </button>
//   );
// }


//? Exercise: Build a product list and a cart — allow adding items to cart and display total count.

//cart
const CartContext = createContext();

function CartProvider({children}){
  const [cart,setCart]=useState([])

  const addtocart=(product)=>{
    setCart((prev)=>[...prev,product])
  }

  const clearCart = () => {
    setCart([]); 
  };


  return(
    <CartContext.Provider value={{cart,addtocart,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  return useContext(CartContext)
}



// product
function ProductList(){
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Headphones" },
    { id: 3, name: "Keyboard" },
  ];

  const {addtocart}=useCart();

  return(
    <div>
    <h1>Products:</h1>
    {products.map((p)=>(
      <div key={p.id} style={{ marginBottom: "10px" }}>{p.name}{" "}
      <button onClick={()=>addtocart(p)}>Add to cart</button>
      </div>
    ))}
    </div>
  );
}


function Cart(){
  const{cart,clearCart}=useCart();
  return(
    <div>
      <h1>Cart</h1>
      <p>Total no of items: {cart.length}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

function App(){
  return (
    <CartProvider> 
      <h1>
      Shopping App
    </h1>
    < ProductList />
    <Cart />
    </CartProvider>
    
  )
}

export default App
