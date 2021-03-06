import {Button, Htag, Input, Paragraph, Tag, Textarea} from "../components";
import Rating from "../components/Rating/Rating";
import React, {useState} from "react";
import withLayout from "../layout/BaseLayout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";

const Home = ({menu}:HomeProps):JSX.Element => {
    console.log(menu);
    const [value,setValue] = useState<number>(0);

    return (
        <>
            <Htag tag="h1">Hello World</Htag>
            <Button appearance="primary" arrow="right">Click</Button>
            <Button appearance="ghost" arrow="down">Click Me</Button>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facere officia quae ut
                voluptatibus! Aperiam asperiores dolore eaque fugit maiores nostrum placeat quia sunt ullam! Doloribus
                ea iure laudantium nisi!
            </Paragraph>
            <Tag size="sm" color="red">Hello Moto</Tag>
            <Tag size="md" color="primary" href="https://oneclickpharm.net">OneClickPharm</Tag>
          <Rating rating={value} isEditable={true} setRating={setValue}/>
          <Input placeholder={'Name'}/>
          <Textarea placeholder="description"/>

      </>
  );
};
export default withLayout(Home);

export const getStaticProps:GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory:number;
}