import React from 'react'
import toast from 'react-hot-toast';

const Home = () => {
  const Productlist = [
    {
      name: "Mac Book",
      price: 1200,
      id: "asdsfasjhvnbvdnciqwapos1",
      imgSrc: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg"
    },
    {
      name: "Nike Air",
      price: 100,
      id: "asdsfasjhvnbvdnciqwapos2",
      imgSrc: "https://m.media-amazon.com/images/I/51xuWoOZDPL._SY695_.jpg"
    }
  ];

  const AddToCartHandler = (options) => {
    console.log(options);
    toast.success("Add to cart")

  };

  return (
    <div className='bg-slate-700 w-full h-full flex flex-row gap-x-36 items-center justify-center '>
      {Productlist.map((i) => (
        <ProductCart
          key={i.id} // Ensure 'key' is lowercase
          imgSrc={i.imgSrc}
          price={i.price}
          name={i.name}
          id={i.id}
          handler={AddToCartHandler}
        />
      ))}
    </div>
  );
}

const ProductCart = ({ name, id, imgSrc, price, handler }) => {
    return (
      <div className='text-slate-800 font-bold w-60 h-78 bg-slate-100 p-2 rounded-xl hover:shadow-2xl shadow-lg transform hover:scale-105 transition-transform duration-300'>
        <img src={imgSrc} alt={name} className="w-full h-40 object-cover rounded-t-xl" />
        <p className='mt-2'>{name}</p>
        <h4>$ {price}</h4>
        <button
          className='bg-black rounded-xl p-2 mt-2 text-white hover:bg-cyan-500 hover:text-black transition-colors duration-300'
          onClick={() => handler({ name, id, price, quantity: 1, imgSrc })}
        >
          Add to Cart
        </button>
      </div>
    );
  }
export default Home;
