import React from 'react'
import Link from 'next/link'
import { Container } from './styles';

interface IProps {
  text: string;
  link: string;
}

const CustomButton = (props: IProps) => {
 
  const {
    text,
    link
  } = props
 
  return(
      <Container>
          <Link href={link}><a>{text}</a></Link>
      </Container>
  );
}

export default CustomButton;