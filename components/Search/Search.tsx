import React, {useState} from 'react';import {SearchProps} from "./Search.props";import cn from "classnames";import styles from './Search.module.css';import {Button, Input} from "../index";import SearchIcon from './SearchIcon.svg';import {useRouter} from "next/router";const Search = ({className,...props}:SearchProps):JSX.Element => {    const [search,setSearch] = useState<string>('');    const router = useRouter();    const goToSearchPage = () => {        router.push({            pathname: '/search',            query: {                q: search            }        }).then(r  =>r);    };    const handleKeyDown =(event:KeyboardEvent) => {        const {key} = event;        if(key == 'Enter') {            goToSearchPage();        }    };    return (        <div className={cn(className,styles.search)} {...props}>            <Input                className={styles.input}                placeholder="Search..."                value={search}                onChange={(e)=>setSearch(e.target.value)}                onKeyDown={()=>handleKeyDown}            />            <Button                appearance="primary"                className={styles.button}                onClick={ goToSearchPage }                aria-label="fast search"            >                <SearchIcon/>            </Button>        </div>    );};export default Search;