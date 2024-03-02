import React from "react";
import styles from './index.module.scss';
import { Icon, Button } from '@chakra-ui/react';
import { PiTelevision } from "react-icons/pi";
import { PiRocketLaunchLight } from "react-icons/pi";


function Header() {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-title-wrapper']}>
                <div className={styles['header-icon']}>
                    <Icon as={PiTelevision} boxSize={10} />
                </div>
                <div className={styles['header-title']}>
                    <p><span className={styles['first-title']}>Landing</span><span className={styles['end-title']}>Page</span></p>
                </div>
            </div>
            <div className={styles['header-buttons-wrapper']}>
                <Button colorScheme='teal' variant='ghost'>Contact</Button>
                <Button bg='#E5F4F2' color='#009379' height='60px' width='221px'>How it works</Button>
                <Button leftIcon={<PiRocketLaunchLight />} bg='#009379' color='#FFFFFF' height='60px' width='221px'>Get Started</Button>
            </div>
        </div>
    );
}

export default Header;