import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {


  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setRecord(apiData.products))
  }, [])

  console.log(record);

  return (
    <>
      <Link to={'/axios'}>Axios</Link>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          record.map((val) => {
            return (
              <ul class="cards">
                <li>
                  <a href="" class="card">
                    <img src={val.images[0]} class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src={val.thumbnail} alt="" />
                        <div class="card__header-text">
                          <h3 class="card__title">{val.title}</h3>
                          <span class="card__status">{val.brand}</span>
                        </div>
                      </div>
                      <p class="card__description">{val.description}</p>
                    </div>
                  </a>
                </li>
              </ul>


            )
          })
        }
      </div >
    </>
  )
}
export default Fetch
