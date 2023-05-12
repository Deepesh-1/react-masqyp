import React from 'react';
import useFetch from 'react-fetch-hook';

export default function New() {
  const { loading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
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
          <strong>Using useFetch API</strong>
        </p>
        {data &&
          data.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
      </ul>
    </div>
  );
}
