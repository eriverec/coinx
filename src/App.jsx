import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
function App() {
  const [coinx, setCoinx] = useState([]);

  // console.log(curr.usd);

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h"
    );
    console.log(res.data);
    setCoinx(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="fw-bold fs-2 header-title">Coinx</div>
      </header>

      <section className="container mt-5">
        <Table coinx={coinx} />
      </section>
    </div>
  );
}

export default App;
