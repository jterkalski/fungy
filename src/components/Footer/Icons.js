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
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={instagramIcon}
                alt='instagram logo'
            />
            <Icon
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={facebookIcon}
                alt='instagram logo'
            />
            <Icon
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={youtubeIcon}
                alt='instagram logo'
            />
            <Icon
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={appleMusicIcon}
                alt='instagram logo'
            />
            <Icon
                href='https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS'
                src={tidalIcon}
                alt='instagram logo'
            />
        </div>
    );
};

export default Icons;
