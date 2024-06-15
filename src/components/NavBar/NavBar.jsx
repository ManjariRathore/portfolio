import "./NavBar.css"
function NavBar({ name }) {

  return (
    <div className="navBarContainer">
      <div className="nav bg-gradient-to-b from-gray-800 to-black mt-10 z-50">
        <div className="left w-1/4">
          <a href="#Home" className="devName">
            Manjari Rathore
          </a>
        </div>
        <div className="center w-1/2">
          <div className="options">
            <a href="#Home" className="navEntry  rounded-full hover:shadow-xl transition duration-200 w-1/4">Home</a>
            <a href="#About" className="navEntry  rounded-full hover:shadow-xl transition duration-200 w-1/4">About</a>
            <a href="#Projects" className="navEntry  rounded-full hover:shadow-xl transition duration-200 w-1/4">Projects</a>
            <a href="#Contact" className="navEntry  rounded-full hover:shadow-xl transition duration-200 w-1/4">Contact</a>
          </div>
        </div>
        <div className="right w-1/4">
          <div className="downloadResume text-sm">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-stone-50 px-4 py-2 rounded-full tracking-widest uppercase font-medium bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200" onClick={downloadImgFile}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
const downloadImgFile = () => {
  console.log("download logic goes here")
  const link = document.createElement('a');
  link.href = "/dc2abacb-0f65-4dea-a90a-c491e2ff5ed9.jpeg";
  link.download = 'img.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export default NavBar;