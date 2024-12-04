"use client";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

type Address = {
  Id: string;
  Text: string;
  Description: string;
};

// Client component
const Home = () => {
  const [data, setData] = useState<Address[]>([]);

  const getAddresses = async (ZipCode: string) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/" + ZipCode);
      const resData = await res.json();
      setData(resData.addresses);
      //console.log("data is", resData);
      return resData;
    } catch (error) {
      throw error;
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [invalidZipCode, setInvalidZipCode] = useState(false);

  // Handle input change for the form
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsSearch(false);
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const zipRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (zipRegex.test(inputValue)) {
      setInvalidZipCode(false);
      getAddresses(inputValue);
    } else {
      setInvalidZipCode(true);
    }
    setInputValue(""); // Clear the input box
    setIsSearch(true);
  };

  //display form and the returned addresses
  return (
    <>
      <h1 className="h1Custom">Find Addresses Based on Postal Code</h1>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="PostalCode" className="sr-only">
            Postal code
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a postal code"
            className="form-control"
            id="PostalCode"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-m"
          id="button-addon2"
        >
          Submit
        </button>
      </form>
      <ul className="list-group">
        {invalidZipCode && (
          <strong>You entered an improperly formatted postal code!</strong>
        )}
        {!invalidZipCode && isSearch && data.length === 0 && (
          <strong>
            Sorry, addresses with that postal code were not found...
          </strong>
        )}
        {!invalidZipCode && isSearch && data.length > 0 && (
          <h2>Found Addresses:</h2>
        )}
        {!invalidZipCode &&
          data.length > 0 &&
          data.map((address) => (
            <li key={address.Id} className="list-group-item">
              {address.Text + ", " + address.Description}
            </li>
          ))}
      </ul>
    </>
  );
};
export default Home;
