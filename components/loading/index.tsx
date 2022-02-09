import React from "react";
import { Title } from "..";
import { Dot, LoadingWrapper } from "./Loading.styled";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Title>Loading</Title>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
}
