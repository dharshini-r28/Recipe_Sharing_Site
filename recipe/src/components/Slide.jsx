import logo from '../image/logo.jpeg';
import plateImage from '../image/plate.jpeg';

const Slide = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="ptitle"><h2>USER PROFILE</h2></div>
                <div className="log"> <img src={logo} width="80px" alt="Logo" /></div>
                <div className="info">
                    <form>
                        <p>NAME: ABI</p>
                        <p>EMAIL ID: ABI@gmail.com</p>
                        <p>AGE: 23</p>
                        <p>GENDER: FEMALE</p>
                        <p>PHONE NO: 2341574684</p>
                        <p>COUNTRY: INDIA</p>
                        <button>EDIT</button>
                    </form>
                </div>
            </div>

            <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} onClick={openNav}>&#9776;</span>

            <div className="content">
                <div className="plate">
                    <img className="plate-image w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full fadeInRotate" src={plateImage} alt="Plate" />
                </div>
                <div className="text">
                    <h1>Welcome To Taste Trove</h1>
                    <h2 id="t1">Where You Can </h2>
                    <h3 id="t2">Share Your Recipes</h3>
                    <div className="quotes"><h4>"Discover culinary wonders that tantalize your taste buds and ignite your passion for cooking!"</h4></div>
                </div>
            </div>
        </>
    );
}

export default Slide;
