
const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#beranda">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#tentang">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#proyek">
                <i className="ri-reddit-fill ri-2x"></i>
            </a>
            <a href="#kontak">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>            
        </div>
    </div>
  )
}

export default Footer