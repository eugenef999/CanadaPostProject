"use client";
import Link from "next/link";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import ZipSearch from "./components/ZipSearch";

type Address = {
  Id: string;
  Text: string;
  Description: string;
};

// Client component
const Home = () => {
  const [data, setData] = useState<Address[]>([]);

  const getUsers = async (ZipCode: string) => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/" + ZipCode);
      const resData = await res.json();
      setData(resData.addresses);
      console.log("data is", resData);
      return resData;
    } catch (error) {
      throw error;
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [invalidZipCode, setInvalidZipCode] = useState(false);

  // Handle input change
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
      getUsers(inputValue);
    } else {
      setInvalidZipCode(true);
    }
    setInputValue(""); // Clear the input box
    setIsSearch(true);
  };

  return (
    <>
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
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
      <ul className="list-group">
        {invalidZipCode && (
          <p>You entered an improperly formatted postal code.</p>
        )}
        {!invalidZipCode && isSearch && data.length === 0 && (
          <p>Sorry, addresses with that postal code were not found.</p>
        )}
        {!invalidZipCode &&
          data.length != 0 &&
          data.map((address) => (
            <li key={address.Id}>
              {address.Text + ", " + address.Description}
            </li>
          ))}
      </ul>
    </>
  );
};
export default Home;
