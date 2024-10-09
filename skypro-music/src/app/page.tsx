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
               
                </div>
              </div>
            </div>
            <div className={classNames(styles.main__sidebar ,styles.sidebar)}>
              <div className={styles.sidebar__personal}>
                <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
                <div className={styles.sidebar__icon}>
                  <svg>
                    <use xlinkHref="/img/icon/sprite.svg#logout" />
                  </svg>
                </div>
              </div>
              <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        width={100}
                        height={100}
                        className={styles.sidebar__img}
                        src="/img/playlist01.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        width={100}
                        height={100}
                        className={styles.sidebar__img}
                        src="/img/playlist02.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                  <div className={styles.sidebar__item}>
                    <a className={styles.sidebar__link} href="#">
                      <Image
                        width={100}
                        height={100}
                        className={styles.sidebar__img}
                        src="/img/playlist03.png"
                        alt="day's playlist"

                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className={styles.bar}>
            <div className={styles.bar__content}>
              <div className={styles.bar__player_progress} />
              <div className={styles.bar__player_block}>
                <div className={classNames(styles.bar__player , styles.player)}>
                  <div className={styles.player__controls}>
                    <div className={styles.player__btn_prev}>
                      <svg className={styles.player__btn_prev_svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                      </svg>
                    </div>
                    <div className={classNames(styles.player__btn_play, styles._btn)}>
                      <svg className={styles.player__btn_play_svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                      </svg>
                    </div>
                    <div className={styles.player__btn_next}>
                      <svg className={styles.player__btn_next_svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                      </svg>
                    </div>
                    <div className={classNames(styles.player__btn_repeat, styles._btn_icon)}>
                      <svg className={styles.player__btn_repeat_svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                      </svg>
                    </div>
                    <div className={classNames(styles.player__btn_shuffle ,styles._btn_icon)}>
                      <svg className={styles.player__btn_shuffle_svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                      </svg>
                    </div>
                  </div>
                  <div className={classNames(styles.player__track_play ,styles.track_play)}>
                    <div className={styles.track_play__contain}>
                      <div className={styles.track_play__image}>
                        <svg className={styles.track_play__svg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                        </svg>
                      </div>
                      <div className={styles.track_play__author}>
                        <a className={styles.track_play__author_link} href="http://">
                          Ты та...
                        </a>
                      </div>
                      <div className={styles.track_play__album}>
                        <a className={styles.track_play__album_ink} href="http://">
                          Баста
                        </a>
                      </div>
                    </div>
                    <div className={styles.track_play__like_dis}>
                      <div className={classNames(styles.track_play__like ,styles._btn_icon)}>
                        <svg className={styles.track_play__like_svg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                        </svg>
                      </div>
                      <div className={classNames(styles.track_play__dislike , styles._btn_icon)}>
                        <svg className={styles.track_play__dislike_svg}>
                          <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classNames(styles.bar__volume_block , styles.volume)}>
                  <div className={styles.volume__content}>
                    <div className={styles.volume__image}>
                      <svg className={styles.volume__svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                      </svg>
                    </div>
                    <div className={classNames(styles.volume__progress ,  styles._btn)}>
                      <input
                        className={classNames(styles.volume__progress_line , styles._btn)}
                        type="range"
                        name="range"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer} />
        </div>
      </div>

    </>
  );
}
