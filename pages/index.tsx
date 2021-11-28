import {Htag, Button, Paragraph, Tag} from "../components";
import Rating from "../components/Rating/Rating";
import React, {useState} from "react";

const Home = ():JSX.Element => {
    const [value,setValue] = useState<number>(0);
  return (
      <>
          <Htag tag="h1">Hello World</Htag>
          <Button appearance="primary" arrow="right">Click</Button>
          <Button appearance="ghost" arrow="down">Click Me</Button>
          <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere officia quae ut voluptatibus! Aperiam asperiores dolore eaque fugit maiores nostrum placeat quia sunt ullam! Doloribus ea iure laudantium nisi!
          </Paragraph>
          <Tag size="sm" color="red">Hello Moto</Tag>
          <Tag size="md" color="primary" href="https://oneclickpharm.net">OneClickPharm</Tag>
          <Rating rating={value} isEditable={true} setRating={setValue}/>
      </>
  );
};
export default Home;