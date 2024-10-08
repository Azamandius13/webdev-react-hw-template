import Image from 'next/image';
import styles from '/src/app/page.module.css';
import classNames from 'classnames';
import PlayListItem from './components/playListItem/playListItem';


export default function Home() {
  
  const trackListArray = [
    {
      trackId : "1",
      trackSvgUrl : "/img/icon/sprite.svg#icon-note" ,
      trackName : "Guilt",
      trackAuthor : "Nero",
      trackAlbum : "Welcome Reality",
      trackDuration : "4:44"
    },
    {
      trackId : "2",
      trackSvgUrl : "/img/icon/sprite.svg#icon-note" ,
      trackName : "Elektro",
      trackAuthor : "Dynoro, Outwork, Mr. Gee",
      trackAlbum : "Elektro",
      trackDuration : "2:22"
    },

    {
      trackId : "3",
      trackSvgUrl : "/img/icon/sprite.svg#icon-note" ,
      trackName : "I’m Fire",
      trackAuthor : "Ali Bakgor",
      trackAlbum : " I’m Fire",
      trackDuration : "2:22"
    }

  ]
  
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <nav className={classNames(styles.main__nav,styles.nav)}>
              <div className={classNames(styles.nav__logo,styles.logo)}>
                <Image width={100} height={100} alt="logo" className={styles.logo__image} src="/img/logo.png" />
              </div>
              <div className={classNames(styles.nav__burger , styles.burger)}>
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
              </div>
              <div className={classNames(styles.nav__menu , styles.menu)}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>
                      Главное
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.menu__link}>
                      Мой плейлист
                    </a>
                  </li>
                  <li className={styles.menu__item}>
                    <a href="../signin.html" className={styles.menu__link}>
                      Войти
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={classNames(styles.main__centerblock ,styles.centerblock)}>
              <div className={classNames(styles.centerblock__search ,styles.search)}>
                <svg className={styles.search__svg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                </svg>
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск"
                  name="search"
                />
              </div>
              <h2 className={styles.centerblockH2}>Треки</h2>
              <div className={classNames(styles.centerblock__filter ,styles.filter)}>
                <div className={styles.fiter__title}>Искать по:</div>
                <div className={classNames(styles.filter__button , styles.btn_text)}>
                  исполнителю
                </div>
                <div className={classNames(styles.filter__button , styles.btn_text)}>
                  году выпуска
                </div>
                <div className={classNames(styles.filter__button , styles.btn_text)}>жанру</div>
              </div>
              <div className={classNames(styles.centerblock__content , styles.playlist_content)}>
                <div className={classNames(styles.content__title ,styles.playlist_title)}>
                  <div className={classNames(styles.playlist_title__col , styles.col01)}>Трек</div>
                  <div className={classNames(styles.playlist_title__col ,styles.col02)}>Исполнитель</div>
                  <div className={classNames(styles.playlist_title__col ,styles.col03)}>Альбом</div>
                  <div className={classNames(styles.playlist_title__col ,styles.col04)}>
                    <svg className={styles.playlist_title__svg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
                    </svg>
                  </div>
                </div>
                <div className={classNames(styles.content__playlist , styles.playlist)}>
                  {
                    trackListArray.map((track) => (
                      <PlayListItem
                        id={track.trackId}
                        key={track.trackId}
                        trackImg={track.trackSvgUrl}
                        trackName={track.trackName}
                        trackAuthor={track.trackAuthor}
                        trackAlbum={track.trackAlbum}
                        trackDuration={track.trackDuration}
                      />
                    ))
                  }
                  {/* <div className={classNames(styles.playlist__item)}>
                    <div className={classNames(styles.playlist__track ,styles.track)}>
                      <div className={styles.track__title}>
                        <div className={styles.track__title_image}>
                          <svg className={styles.track__title_svg}>
                            <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                          </svg>
                        </div>
                        <div className={styles.track__title_text}>
                          <a className={styles.track__title_link} href="http://">
                            Guilt <span className={styles.track__title_span} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.track__author}>
                        <a className={styles.track__author_link} href="http://">
                          Nero
                        </a>
                      </div>
                      <div className={styles.track__album}>
                        <a className={styles.track__album_link} href="http://">
                          Welcome Reality
                        </a>
                      </div>
                      <div className={styles.track__time}>
                        <svg className={styles.track__time_svg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                        </svg>
                        <span className={styles.track__time_text}>4:44</span>
                      </div>
                    </div>
                  </div>
                   */}
                </div>
              </div>
            </div>
            <div className="main__sidebar sidebar">
              <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                  <svg>
                    <use xlinkHref="img/icon/sprite.svg#logout" />
                  </svg>
                </div>
              </div>
              <div className="sidebar__block">
                <div className="sidebar__list">
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="sidebar__img"
                        src="/img/playlist01.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="sidebar__img"
                        src="/img/playlist02.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="sidebar__img"
                        src="/img/playlist03.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="bar">
            <div className="bar__content">
              <div className="bar__player-progress" />
              <div className="bar__player-block">
                <div className="bar__player player">
                  <div className="player__controls">
                    <div className="player__btn-prev">
                      <svg className="player__btn-prev-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                      </svg>
                    </div>
                    <div className="player__btn-play _btn">
                      <svg className="player__btn-play-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-play" />
                      </svg>
                    </div>
                    <div className="player__btn-next">
                      <svg className="player__btn-next-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-next" />
                      </svg>
                    </div>
                    <div className="player__btn-repeat _btn-icon">
                      <svg className="player__btn-repeat-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                      </svg>
                    </div>
                    <div className="player__btn-shuffle _btn-icon">
                      <svg className="player__btn-shuffle-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                      </svg>
                    </div>
                  </div>
                  <div className="player__track-play track-play">
                    <div className="track-play__contain">
                      <div className="track-play__image">
                        <svg className="track-play__svg">
                          <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </svg>
                      </div>
                      <div className="track-play__author">
                        <a className="track-play__author-link" href="http://">
                          Ты та...
                        </a>
                      </div>
                      <div className="track-play__album">
                        <a className="track-play__album-link" href="http://">
                          Баста
                        </a>
                      </div>
                    </div>
                    <div className="track-play__like-dis">
                      <div className="track-play__like _btn-icon">
                        <svg className="track-play__like-svg">
                          <use xlinkHref="img/icon/sprite.svg#icon-like" />
                        </svg>
                      </div>
                      <div className="track-play__dislike _btn-icon">
                        <svg className="track-play__dislike-svg">
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bar__volume-block volume">
                  <div className="volume__content">
                    <div className="volume__image">
                      <svg className="volume__svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                      </svg>
                    </div>
                    <div className="volume__progress _btn">
                      <input
                        className="volume__progress-line _btn"
                        type="range"
                        name="range"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer" />
        </div>
      </div>

    </>
  );
}
