import React from 'react';
import { useState, useEffect } from 'react';

export default function Product() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      let response;
      try {
        setLoading(true);
        response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        console.log('error:', error);
        setData(null);
      } finally {
        setLoading(false);
        console.log('loading', loading);
      }
    }
    getData();
  }, []);
  return (
    <div>
      {loading && (
        <div>
          <img
            width="100"
            src="https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif"
          />
        </div>
      )}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        <p>
          <strong>Using fetch api</strong>
        </p>
        {data &&
          data.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
      </ul>
    </div>
  );
}
