/* eslint-disable jsx-a11y/anchor-is-valid */
import SideBarSkeleton from './sidebar-skeleton'
// import playlist01 from '../../../img/playlist01.png'
// import playlist02 from '../../../img/playlist02.png'
// import playlist03 from '../../../img/playlist03.png'
import '../../../css/style.css'

const SideBar = () => (
  <div className="main__sidebar sidebar">
    {/* {loading && <SideBarSkeleton />}
    {!loading && videos.map((list, index) => <PlaylistItem />)} */}
    <SideBarSkeleton />
    {/* <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__avatar" />
    </div>
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist01}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist02}
              alt="day's playlist"
            />
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={playlist03}
              alt="day's playlist"
            />
          </a>
        </div>
      </div>
    </div> */}
  </div>
)

export default SideBar
