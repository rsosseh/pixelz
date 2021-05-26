import React from 'react';
import styles from '../styles/PixelzBody.module.css';
import Ticker from 'react-ticker';

class PixelzBody extends React.Component{
    constructor(props){
        super(props);

        this.body = React.createRef();
    }
    componentDidMount(){
        window.addEventListener("scroll", this.colorScroller)
    }
    colorScroller = () => {
        if(window.pageYOffset > (window.innerHeight / 2)){
            this.body.current.classList.add('blue_bg');
        } else {
            this.body.current.classList.remove('blue_bg');
        }
    }
    render(){
        return(
            <div className={styles.body__container} ref={this.body}>
                <div className={styles.body__header}>
                    <div className={styles.body__title}>
                        <span className={styles.body__title_span}>
                            &nbsp;I like&nbsp; &nbsp;messing&nbsp; &nbsp;around with&nbsp; &nbsp;pixelz : ]&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="body__sprite-container">
                        <img className={[styles.body__sprite_1]} src="/mc-copy.png" />
                        <img className={[styles.body__sprite_2]} src="/npc_mel-copy.png" />
                        <img className={[styles.body__sprite_3]} src="/ice-man-trans.gif" />
                    </div>
                </div>
                <Ticker speed={2}>
                    {({ index }) => (
                        <>
                            <span className={styles.body__ticker}>✌🏿 🌞 💠</span>
                        </>
                    )}
                </Ticker>
                <div className={styles.body__body}>
                    <div className={styles.body__paragraph}>
                        <span className={styles.body__paragraph_span}>
                            when there's nothing better to do, i love spending time making little
                            creations like this guy over here. 🐺
                        </span>
                    </div>
                    <img className={styles.body__body_image} src="/wolf-rida.png" />
                </div>
            </div>
        )
    }
}

export default PixelzBody;