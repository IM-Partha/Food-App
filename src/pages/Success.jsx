import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';  // Assuming you want to use PropagateLoader based on the import

const Success = () => {
  const [loading, setLoading] = useState(true);  // Corrected variable name for better readability

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // Corrected function name based on variable declaration
    }, 3000);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? (
        <PropagateLoader color="#36d7b7" />  // Changed to use PropagateLoader as imported
      ) : (
        <>
          <h2 className='text-2xl font-semibold mb-4'>Order Successful</h2>
          <p>Your Order Successfully Placed</p>
        </>
      )}
    </div>
  );
}

export default Success;
