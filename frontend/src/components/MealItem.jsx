import React from 'react';
import { Link } from 'react-router-dom';

const MealItem = ({ data }) => {
    return (
        <>
            {data ? (
                data.map(item => (
                    <Link key={item.idMeal} to={`/${item.idMeal}`}>
                        <div className="card">
                            <img src={item.strMealThumb} alt="" className="meal-img"/>
                            <h3>{item.strMeal}</h3>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Not Found</p>
            )}
        </>
    );
};

export default MealItem;
