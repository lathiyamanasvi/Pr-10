import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Axios() {
  const [record, setRecord] = useState([])

  const view = async () => {
    try {
      const rec = await axios.get('https://dummyjson.com/products');
      setRecord(rec.data.products)
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    view();
  }, [])
  return (
    <>
      <Link to={'/'}>Fetch</Link>
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

export default Axios
