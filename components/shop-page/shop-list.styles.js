"use client";
import styled from "styled-components";
import Link from "next/link";

export const LinkContainer = styled(Link)`
  display: block;
  color: black;
  text-transform: uppercase;
  width: fit-content;
  margin: auto;
  padding: 1rem 1.5rem 0.8rem 1.5rem;
  border: 1px black solid;
  border-radius: 5px;
  margin-bottom: 6rem;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
