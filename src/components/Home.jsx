import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="container-home">
            <div id="carouselExampleIndicators" className="carousel slide w-100 ">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                  <img src="https://amdparatodos.com/wp-content/uploads/2022/12/AMD_Banner_Radeon_RX7000_Desktop.jpg" className="d-block w-100 " height="600" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/intel-11th-gen-page-main-banner-v2.jpg" className="d-block w-100 " height="600" alt="..."/>
                  </div>
                  <div className="carousel-item">
                  <img src="https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2021/05/H1xn-vMYu.jpeg" className="d-block w-100 " height="600"alt="..."/>
                  </div>
                  
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className='contenedor-patrocinadores p-5'>
                  <div className='header-patrocinadores'>
                    <div className='container-logo bg-white'>
                        <img src="./img/logo-gaming.png" className='logo'/>
                    </div>
                    <div>
                      <strong>
                      <p className='text-white'>Nos patrocinan las principales marcas de tecnología</p>
                      </strong>
                    </div>
                  </div>
                  <div className='slider'>
                      <div className="slider-track">
                          <div className="slide">
                            <img src="./img/gigabyte.png" alt="" className='patrocinador'/>
                          </div>
                          <div className="slide">
                            <img src="./img/nvidia.png" alt="" className='patrocinador'/>
                          </div>
                          <div className="slide">
                            <img src="./img/rep-of-gamers.png" alt="" className='patrocinador'/>
                          </div>
                          <div className="slide">
                            <img src="./img/hyperx.png" alt="" className='patrocinador'/>
                          </div>
                          
                          <div className="slide">
                            <img src="./img/amd.png" alt="" className='patrocinador'/>
                          </div>
                          <div className="slide">
                            <img src="./img/adata.png" alt="" className='patrocinador'/>
                          </div>
                          <div className="slide">
                            <img src="./img/logitech.png" alt="" className='patrocinador'/>
                          </div>
                      </div>
                  </div>
            </div>
            <div className='contenedor-informacion bg-white p-4'>
                <div className='info'>
                  <img src="./img/tarjeta-de-credito.png" className='img-info'/>
                  <h4 className='text-dark'>Pagá hasta 12 cuotas sin interés</h4>
                  <p className='text-dark'>con las principales tarjetas de crédito</p>
                </div>
                <div className='info'>
                  <img src="./img/entrega.png" className='img-info'/>
                  <h4 className='text-dark'>Entrega inmediata</h4>
                  <p className='text-dark'>En más de 100 puntos de todo el país</p>
                </div>
            </div>
    </div>
  )
}

export default Home