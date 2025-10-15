// import logo from '../image/logo.jpeg';
// import plateImage from '../image/plate.jpeg';

// const Slide = () => {
   

//     return (
//         <>
//             <div className="bg-image">
//         <img src="public\img10.jpg" alt="Background Image" />
//     </div>
            

//             <div className="contenth">
        
        
//                 </div>
//                 <div className="text">
//                     <h1>Welcome To Taste Trove !!!!</h1>
//                     <br></br>
//                     <h2 id="t1">Where You Can </h2>
//                     <h3 id="t2">Share Your Recipes</h3><br></br>
//                     <h3 id="t2"><mark>Love...Share...Connect</mark></h3>
//                     <div className="quotes"><h4>"Discover culinary wonders that tantalize your taste buds and ignite your passion for cooking!"</h4></div>
//                 </div>
            
//         </>
//     );
// }

// export default Slide;
import logo from '../image/logo.jpeg';
import plateImage from '../image/plate.jpeg';

const Slide = () => {
    return (
        <>
            <div className="bg-image"></div> {/* Background only */}

            <div className="text">
                <h1>Welcome To Taste Trove !!!!</h1>
                <h2 id="t1">Where You Can </h2>
                <h3 id="t2">Share Your Recipes</h3>
                <h3 id="t2"><mark>Love...Share...Connect</mark></h3>
                <div className="quotes">
                    <h4>
                        "Discover culinary wonders that tantalize your taste buds and ignite your passion for cooking!"
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Slide;
