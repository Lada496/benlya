"use client";
import { Grid } from "semantic-ui-react";
import {
  LoadingContainer,
  ImageSkeleton,
  BarSkeleton,
  MiddleBarSkeleton,
  LargeBarSkeleton,
  ButtonSkeleton,
} from "./loading.styles";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <LoadingContainer>
      <Grid verticalAlign="middle">
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ImageSkeleton />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LargeBarSkeleton />
          <LargeBarSkeleton />
          <MiddleBarSkeleton />
          <BarSkeleton />
          <BarSkeleton />
          <BarSkeleton />
          <ButtonSkeleton />
          <ButtonSkeleton />
        </Grid.Column>
      </Grid>
    </LoadingContainer>
  );
}
