'use client'
import { useEffect, useState } from "react"

const page = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchingData();
  }, []);


  return (
    <section>
      <div className="container grid-4">
        {
          data.map((currProduct) => {
            return (
              <div className="project-card" key={currProduct.id}>
                <img src={currProduct.image} alt={currProduct.title} className="product-img" />
                <h4>{currProduct.title}</h4>
                <p>₹ {currProduct.price}</p>
                <p>{currProduct.category}</p>
                <p>{}</p>
              </div>
            )
          })
        }
      </div>
    </section>

  )
}

export default page
