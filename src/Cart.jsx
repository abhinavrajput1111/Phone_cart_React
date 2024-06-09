import React, { useEffect, useState } from "react";

let prodData = [
  {
    img: "https://www.course-api.com/images/cart/phone-1.png",
    name: "Samsung Galaxy S8",
    price: 399.99,
    quantity: 1,
  },
  {
    img: "https://www.course-api.com/images/cart/phone-2.png",
    name: "Google Pixel Xl 2024",
    price: 450.0,
    quantity: 1,
  },
  {
    img: "https://www.course-api.com/images/cart/phone-3.png",
    name: "Xiaomi Redmi Note 2",
    price: 300.1,
    quantity: 1,
  },
  {
    img: "https://www.course-api.com/images/cart/phone-4.png",
    name: "Samsung Galaxy S7. 20",
    price: 700.1,
    quantity: 1,
  },
];

function Cart() {
  //   state

  const [data, SetData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    data.forEach((item, index) => {
      sum += item.quantity * item.price;
    });

    setTotal(sum.toFixed(2));
  }, [data]);

  useEffect(() => {
    SetData(prodData);
  }, []);

  function inc(e, index) {
    let temp = [...data];
    temp;
  }

  function inc(e, index) {
    let temp = [...data];
    temp[index].quantity += 1;
    SetData([...temp]);
  }

  function dec(e, index) {
    let temp = [...data];
    if (temp[index].quantity < 1) {
      return removeItem(index);
    } else {
      temp[index].quantity -= 1;
      SetData([...temp]);
    }
  }

  function removeItem(index) {
    let temp = [...data];
    temp.splice(index, 1); // Remove the item at the specified index
    SetData(temp);
  }

  return (
    <>
      <div id="cart_wrapper" className="cart_wrapper w-full h-screen">
        <div id="box w-full h-full bg-slate-100 ">
          <div className="bg-violet-500 text-white ">
            <h1 className="text-center text-3xl my-10  font-mono">
              Items in Your Bag
            </h1>
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-evenly gap-20 items-center my-5"
                >
                  <img src={item.img} className="w-30 h-20" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>$ {item.price}</p>
                  </div>

                  <div>
                    <button className="py-1" onClick={(e) => inc(e, index)}>
                      <i className="fa-solid fa-chevron-up"></i>
                    </button>

                    <p>{item.quantity}</p>

                    <button className="py-1" onClick={(e) => dec(e, index)}>
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <footer className="mt-5 bg-violet-500 py-5" id="footer">
          <div className="flex justify-evenly  text-white font-semibold ">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </footer>
        {/* Div end here */}
      </div>
    </>
  );
}

export default Cart;
