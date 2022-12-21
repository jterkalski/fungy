import styles from './Icons.module.scss';
import spotifyIcon from '../../assets/icons/spotify-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import youtubeIcon from '../../assets/icons/youtube-icon.svg';
import appleMusicIcon from '../../assets/icons/apple-music-icon.svg';
import tidalIcon from '../../assets/icons/tidal-icon.svg';
import Icon from './Icon';

const Icons = () => {
    return (
        <div className={styles.icons}>
            <Icon
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={spotifyIcon}
                alt='spotify logo'
            />
            <Icon
                href='https://www.instagram.com/fungy_band/'
                src={instagramIcon}
                alt='instagram logo'
            />
            <Icon
                href='https://www.facebook.com/fungy.band'
                src={facebookIcon}
                alt='facebook logo'
            />
            <Icon
                href='https://www.youtube.com/channel/UCXyQaRr4I7wIwtRSrFdyDnA'
                src={youtubeIcon}
                alt='youtube logo'
            />
            <Icon
                href='https://music.apple.com/pl/artist/fungy/1530002852'
                src={appleMusicIcon}
                alt='apple music logo'
            />
            <Icon
                href='https://tidal.com/browse/artist/21139499'
                src={tidalIcon}
                alt='tidal logo'
            />
        </div>
    );
};

export default Icons;
