/* eslint-disable no-alert */
import React from 'react';

export const Button = () => (
  <button type="button" onClick={() => alert(`Button Pressed`)}>
    Click me
  </button>
);
