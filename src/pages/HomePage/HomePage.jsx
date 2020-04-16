import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';



const HomePage = (props) => {
    // const products = props.products.map((product) => (
    //     <ProductThumbnail 
    //         product={product}
    //     />
    // ));

    let milkShirts = props.products.filter((product) => product.series === 'Milk Shirts')
    const milkShirtProducts = milkShirts.map((shirt) => (
        <ProductThumbnail 
            product={shirt}
        />
    ))
    
    let notMilkShirts = props.products.filter((product) => product.series === 'Not Milk?')
    const notMilkShirtProducts = notMilkShirts.map((shirt) => (
        <ProductThumbnail 
            product={shirt}
        />
    ))

    return (
        <div className={styles.page}>
            <div className={styles.headerFill}></div>
            <div className={styles.topImg}>
                <div className={styles.imageFill}><h1 className={styles.kim}>KEEP<br/>IT<br/>MILKY</h1></div>
            </div>
            <div class={styles.whiteBG}>
                <h1 className={styles.series}>THE MILK SHIRTS</h1>
                <h3>THE SHIRTS THAT STARTED A REVOLUTION</h3>
                <div className={styles.container}>
                    {milkShirtProducts}
                </div>
            </div>
            <br/>
            <br/>
            <div className={styles.imageFill2}></div>
            <div class={styles.whiteBG}>
                <h1 className={styles.series}>NOT MILK?</h1>
                <h3>IT'S NOT ALL ABOUT THE MILK, YOU KNOW</h3>
                <div className={styles.container}>
                    {notMilkShirtProducts}
                </div>
            </div>
        </div>
    )
}

export default HomePage;