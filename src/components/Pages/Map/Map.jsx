import React from "react";
import styles from "./Map.module.css";
import { Button } from "../../shared/Button/Button";

export const Map = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact}>
                <h1>Контакты</h1>

                <div className={styles.box}>
                    <img src="#" alt="#" />

                    <div className={styles.boxInfo}>
                        <p>Телефон</p>
                        <p>89383499996</p>
                    </div>
                </div>

                <div className={styles.box}>
                    <img src="#" alt="#" />

                    <div className={styles.boxInfo}>
                        <p>Телефон</p>
                        <p>89383499996</p>
                    </div>
                </div>
            </div>

            <Button name = "Положить маршрут"/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.923821664952!2d42.038754377332985!3d44.20863531632878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405800e79d812819%3A0x6bfabbc3c3013cb0!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxNTQsINCn0LXRgNC60LXRgdGB0LosINCa0LDRgNCw0YfQsNC10LLQvi3Qp9C10YDQutC10YHRgdC60LDRjyDQoNC10YHQv9GD0LHQu9C40LrQsCwgMzY5MDAx!5e0!3m2!1sru!2sru!4v1714898616490!5m2!1sru!2sru"
                width="100%" height="742" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}