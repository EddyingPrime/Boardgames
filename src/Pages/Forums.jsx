export default function Forums() {
  return <div>Forums</div>;                                                                                                                             
}
// import { useState, useEffect } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [shopData, setShopData] = useState([]);

//   // useEffect(() => {
//   //   async function fetchShopData() {
//   //     const options = {
//   //       method: "GET",
//   //       url: "https://amazon-product-price-data.p.rapidapi.com/product",
//   //       params: {
//   //         asins: "B005YQZ1KE,B074R8RQQ2",
//   //         locale: "US",
//   //       },
//   //       headers: {
//   //         "X-RapidAPI-Key":
//   //           "b3e8d8175emshef7f44fe5460655p158376jsn3e1860802868", // Replace with your API key
//   //         "X-RapidAPI-Host": "amazon-product-price-data.p.rapidapi.com",
//   //       },
//   //     };

//       try {
//         const response = await axios.request(options);
//         setShopData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchShopData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-semibold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
//         {shopData.map((product) => (
//           <div key={product.asin} className="border p-4 rounded shadow-md">
//             <h2 className="text-lg font-semibold">{product.product_name}</h2>
//             <img
//               src={product.image_url}
//               alt={product.product_name}
//               className="mt-2 w-full h-40 object-contain"
//             />
//             <p className="text-sm text-stone">
//               Price: ${product.current_price.toFixed(2)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
