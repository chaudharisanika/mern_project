import React from "react";

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" >
  <div className="carousel-inner" id="carousel">
  <div className="carousel-option" style={{zindex:"10"}}>
    <form className="d-flex">
        <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button className="btn btn-outline-success text-black" type="submit">
                Search
              </button>
      </form>
  </div>
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGaGKbqcTNgJ03nK4CaPBdiitDzfaeKICaBRNMCzDkQ&s" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}
