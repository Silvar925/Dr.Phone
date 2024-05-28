import styles from "./Products.module.css"
import { ProductCard } from "../../widgets/ProductCard/ProductCard"
import { Outlet, useLocation } from "react-router-dom"
import { phones } from "../../data"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"
import { NewPhoneList } from "../../data"


export const Products = () => {
    const location = useLocation().pathname;
    const productList = dictionary[location];

    return (
        productList !== undefined ? (
            <div className={styles.layout}>
                <Header />
                <div className={styles.widthContainer}>
                    <section className={styles.container}>
                        {productList.map((item, index) => (
                            <ProductCard key={index} img={item.img} alt={item.alt} name={item.name} price={item.price} url={item.id} />
                        ))}
                    </section>
                </div>
                <Footer />
            </div>
        ) : (
            <Outlet />
        )
    );
}


const dictionary = {
    '/serivce/phones': NewPhoneList,
    '/serivce/allDevices': phones,
    '/serivce/accessories': phones,
    '/serivce/deviceProtection': phones,
    '/serivce/iMac': phones,
    '/serivce/covers': phones,
}