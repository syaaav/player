/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import SideBarSkeleton from './sidebar-skeleton'
import SideBarItem from './sidebar-item'
import '../../../css/style.css'

const SideBar = () => {
  const [download, setDownload] = useState(false)

  useEffect(() => {
    setDownload(!download)
  }, [])

  return (
    <div className="main__sidebar sidebar">
      {!download ? <SideBarSkeleton /> : <SideBarItem />}
      {/* {loading && <SideBarSkeleton />}
    {!loading && videos.map((list, index) => <PlaylistItem />)} */}
    </div>
  )
}

export default SideBar
