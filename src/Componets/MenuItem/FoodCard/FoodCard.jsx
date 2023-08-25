import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthoProvider';
import { SetUser } from '../../../CustomHooks/SetUser/UserHook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import { addToDb } from '../../utitilies/databse';
import MenuData from '../../../CustomHooks/MenuData/MenuData';
const FoodCard = ({ item }) => {
  const {menu,isLoading,refetch}= MenuData()
  const [url] = useUrl();
  const { name, image, price, recipe, id,category  } = item;
  const [quantity, setQuantity] = useState(0);
  const inputRef = useRef(null);
  const [user, setuser] = useState('');
 const[loading,setloading]=useState(false);
  // console.log(user)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleAddToCart = () => {
    // Handle adding the item to the cart with the selected quantity
    console.log(`Adding ${quantity * price} ${name}(s) to the cart`);

  };

  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent form submission
   
    // console.log('Form submitted:', data);
    setQuantity(parseInt(data.quantity));// Parse the quantity as an integer
    SetUser(data.name, data.mobile)
    const OrderItem = {
      customer_name: data.name,
      mobile: data.mobile,
      quantity: parseInt(data.quantity),
      Food_name: name,
      foodImg: image,
      foodPrice: price,
      food_receipe: recipe,
      foodId: id,
      foodCategory:category
  
    };
    setuser(OrderItem);
        addToDb(id,OrderItem)
        location.reload();

  
  };
  // console.log(quantity,user )
  return (
    <div className="card bg-base-100 shadow-xl w-full md:w-[90%]  p-4 rounded-lg ">
      <ToastContainer />
      <figure className="mb-4">
        <img src={image} alt="Shoes" className="w-full rounded-md" />
      </figure>
      <p className="bg-slate-900 text-white e absolute top-0 right-0 p-2">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{recipe}</p>

        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <label className="text-sm">
              Enter your Quantity:
              <input
                className="border bg-slate-100 py-1 px-4 rounded-md"
                type="number"
                {...register('quantity', { required: true })}
                required
              />
            </label>
           
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 py-2 rounded-md hover:bg-slate-200 transition-colors"
            >
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default FoodCard;
