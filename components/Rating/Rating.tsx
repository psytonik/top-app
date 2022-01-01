import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from 'react';import {RatingProps} from "./Rating.props";import StarIcon from './star.svg';import cn from "classnames";import styles from './Rating.module.css';const Rating =    forwardRef(({isEditable = false, rating, setRating,error, tabIndex, ...otherProps}:RatingProps,ref:ForwardedRef<HTMLDivElement>): JSX.Element => {    const [ratingArray,setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);    useEffect(() =>{        constructRating(rating);    },[rating,tabIndex]);    const computeFocus = (rat:number,ind:number):number => {        if(!isEditable){            return -1;        }        if(!rat && ind == 0){            return tabIndex ?? 0;        }        if(rat== ind+1){            return tabIndex ?? 0;        }        return -1;    };    const changeDisplay = (ind: number) => {        if(!isEditable){            return;        }        return constructRating(ind);    };    const onClick = (number: number) => {        if(!isEditable || !setRating){            return;        }        return setRating(number);    };    const handleKey = (e:KeyboardEvent) => {        if(!isEditable || !setRating){            return;        }        if(e.code == 'ArrowRight' || e.code == 'ArrowUp'){            if(!rating){                setRating(1);            }else {                e.preventDefault();                setRating(rating< 5 ? rating+1 :5);            }            ratingArrayRef.current[rating]?.focus();        }        if(e.code == 'ArrowLeft' || e.code == 'ArrowDown'){            e.preventDefault();            setRating(rating > 1 ? rating-1: 1);            ratingArrayRef.current[rating-2]?.focus();        }    };    const constructRating = (currentRating: number) => {        const updatedArray = ratingArray.map((r:JSX.Element,index:number) => {            return (                <span                    className={cn(styles.star,{                        [styles.filled]: index < currentRating,                        [styles.editable]: isEditable                    })}                    onMouseEnter={()=>changeDisplay(index+1)}                    onMouseLeave={()=>changeDisplay(rating)}                    onClick={()=>onClick(index+1)}                    tabIndex={computeFocus(rating,index)}                    onKeyDown={handleKey}                    ref={r=>ratingArrayRef.current?.push(r)}                >                    <StarIcon/>                </span>            );        });        setRatingArray(updatedArray);    };    return (        <div {...otherProps} ref={ref} className={cn(styles.ratingWrapper,{            [styles.error]:error        })}>            {ratingArray.map((rat,index)=>                <span key={index+1}>                    {rat}                </span>)            }            {error && <span className={styles.errorMessage}>{error.message}</span>}        </div>    );});export default Rating;