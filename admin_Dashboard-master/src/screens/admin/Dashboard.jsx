import React from 'react'
// import Store from '../assets/store.jpeg'
// import Content from './Content'
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Routesaddress} from '../../utils/api'
import useAuth from '../../hooks/useAuth';
const Dashboard = () => {
  const [data,setData] = React.useState([])
  const { auth,theme } = useAuth();

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `bearer ${auth.token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`${Routesaddress}/stores/?skip=0`, requestOptions)
      .then(response => response.json())
      .then(result => {})
      .catch(error => console.error('error', error));
  }, [])
  return (
    <div className="">
      <div className='bg-background h-screen w-full px-4 py-4'>
    <div className="flex gap-4 ">
    <div  className={`${theme=='light'?'bg-[#82b012]':'bg-cardColor'}  rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 `}>
        <div className="">
        <h1 className='text-xl font-bold text-white font-[SF-Pro-Display-Regular]'>2412</h1>
        <p className='text-[12px] text-gray-300 font-bold font-[SF-Pro-Display-Regular]'>TOTAL  STORE</p>
        </div>
        <div className="">
        <StorefrontIcon style={{ color: "white",fontSize:'3rem'  }}/>
        </div>
      </div>
      <div  className={`${theme=='light'?'bg-[#82b012]':'bg-cardColor'}  rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 `}>
        <div className="">
        <h1 className='text-xl font-bold text-white font-[SF-Pro-Display-Regular]'>$7209</h1>
        <p className='text-[12px] text-gray-300 font-bold font-[SF-Pro-Display-Regular]'>TOTAL REVENUE</p>
        </div>
        <div className="">
          <StorefrontIcon style={{ color: "white",fontSize:'3rem' }}/>
        </div>
      </div>
    <div  className={`${theme=='light'?'bg-[#82b012]':'bg-cardColor'}  rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 `}>
        <div className="">
        <h1 className='text-xl font-bold text-white font-[SF-Pro-Display-Regular]'>$7009</h1>
        <p className='text-[12px] text-gray-300 font-bold font-[SF-Pro-Display-Regular]'>PRODUCT SOLD</p>
        </div>
        <div className="">
          <StorefrontIcon style={{ color: "white",fontSize:'3rem' }}/>
        </div>
      </div>
      <div  className={`${theme=='light'?'bg-[#82b012]':'bg-cardColor'}  rounded-lg w-[25%] flex justify-between  items-center px-4 py-8 `}>
        <div className="">
        <h1 className='text-xl font-bold text-white font-[SF-Pro-Display-Regular]'>$3209</h1>
        <p className='text-[12px] text-gray-300 font-bold font-[SF-Pro-Display-Regular]'>TOTAL REVENUE</p>
        </div>
        <div className="">
          <StorefrontIcon style={{ color: "white",fontSize:'3rem' }}/>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard