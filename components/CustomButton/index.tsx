import React from 'react'
import Link from 'next/link'
import { Container } from './styles';

interface IProps {
  text: string;
  link?: string;
  widthButton: string;
  heightButton: string;
}

const CustomButton = (props: IProps) => {
 
  const {
    text,
    link,
    widthButton,
    heightButton
  } = props
 
  return(
      <Container widthButton={widthButton} heightButton={heightButton}>
          <Link href={link}><a>{text}</a></Link>
      </Container>
  );
}

export default CustomButton;