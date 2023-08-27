import React, { useContext } from 'react';
import restaurent from '../../public/restaurent.json'
import Lottie from 'react-lottie';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthoProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
      const { login } = useContext(AuthContext);
      const navigate = useNavigate()
      const location = useLocation()
      const { handleSubmit, register, formState: { errors } } = useForm();
    
      const from = location.state?.from?.pathname || '/'

      const onSubmit = (data) => {
            login(data.id)
                  .then((r) => {
                       
                        navigate(from, { replace: true })
                  })
                  .catch(err => {
                        alert("Not ")
                  })



      };

      //lottie image
      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: restaurent, // Replace with your animation JSON data
      };
      return (

            <div>
                  <div className='py-6 shadow-md'>
                        <h2 className=' text-3xl font-bold text-center'>Welcome to X</h2>
                  </div>
                  <div className="hero  ">

                        <div className="hero-content flex-col md:flex-row">
                              <div className="flex  justify-center items-center hidden md:block ">
                                    <Lottie className="" options={defaultOptions} />
                              </div>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">User ID</span>
                                                </label>
                                                <input type="text" placeholder="Enter your ID" className="input input-bordered"
                                                      {...register("id", { required: "ID is required" })}
                                                />
                                                {errors.id && <p className="text-red-500 mt-1">{errors.id.message}</p>}
                                          </div>

                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;