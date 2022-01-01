import React, {ForwardedRef, forwardRef, useRef, useState} from 'react';import {ProductProps} from "./Product.props";import {Button, Card, Divider, Review, ReviewForm, Tag} from "../index";import styles from './Product.module.css';import {priceRu} from "../../helpers/helpers";import Rating from "../Rating/Rating";import cn from "classnames";import {motion} from "framer-motion";const Product =    motion(forwardRef(({product,className,...props}:ProductProps,ref:ForwardedRef<HTMLDivElement>):JSX.Element => {    const [isReviewOpened,setIsReviewOpened] = useState<boolean>(false);    const reviewRef = useRef<HTMLDivElement>(null);    const variants = {        visible:{opacity:1,height:"auto"},        hidden:{opacity:0,height:0}    };    const scrollToReview = () => {        setIsReviewOpened(true);        reviewRef.current?.scrollIntoView({            behavior:'smooth',            block:'start'        });        reviewRef.current?.focus();    };    return (        <div className={className} {...props} ref={ref}>            <Card className={styles.product}>                <div className={styles.logo}>                    <img                        src={`${process.env.NEXT_PUBLIC_DOMAIN }${product.image}`}                        alt={product.title}                        width={70}                        height={70}                    />                </div>                <div className={styles.title}>{product.title}</div>                <div className={styles.price}>                    <span><span className="visuallyHidden">Price</span>{priceRu(product.price)}</span>                    {product.oldPrice && <Tag className={styles.oldPrice} color="green"><span className="visuallyHidden">Discount</span> {priceRu(product.price -product.oldPrice)}</Tag>}                </div>                <div className={styles.credit}><span className="visuallyHidden">Credit</span>{priceRu(product.credit)}/ <span className={styles.month}>month</span></div>                <div className={styles.rating}><span className="visuallyHidden">{'Rating' + product.reviewAvg ?? product.initialRating}</span> <Rating rating={product.reviewAvg ?? product.initialRating} /></div>                <div className={styles.tags}>{product.categories.map(c=><Tag key={c} className={styles.category} color={'ghost'}>{c}</Tag>)}</div>                <div className={styles.priceTitle} aria-hidden={true}>Price</div>                <div className={styles.creditTitle} aria-hidden={true}>Credit</div>                <div className={styles.numberReviews}>                    <a href="#" onClick={scrollToReview}>{product.reviewCount} reviews</a>                </div>                <Divider className={styles.hr}/>                <div className={styles.description}>{product.description}</div>                <div className={styles.features}>                    {product.characteristics.map(char=>                        <div key={char.name} className={styles.characteristics}>                            <span className={styles.characteristicsName}>{char.name}</span>                            <span className={styles.characteristicsDots}> </span>                            <span className={styles.characteristicsValue}>{char.value}</span>                        </div>)                    }                </div>                <div className={styles.advBlock}>                    {product.advantages && <div className={styles.advantages}>                        <div className={styles.advTitle}>Advantages</div>                        <div>{product.advantages}</div>                    </div>}                    {product.disadvantages && <div className={styles.disadvantages}>                        <div className={styles.advTitle}>Disadvantages</div>                        {product.disadvantages}                    </div>}                </div>                <Divider className={cn(styles.hr, styles.hr2)}/>                <div className={styles.actions}>                    <Button appearance="primary">More Info</Button>                    <Button                        appearance="ghost"                        arrow={isReviewOpened ? 'down':'right'}                        className={styles.reviewButton}                        onClick={()=>setIsReviewOpened(!isReviewOpened)}                    >Read reviews</Button>                </div>            </Card>            <motion.div animate={isReviewOpened? 'visible': 'hidden'} variants={variants} initial="hidden">                <Card color="blue"                      className={styles.reviews}                      ref={reviewRef}                      tabIndex={isReviewOpened ? 0: -1}                >                    {                        product.reviews && product.reviews.map((review)=>                            <div key={review._id}>                                <Review review={review} />                                <Divider/>                            </div>                        )                    }                    <ReviewForm  productId={product._id} isOpened={isReviewOpened}/>                </Card>            </motion.div>        </div>    );}));export default Product;