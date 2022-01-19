import React, { useRef,useEffect} from 'react';
import { Button, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CardCarousel from './CardCarousel';
import imgSlider1 from './slider-images/slider-1.jpg';
import imgSlider2 from './slider-images/slider-2.jpg';
import imgSlider3 from './slider-images/slider-3.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const useStyles = makeStyles(theme =>({
    main_container_styles:{
        position: 'relative',
        overflow: 'hidden'

    },
    slider_container_styles:{
        display: 'flex',
        flexWrap: 'nowrap'
    },
    controls_styles:{
        position: 'absolute',
        top: '0',
        zIndex: '20',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
    },
    button_container_styles:{
        background: 'transparent'
    },
    button_styles_left:{
        transform: 'scale(1)',
        transition: 'all 0.4s ease-out',
        pointerEvents: 'all',
        cursor: 'pointer',
        outline: 'none',
        widht: '100px',
        height: '100%',
        left: '0',
        position: 'absolute',
        '&:hover':{
            backgroundColor: 'transparent',
        }
    },
    button_styles_right:{
        transform: 'scale(1)',
        transition: 'all 0.4s ease-out',

        pointerEvents: 'all',
        cursor: 'pointer',
        outline: 'none',
        widht: '100px',
        height: '100%',
        right: '0',
        position: 'absolute',
        '&:hover':{
            backgroundColor: 'transparent',
        }
    },
    chevron_styles:{
        [theme.breakpoints.up('sm')]:{
            transform: 'scale(1.2)'
        },
        [theme.breakpoints.up('md')]:{
            transform: 'scale(1.4)'
        },
        [theme.breakpoints.up('lg')]:{
            transform: 'scale(1.6)'
        },
        [theme.breakpoints.up('xl')]:{
            transform: 'scale(2)'
        },
        transition:'all .08s ease',
        boxShadow: '(10px 0px 0px #fff)',
        '&:hover':{
            color:'#fff',
            [theme.breakpoints.up('sm')]:{
                transform: 'scale(1.5)'
            },
            [theme.breakpoints.up('md')]:{
                transform: 'scale(1.8)'
            },
            [theme.breakpoints.up('lg')]:{
                transform: 'scale(2)'
            },
            [theme.breakpoints.up('xl')]:{
                transform: 'scale(2.5)'
            }
        }
    }
}))

const SliderCarousel = ({controls=true, autoplay=true, speed=500, interval=5000}) => {

    const boxCarousel = useRef(null);
    const intervalCarousel = useRef(null);

    const img1={
            id: 'img1',
            name: "Cama #1",
            description: "Felicidad: Darle la vuelta a la almohada y seguir durmiendo",
            imgSrc: imgSlider1
            };

    const img2={
            id: 'img2',
            name: "Cama #2",
            description: "Siempre hay que tener un penúltimo sueño",
            imgSrc: imgSlider2
            };
    
    const img3={
            id: 'img3',
            name: "Living #1",
            description: "Los detalles no son sólo detalles. Ellos hacen el DISEÑO",
            imgSrc: imgSlider3
            };
    

    const {slider_container_styles, button_styles_left,button_styles_right,main_container_styles,button_container_styles,controls_styles,chevron_styles} = useStyles();

    

    const handleClickLeft = ()=>{
        if(boxCarousel.current.children.length >0){
            const arrayLength = boxCarousel.current.children.length - 1;
            const lastElement = boxCarousel.current.children[arrayLength];

            boxCarousel.current.insertBefore(lastElement,boxCarousel.current.firstChild)
            const sizeSlide = boxCarousel.current.children[0].offsetWidth;

            boxCarousel.current.style.transition = 'none';
            boxCarousel.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                boxCarousel.current.style.transition = `${speed}ms ease-out all`;
                boxCarousel.current.style.transform = 'translateX(0)';
            }, 30);
        }
    
    };

    const handleClickRight = ()=>{
        if(boxCarousel.current.children.length > 0){
            const firstElement = boxCarousel.current.children[0];
            const sizeSlide = boxCarousel.current.children[0].offsetWidth;
            
            boxCarousel.current.style.transition = `${speed}ms ease-out all`;

            boxCarousel.current.style.transform = `translateX(-${sizeSlide}px)`;

            const transitionEnd = ()=>{
                boxCarousel.current.style.transition = 'none';
                boxCarousel.current.style.transform = `translateX(0)`;

                boxCarousel.current.appendChild(firstElement);

                boxCarousel.current.removeEventListener('transitionend', transitionEnd)
            }

            boxCarousel.current.addEventListener('transitionend', transitionEnd);

        };
    };
    
    useEffect(() => {
        if(autoplay){
            intervalCarousel.current = setInterval(() => {
                handleClickRight()
            }, `${interval}`);
    
            boxCarousel.current.addEventListener('mouseenter',()=>{
                clearInterval(intervalCarousel.current)
            });
    
            boxCarousel.current.addEventListener('mouseleave', ()=>{
                intervalCarousel.current = setInterval(() => {
                    handleClickRight()
                }, `${interval}`);
            })
        }

    }, [])

    return (

            <Box className={main_container_styles} >
                <Box className={slider_container_styles} ref={boxCarousel}>
                    <CardCarousel 
                        imgSrc={img1.imgSrc}
                        alt={img1.name}
                        description={img1.description}
                    />
                    <CardCarousel 
                        imgSrc={img2.imgSrc}
                        alt={img2.name}
                        description={img2.description}
                    />
                    <CardCarousel 
                        imgSrc={img3.imgSrc}
                        alt={img3.name}
                        description={img3.description}
                    />
                </Box>
                {controls ? <div className={controls_styles}>    
                    <div className={button_container_styles}>
                        <Button onClick={handleClickLeft} className={button_styles_left}><ChevronLeftIcon color='primary' fontSize='large' className={chevron_styles} /></Button>
                    </div>
                    <div className={button_container_styles}>
                        <Button onClick={handleClickRight} className={button_styles_right}><ChevronRightIcon color='primary' fontSize='large' className={chevron_styles} /></Button>
                    </div>
                </div> : null}
            </Box>

    )


}



export default SliderCarousel;

/* */