import styles from './Iframe.module.scss';

const Iframe = ({ src, title }) => {
    return (
        <iframe
            width='100%'
            src={src + '?autoplay=1'}
            title={title}
            allow='autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
        ></iframe>
    );
};

export default Iframe;
