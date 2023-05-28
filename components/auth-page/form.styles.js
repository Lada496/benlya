"use client";
import styled from "styled-components";
export const CardContainer = styled.div`
  width: 18rem;
  margin: 2rem auto;
`;
export const FormContainer = styled.form`
  margin: 0 auto;
  p {
    color: #bf1650;
    &::before {
      display: inline;
      content: "⚠ ";
    }
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid black;
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 300;
    &:disabled {
      opacity: 0.4;
    }
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
  }
  input[type="submit"] {
    -webkit-appearance: none;
    background: black;
    color: white;
    border: none;
    margin: 2rem auto 0 auto;
    font-size: 1.2rem;
    font-family: var(--font-spartan);
    width: 7rem;
    border-radius: 4px;
    padding: 0.6rem 0.8rem 0.4rem 0.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const LinkContainer = styled.p`
  text-align: center;
  span {
    text-align: center;
    margin-top: -1.5rem;
    color: #428bca;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;
