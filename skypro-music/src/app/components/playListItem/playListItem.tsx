import styles from '/src/app/page.module.css';
import classNames from 'classnames';

function PlayListItem({ id ,key , trackImg , trackName , trackAuthor , trackAlbum, trackDuration } : { id: string ; key : string ; trackImg : string ;  trackName : string;  trackAuthor : string , trackAlbum : string ; trackDuration : string }) {
    return (
        <>
               <div className={classNames(styles.playlist__item)}>
                    <div className={classNames(styles.playlist__track ,styles.track)}>
                      <div className={styles.track__title}>
                        <div className={styles.track__title_image}>
                          <svg className={styles.track__title_svg}>
                            <use xlinkHref={trackImg} />
                          </svg>
                        </div>
                        <div className={styles.track__title_text}>
                          <a className={styles.track__title_link} href="http://">
                            {trackName} <span className={styles.track__title_span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a className={styles.track__author_link} href="http://">
                          {trackAuthor}
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a className={styles.track__album_link} href="http://">
                          {trackAlbum}
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time_svg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time_text}>{trackDuration}</span>
                      </div>
                    </div>
                  </div>
                  
        </>
    )
}

export default PlayListItem;