import react, { useEffect, useState } from 'react';
import styles from '@/styles/homestay/homestay_list_restaurant.module.css'
import moment from 'moment';
import Image from 'next/image';
export default function ListNearRestaurant(props) {




    return (
        <div className={styles.list_item}>
            <img className={styles.picture} src="/images/homestay/restaurant.jpg" alt='hungha' />
            

            <div>
                <div style={{ padding: '8px 8px 16px 8px'}}>
                  
                    <div className={styles.homestay_title}>
                    Richico Apartments And Hotel 
                    </div>
                    <div className={styles.homestay_location}>
                       
                      14m
                    </div>
                  
                </div>
            </div>
        </div>
    )

}