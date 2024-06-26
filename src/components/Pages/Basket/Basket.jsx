import styles from "./Basket.module.css"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"
import { BasketCard } from "../../widgets/BasketCard/BasketCard"
import { GetProduct } from "../../widgets/GetProduct/GetProduct"
import { phones } from "../../data"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"

export const Basket = () => {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                <WhiteBox className={styles.basket}>
                    <header className={styles.title}>
                        <h1>Корзина</h1>
                    </header>

                    <ul className={styles.list}>
                        <li><BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" /></li>
                        <li><BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" /></li>
                        <li><BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" /></li>
                        <li><BasketCard name="Apple iPhone 15 128Gb SIM + SIM Черный" img="ProductImages/Border.png" alt="#" /></li>
                    </ul>
                </WhiteBox>

                <div className={styles.getProduct}>
                    <GetProduct />
                </div>
            </main>
            <Footer />
        </div>
    )
}