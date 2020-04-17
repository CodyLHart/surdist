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
    const milkShirtProducts = milkShirts.map((shirt, idx) => (
        <ProductThumbnail 
            product={shirt}
            key={idx}
        />
    ))
    
    let notMilkShirts = props.products.filter((product) => product.series === 'Not Milk?')
    const notMilkShirtProducts = notMilkShirts.map((shirt, idx) => (
        <ProductThumbnail 
            product={shirt}
            key={idx}
        />
    ))

    return (
        <div className={styles.page}>
            <div className={styles.headerFill}></div>
            <div className={styles.topImg}>
                <div className={styles.imageFill}><h1 className={styles.kim}>KEEP<br/>IT<br/>MILKY</h1></div>
            </div>
            <div className={styles.whiteBG}>
                <h1 className={styles.series}>THE MILK SHIRTS</h1>
                <h3>THE SHIRTS THAT STARTED A REVOLUTION</h3>
                <div className={styles.container}>
                    {milkShirtProducts}
                </div>
            </div>
            <br/>
            <br/>
            <div className={styles.topImg}>
                <div className={styles.imageFill2}><h1 className={styles.kim}>KEEP<br/>IT<br/>MILKY</h1><h1 className={styles.kim2}>SILKY<br/>DADDY</h1></div>
            </div>
            {/* <div className={sstyles.imageFill2}><h1 className={styles.kim2}>KEEP<br/>IT<br/>MILKY</h1></div> */}
            <div className={styles.whiteBG}>
                <h1 className={styles.series}>NOT MILK?</h1>
                <h3>ALL BEVERAGES MATTER...</h3>
                <div className={styles.container}>
                    {notMilkShirtProducts}
                </div>
            </div>
        </div>
    )
}

export default HomePage;