import logo from '../image/logo.jpeg';
import plateImage from '../image/plate.jpeg';

const Slide = () => {
    // const openNav = () => {
    //     document.getElementById("mySidenav").style.width = "250px";
    // }

    // const closeNav = () => {
    //     document.getElementById("mySidenav").style.width = "0";
    // }

    return (
        <>
            <div className="bg-image">
        <img src="public\img10.jpg" alt="Background Image" />
    </div>
            {/* <div id="mySidenav" className="sidenav">

                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="ptitle"><h2>USER PROFILE</h2></div><br></br><br></br>
                <div className="log"> <img src={logo}  alt="Logo" /></div>
                <div className="info">
                    <form>
                        <p>NAME: ABI</p><br></br>
                        <p>EMAIL ID: ABI@gmail.com</p><br></br>
                        <p>AGE: 23</p><br></br>
                        <p>GENDER: FEMALE</p>
                        <p>PHONE NO: 2341574684</p>
                        <p>COUNTRY: INDIA</p>
                        <button>EDIT</button>
                    </form>
                </div>
            </div> */}

            {/* <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} onClick={openNav}>&#9776;</span> */}

            <div className="contenth">
        
        
                </div>
                <div className="text">
                    <h1>Welcome To Taste Trove !!!!</h1>
                    <br></br>
                    <h2 id="t1">Where You Can </h2>
                    <h3 id="t2">Share Your Recipes</h3><br></br>
                    <h3 id="t2"><mark>Love...Share...Connect</mark></h3>
                    <div className="quotes"><h4>"Discover culinary wonders that tantalize your taste buds and ignite your passion for cooking!"</h4></div>
                </div>
            
        </>
    );
}

export default Slide;
