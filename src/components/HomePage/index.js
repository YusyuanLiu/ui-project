import React from "react";
import Header from '../Header';
import styles from './index.module.scss';
import { Icon, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa";
import {
    PiRocketLaunchLight,
    PiFlyingSaucerDuotone,
    PiMagicWandDuotone,
    PiBoundingBoxDuotone,
    PiPackageDuotone,
} from "react-icons/pi";
import { GiDiamonds } from "react-icons/gi";
import iphone from './iphone.png';
import iphoneImg from './iphoneImg.png';
import cardImg from './cardImg.png';
import man from './man.jpeg';
import woman from './woman.jpeg';

function Phone(props) {
    return props.type === "web" ? (
        <div className={styles['web-iphone-image-wrapper']}>
            {/* <img src={iphone} /> */}
        </div>
    ) : (
        <div className={styles['mobile-iphone-image-wrapper']}>
            {/* <img src={iphone} /> */}
        </div>
    );
}

function FeatureCard(props) {
    return (
        <div className={styles['feature-button']}>
            <div className={styles['feature-icon']}>
                <Icon as={props.icon} boxSize={7} />
            </div>
            <div className={styles['feature-wording']}>
                <p>{props.wording}</p>
            </div>
        </div>
    );
}

function ImgCard(props) {
    return (
        <Card className={styles['card']} borderRadius='lg'>
            <CardBody>
                <Image
                    src={props.img}
                    borderRadius='lg'
                    className={styles['card-image']}
                />
                <Stack mt='6' spacing='3'>
                    <h4 >{props.title}</h4>
                    <p>{props.subtitle}</p>
                    <p>{props.category}</p>
                </Stack>
            </CardBody>
        </Card>
    );
}

function CommentCard(props) {
    const counters = Array.from({ length: props.stars });

    return (
        <Card className={styles['comment']} borderRadius='lg'>
            <CardBody className={styles['comment-wrapper']}>
                <Stack className={styles['comment-profile']}>
                    <Image
                        src={props.img}
                        borderRadius='lg'
                        className={styles['comment-image']}
                    />
                    <h4 >{props.name}</h4> 
                    <p>{props.job}</p>
                </Stack>
                <Stack mt='6' spacing='3' className={styles['comment-content']}>
                    <div className={styles['comment-stars']}>
                    {counters.map(() => (
                        <Icon as={FaStar} boxSize={7} color="yellow.300" />
                    ))}
                    </div>
                    <p>{props.comment}</p>
                </Stack>
            </CardBody>
        </Card>
    );
}

function HomePage() {
    const featureList = [
        {
            icon: PiFlyingSaucerDuotone,
            wording: "Fast building",
        },
        {
            icon: PiMagicWandDuotone,
            wording: "Easy to edit",
        },
        {
            icon: PiBoundingBoxDuotone,
            wording: "Responsiveness",
        },
        {
            icon: PiPackageDuotone,
            wording: "No code needed",
        },
    ];

    const cardList = [
        {
            img: cardImg,
            title: "Project Title",
            subtitle: "Short Description",
            category: "Category",
        },
        {
            img: cardImg,
            title: "Project Title",
            subtitle: "Short Description",
            category: "Category",
        },
        {
            img: cardImg,
            title: "Project Title",
            subtitle: "Short Description",
            category: "Category",
        },
    ];

    const commentList = [
        {
            img: woman,
            name: 'Lauren M.',
            job: 'UI Designer @Boo',
            stars: 5,
            comment: '"Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."'
        },
        {
            img: man,
            name: 'David B.',
            job: 'UI Designer @Boo',
            stars: 5,
            comment: '“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”'
        },
    ]

    return (
        <div className={styles['page-container']}>
            <Header />
            <div className={styles['title-container']}>
                <div className={styles['title-wording-wrapper']}>
                    <div className={styles['title-wording']}>
                        <h2>Create Engaging Landing Pages</h2>
                        <p>Build beautiful landing pages in record time with <a href="https://www.animaapp.com/">Anima’s</a> Landing Page UI kit for Figma. No code required!</p>
                    </div>
                    <div className={styles['title-buttons']}>
                        <Button leftIcon={<PiRocketLaunchLight />} bg='#009379' color='#FFFFFF' height='60px' width='221px'>Get Started</Button>
                        <Button bg='#FFFFFF' borderColor='#009379' color='#009379' height='60px' border='1px' width='221px'>How it works</Button>
                    </div>
                </div>
                <div className={styles['phone-block-wrapper']}>
                    <Icon className={styles['icon-background-1']} as={GiDiamonds} boxSize={10} color="white" />
                    <Icon className={styles['icon-background-2']} as={GiDiamonds} boxSize={10} color="red" />
                    <div className={styles['white-background']}></div>
                    <Phone className={styles['web-phone']} type="web"/>
                </div>
            </div>
            <div className={styles['content-container']}>
                <div className={styles['feature-block-container']}>
                    <div className={styles['feature-phone-wrapper']}>
                        <Icon className={styles['icon-background-1']} as={GiDiamonds} boxSize={10} color="white" />
                        <Icon className={styles['icon-background-2']} as={GiDiamonds} boxSize={20} color="red" />
                        <div className={styles['white-background']}></div>
                        <Phone className={styles['mobile-phone']} type="mobile"/>
                    </div>
                    <div className={styles['feature-wording-wrapper']}>
                        <div className={styles['feature-wording']}>
                            <h2>Our features</h2>
                            <p>Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.</p>
                        </div>
                        <div className={styles['feature-buttons']}>
                            {featureList.map((feature) => (
                                <FeatureCard icon={feature.icon} wording={feature.wording} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['card-block-container']}>
                    <div className={styles['card-wording-wrapper']}>
                        <h2>Discover our latest work</h2>
                        <p>Explore our portfolio and see the latest and greatest projects that we've brought to life.</p>
                    </div>
                    <div className={styles['card-wrapper']}>
                        {cardList.map((card) => (
                            <ImgCard
                                img={card.img}
                                title={card.title}
                                subtitle={card.subtitle}
                                category={card.category}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles['comment-block-container']}>
                    <div className={styles['comment-wording-wrapper']}>
                        <h2>Real Stories from Satisfied Customers</h2>
                        <p>See how our landing page ui kit is making an impact.</p>
                    </div>
                    <div className={styles['comment-card-wrapper']}>
                        {commentList.map((comment) => (
                            <CommentCard
                                img={comment.img}
                                name={comment.name}
                                job={comment.job}
                                stars={comment.stars}
                                comment={comment.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;