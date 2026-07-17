'use client'

import { useFormStatus } from 'react-dom';

import { IconButton } from "../IconButton";
import { Spinner } from "../Spinner";
import { ThumbsUp } from "../icons";

export const LikeButton = ({ children, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={pending} {...props}>
      { pending ? <Spinner /> : <ThumbsUp /> }
    </IconButton>
  );
};
