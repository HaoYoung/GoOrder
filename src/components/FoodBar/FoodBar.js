import React from 'react';
import './FoodBar.css';
import TypeFilter from './TypeFilter/TypeFilter';

class FoodBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChinese: false,
            showAmerican: false,
            showMexican: false,
            showPizza: false,
            showSandwiches: false,
            showChicken: false,
            showSalads: false,
            showSushi: false,
            showDessert: false
        }
    }
    
    onChineseClick = () => { this.setState({showChinese: true}); }
    closeChinese = () => { this.setState({showChinese: false}); }
    onAmericanClick = () => { this.setState({showAmerican: true}); }
    closeAmerican = () => { this.setState({showAmerican: false}); }
    onMexicanClick = () => { this.setState({showMexican: true}); }
    closeMexican = () => { this.setState({showMexican: false}); }
    onPizzaClick = () => { this.setState({showPizza: true}); }
    closePizza = () => { this.setState({showPizza: false}); }
    onSandwichesClick = () => { this.setState({showSandwiches: true}); }
    closeSandwiches = () => { this.setState({showSandwiches: false}); }
    onChickenClick = () => { this.setState({showChicken: true}); }
    closeChicken = () => { this.setState({showChicken: false}); }
    onSaladsClick = () => { this.setState({showSalads: true}); }
    closeSalads = () => { this.setState({showSalads: false}); }
    onSushiClick = () => { this.setState({showSushi: true}); }
    closeSushi = () => { this.setState({showSushi: false}); }
    onDessertClick = () => { this.setState({showDessert: true}); }
    closeDessert = () => { this.setState({showDessert: false}); }
    
    render(){ 
        return (
            <div className='container-fluid'>
                <div className="row mt3 mb1" style={{height: '110px'}}>
                    <div className='card'>
                        <p className='pointer link dim black' id="chinese-food" onClick={this.onChineseClick}>
                            <img alt='chinese' width='105px' height='90px' src="https://fthmb.tqn.com/h5640eOdlK-rhPQpHnGYT6zHsY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beef-and-vegetable-stir-fry-165955462-5834b0523df78c6f6a6af185.jpg"/>
                            <p className='f4'>Chinese</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="american-food" onClick={this.onAmericanClick}>
                            <img alt='american' width='105px' height='90px'src="http://files.cityweekend.com.cn/storage/article/images/sliders/american_food_burgers_and_fries.jpg"/>
                            <p className='f4'>American</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="mexican-food" onClick={this.onMexicanClick}>
                            <img alt='mexican' width='105px' height='90px' src="https://media-cdn.tripadvisor.com/media/photo-s/0f/16/5d/ba/authentic-mexican-food.jpg"/>
                            <p className='f4'>Mexican</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="pizza-food" onClick={this.onPizzaClick}>
                            <img alt='pizza' width='105px' height='90px' src="https://blog.oxforddictionaries.com/wp-content/uploads/pizza.jpg"/>
                            <p className='f4'>Pizza</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="sandwiches-food" onClick={this.onSandwichesClick}>
                            <img alt='sandwiches' width='105px' height='90px' src="https://media.blueapron.com/recipes/2331/c_main_dish_images/1496341159-4-0117-5655/612_2PV2_Vietnamese_Sandwiches_WEB_Center_high_feature.jpg"/>
                            <p className='f4'>Sandwiches</p>
                        </p>
                    </div>
                    
                    <div className='card'>
                        <p className='pointer link dim black' id="chicken-wings" onClick={this.onChickenClick}>
                            <img alt='sandwiches' width='105px' height='90px' src="https://images-gmi-pmc.edge-generalmills.com/f33a4e84-6cc8-4c6f-878c-c40651cef816.jpg"/>
                            <p className='f4'>Chicken Wings</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="salads-food" onClick={this.onSaladsClick}>
                            <img alt='salads' width='105px' height='90px' src="http://jetspizza.com/dbphotos/display/b703e1abeacfebadadf4a6177241b822/664/410"/>
                            <p className='f4'>Salads</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="sushi-food" onClick={this.onSushiClick}>
                            <img alt='sushi' width='105px' height='90px' src="https://img.grouponcdn.com/iam/gCqNJ8JsqBhHxsT8eArB/BM-2048x1229/v1/c700x420.jpg"/>
                            <p className='f4'>Sushi</p>
                        </p>
                    </div>

                    <div className='card'>
                        <p className='pointer link dim black' id="dessert-food" onClick={this.onDessertClick}>
                            <img alt='dessert' width='105px' height='90px' src="http://assets.kraftfoods.com/recipe_images/opendeploy/128187_640x428.jpg"/>
                           <p className='f4'>Dessert</p>
                        </p>
                    </div>
                </div>
                <div className="row" id="filter-container">
                    <TypeFilter show={this.state.showChinese} onClose={this.closeChinese}>
                        Chinese
                    </TypeFilter>
                    <TypeFilter show={this.state.showAmerican} onClose={this.closeAmerican}>
                        American
                    </TypeFilter>
                    <TypeFilter show={this.state.showMexican} onClose={this.closeMexican}>
                        Mexican
                    </TypeFilter>
                    <TypeFilter show={this.state.showPizza} onClose={this.closePizza}>
                        Pizza
                    </TypeFilter>
                    <TypeFilter show={this.state.showSandwiches} onClose={this.closeSandwiches}>
                        Sandwiches
                    </TypeFilter>
                    <TypeFilter show={this.state.showChicken} onClose={this.closeChicken}>
                        Chicken Wings
                    </TypeFilter>
                    <TypeFilter show={this.state.showSalads} onClose={this.closeSalads}>
                        Salads
                    </TypeFilter>
                    <TypeFilter show={this.state.showSushi} onClose={this.closeSushi}>
                        Sushi
                    </TypeFilter>
                    <TypeFilter show={this.state.showDessert} onClose={this.closeDessert}>
                        Dessert
                    </TypeFilter>
                </div>
            </div>
        );
    }
}

export default FoodBar;