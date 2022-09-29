import { Link, Route, Routes } from "react-router-dom";
import User from "./Users";
// import { useNavigate  } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate()
    return(
        <div>
        <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Lemonilo</h1>
        <p class="fs-4 justify-content-center">Jual Aneka Makanan sehat, Produk Alami dan Natural, Harga Terbaik dan Terlengkap | Dapat poin belanja, harga jujur, gratis ongkir ke seluruh Indonesia.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Lihat Produk</a>
        {/* <button onClick={() => navigate('/users')} variant="primary">user</button> */}
      </div>
    </div>
    </div>
    )
}

export default Home;