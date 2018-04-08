import React from 'react';
import './FoodBar.css';
//height:'110px'
class FoodBar extends React.Component {
    render(){ 
        return (
            <div>
                <div className="row mt3 h4">
                    <div className='card'>
                      <p className='pointer link dim black' id="chinese-food">
                          <img alt='chinese' width='105px' height='90px' src="https://fthmb.tqn.com/h5640eOdlK-rhPQpHnGYT6zHsY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beef-and-vegetable-stir-fry-165955462-5834b0523df78c6f6a6af185.jpg"/>
                       <p className='f4'>Chinese</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="american-food">
                          <img alt='american' width='105px' height='90px'src="http://files.cityweekend.com.cn/storage/article/images/sliders/american_food_burgers_and_fries.jpg"/>
                       <p className='f4'>American</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="mexican-food">
                          <img alt='mexican' width='105px' height='90px' src="https://media-cdn.tripadvisor.com/media/photo-s/0f/16/5d/ba/authentic-mexican-food.jpg"/>
                       <p className='f4'>Mexican</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="pizza-food">
                          <img alt='pizza' width='105px' height='90px' src="https://blog.oxforddictionaries.com/wp-content/uploads/pizza.jpg"/>
                       <p className='f4'>Pizza</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="sandwiches-food">
                          <img alt='sandwiches' width='105px' height='90px' src="https://media.blueapron.com/recipes/2331/c_main_dish_images/1496341159-4-0117-5655/612_2PV2_Vietnamese_Sandwiches_WEB_Center_high_feature.jpg"/>
                       <p className='f4'>Sandwiches</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="salads-food">
                          <img alt='salads' width='105px' height='90px' src="http://jetspizza.com/dbphotos/display/b703e1abeacfebadadf4a6177241b822/664/410"/>
                       <p className='f4'>Salads</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="sushi-food">
                          <img alt='sushi' width='105px' height='90px' src="https://img.grouponcdn.com/iam/gCqNJ8JsqBhHxsT8eArB/BM-2048x1229/v1/c700x420.jpg"/>
                       <p className='f4'>Sushi</p>
                      </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="dessert-food">
                          <img alt='dessert' width='105px' height='90px' src="http://assets.kraftfoods.com/recipe_images/opendeploy/128187_640x428.jpg"/>
                       <p className='f4'>Dessert</p>
                      </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodBar;