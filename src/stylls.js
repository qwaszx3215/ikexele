import styled from "styled-components";

export const Styls = styled.div`
  background: #a7a9b0;
  background-image: url("hopeexe.jpeg");
  background-position: ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;}
  .container {
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
 
  .office {
    width: 400px;
    background: #fff;
    border: 5px solid #4285f4;
    border-radius: 5px;
  }
  .office-holder {
    width: 80%;
    margin: auto;
    padding: 20px 0px;
  }
  .logo {
    width: 100%;
    text-align: center;
    float: left;
    margin-bottom: 2em;
  }
  .logo h1 {
    font-family: arial;
  }
  .verify {
    width: 70%;
    margin: auto;
  }
  .verify h4 {
    font-family: arial;
  }
  fieldset {
    width: 90%;
    float: right;
    border: 2px solid #4285f4;
    border-radius: 5px;
  }
.msg{
   font-weight: 600; color: red
}
  legend {
    font-size: 15px;
    overflow: hidden;
    width: 42%;
    padding: 0px 2px;
    margin: 0px;
  }
  .verify input[type="text"] {
    width: 100%;
    float: right;
    border: none;
    padding: 3px 10px;
  }
  .verify button {
    border: none;
    height: 40px;
    width: 80px;
    float: right;
    margin-top: 2em;
    background: #4285f4;
    border-radius: 5px;
    color: #fff;
  }
  .email-to-verify {
    border: 1px solid #000;
    border-radius: 10px;
  }
  .form-holder {
    width: 100%;
    float: left;
  }
  .form-holder h3 {
    font-weight: 600;
  }
  .form-holder input[type="email"],
  input[type="password"] {
    width: 100%;
    height: 40px;
    float: left;
    margin-bottom: 15px;
  }
  .form-holder .btn-holder {
    width: 100%;
    margin-top: 1em;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .form-holder .btn-holder .btn {
    background: rgb(4, 109, 4);
    font-size: 15px;
    border: none;
    border-radius: 10px;
    padding: 9px 10px;
    color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .form-holder .btn-holder .btn:hover {
    cursor: pointer;
  }
  .checkbox {
    width: 100%;
    float: left;
    margin-top: 5px;
  }
  .checkbox label {
    font-family: arial;
    font-size: 13px;
    float: left;
    margin-left: 1em;
  }
  .hide {
    display: none;
  }
`;
