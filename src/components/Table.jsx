import React from "react";
import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CurrencyFormat from "react-currency-format";
const Table = ({ coinx }) => {

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {coinx.map((coin) => (
          <div key={coin.name} className="col ">
            <div className="card-box mb-3 ">
              <div className="d-flex align-items-center">
                <img src={coin.image} alt={coin.image} />
                <div className="fw-bold ms-2">{coin.name}</div>
                <div className="ms-2 text-uppercase color-text text-secondary">
                  {coin.symbol}
                </div>
              </div>
              <div className="mt-3">
                <div className="fw-bold">
                  Precio:{" "}
                  <span className="badge bg-secondary">
                    {/* $ {(coin.current_price)} */}
                    <CurrencyFormat
                      value={coin.current_price}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </span>
                </div>
                <div className="fw-bold">
                  24h:{" "}
                  <span
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {coin.price_change_percentage_24h}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <Sparklines data={coin.sparkline_in_7d.price} limit={20}>
                  <SparklinesLine color="blue" />
                </Sparklines>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
