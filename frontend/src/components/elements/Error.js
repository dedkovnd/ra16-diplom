import React from "react";

export const Error = ({text}) => {
  return (
    <>
      <h2 class="text-center">Произошла ошибка</h2>
      <p>{text}</p>
    </>
  );
};
