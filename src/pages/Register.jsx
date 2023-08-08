import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/userSlice";
import Success from "../companent/Success";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState("John@gmail.com");
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [firstname, setFirstName] = useState("John");
  const [lastname, setLastName] = useState("Doe");
  const [city, setCity] = useState("kilcoole");
  const [street, setStreet] = useState("7835 new road");
  const [number, setNumber] = useState(3);
  const [zipcode, setZipcode] = useState("12926-3874");
  const [lat, setLat] = useState("-37.3159");
  const [long, setLong] = useState("81.1496");
  const [phone, setPhone] = useState("1-570-236-7033");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRegister = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setIsRedirecting(true); 
    }, 1500);
  };

  console.log(users, "users1");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Input alanına göre state değerlerini güncelle
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "name.firstname":
        setFirstName(value);
        break;
      case "name.lastName":
        setLastName(value);
        break;
      case "address.city":
        setCity(value);
        break;
      case "address.street":
        setStreet(value);
        break;
      case "address.number":
        setNumber(value);
        break;
      case "address.zipcode":
        setZipcode(value);
        break;
      case "lat":
        setLat(value);
        break;
      case "long":
        setLong(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    handleRegister();

    e.preventDefault();//formu manuel göndermek için
    const userData = {
      email: email,
      username: username,
      password: password,
      name: {
        firstname: firstname,
        lastname: lastname,
      },
      address: {
        city: city,
        street: street,
        number: number,
        zipcode: zipcode,
        geolocation: {
          lat: lat,
          long: long,
        },
      },
      phone: phone,
    };
    dispatch(createUser(userData))
      .then((response) => {
        console.log("Response: ", response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    if (users && isRedirecting) {
      navigate("/login");
      console.log("Kullanıcı başarıyla oluşturuldu: usseEfcet", users);
    }
  }, [users, isRedirecting]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register a New User
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="name.firstname"
              value={firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="name.lastName"
              value={lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="address.city"
              value={city}
              onChange={handleChange}
              placeholder="City"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="address.street"
              value={street}
              onChange={handleChange}
              placeholder="Street"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="number"
              name="address.number"
              value={number}
              onChange={handleChange}
              placeholder="Number"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="address.zipcode"
              value={zipcode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="lat"
              value={lat}
              onChange={handleChange}
              placeholder="Latitude"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="long"
              value={long}
              onChange={handleChange}
              placeholder="Longitude"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Phone"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kullanıcı Oluştur
            </button>
          </div>
        </form>
        {loading && <p className="text-center">Kullanıcı oluşturuluyor...</p>}
        {users && showSuccessMessage && <Success />}
        {error && (
          <p className="text-center text-red-500">Hata oluştu: {error}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
