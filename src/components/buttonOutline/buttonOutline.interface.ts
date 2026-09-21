import { JSX, MouseEventHandler } from 'react'

export interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  isLoading?: boolean;
  variant: 'submit' | 'click';
}