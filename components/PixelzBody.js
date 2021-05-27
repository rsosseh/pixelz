import React from 'react';
import styles from '../styles/PixelzBody.module.css';
import Ticker from 'react-ticker';

class PixelzBody extends React.Component{
    constructor(props){
        super(props);
        this.body = React.createRef();
    }
    componentDidMount(){
        window.addEventListener("scroll", this.colorScroller);
    }
    colorScroller = () => {
        if(window.pageYOffset > (window.innerHeight / 2)){
            this.body.current.classList.add('blue_bg');
        } else {
            this.body.current.classList.remove('blue_bg');
        }
    }
    render(){
        const { title, desc, sprite_1, sprite_2, sprite_3, body_image } = this.props;
        return(
            <div className={styles.body__container} ref={this.body}>
                <div className={styles.body__header}>
                    <div className={styles.body__title}>
                        <span className={styles.body__title_span}>
                            {`${title} : ]`}
                        </span>
                    </div>
                    <div className="body__sprite-container">
                        <img className={[styles.body__sprite_1]} src={sprite_1} />
                        <img className={[styles.body__sprite_2]} src={sprite_2} />
                        <img className={[styles.body__sprite_3]} src={sprite_3} />
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
                            {`${desc} 🐺`}
                        </span>
                    </div>
                    <img className={styles.body__body_image} src={body_image} />
                </div>
            </div>
        )
    }
}

export default PixelzBody;