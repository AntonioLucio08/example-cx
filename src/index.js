import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import{TextField} from "cx/widgets";
import { Button, MsgBox, TextField } from "cx/widgets";
import { Controller, HtmlElement, LabelsTopLayout } from "cx/ui";
import { Store } from 'cx/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Store/>
      <MsgBox/>
      <Button/>
      <TextField/>
      <Controller/>
      <HtmlElement/>
      <LabelsTopLayout/>
  </React.StrictMode>
);


