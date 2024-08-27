import { useState, useEffect, useRef, CSSProperties } from 'react';
import convert from 'css-time-converter'

interface FadeGalleryProps {
    images: string[];
    interval: number;
    fadeDuration: string;
}

const defaultProps:FadeGalleryProps = {
    images: [],
    interval: 5000,
    fadeDuration: '4s'
}

export default function fadeGallery(props: Partial<FadeGalleryProps>) {
    const options = Object.assign(defaultProps, props)
    const index = useRef<number>(0)
    const [turn, setTurn] = useState(1);

    const [img1Props, setImg1Props] = useState<Partial<CSSProperties>>({
        opacity: 1,
        backgroundImage: `url(${options.images[(index.current) % options.images.length]})`,
        transitionProperty: 'opacity',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: options.fadeDuration
    })

    const [img2Props, setImg2Props] = useState<Partial<CSSProperties>>({
        opacity: 0,
        backgroundImage: `url(${options.images[(index.current + 1) % options.images.length]})`,
        transitionProperty: 'opacity',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: options.fadeDuration
    })

    function transitionTo(i:number) {
        setImg1Props(props=>{
            props.backgroundImage = turn == 0 ? `url(${options.images[i % options.images.length]})` : props.backgroundImage
            props.opacity = turn == 0 ? 1 : 0
            return props
        })
        setImg2Props(props=>{
            props.backgroundImage = turn == 1 ? `url(${options.images[i % options.images.length]})` : props.backgroundImage
            props.opacity = turn == 1 ? 1 : 0
            return props
        })

        setTurn(a=>a==1?0:1);
        index.current = i
    }

    useEffect(() => {
        const imageSwitcher = setInterval(() => {
        transitionTo(index.current + 1)
        }, options.interval);
        return () => clearInterval(imageSwitcher);
    }, [index.current, options.images, options.interval]);

    const previous = () => {
        transitionTo(index.current - 1)
    };

    const next = () => {
        transitionTo(index.current + 1)
    };

    return {
        styleProps1: img1Props,
        styleProps2: img2Props,
        previous,
        next
    }
}
