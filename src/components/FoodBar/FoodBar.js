import React from 'react';
import './FoodBar.css';
import TypeFilter from './TypeFilter/TypeFilter';

const restArray = [];

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
    
    updateRArr = () => {
        const prop = this.state;
        restArray.length = 0;
        if (prop.showChinese === true) { restArray.push('Chinese') }
        if (prop.showAmerican === true) { restArray.push('American') }
        if (prop.showMexican === true) { restArray.push('Mexican') }
        if (prop.showPizza === true) { restArray.push('Pizza') }
        if (prop.showSandwiches === true) { restArray.push('Sandwiches') }
        if (prop.showChicken === true) { restArray.push('Chicken Wings') }
        if (prop.showSalads === true) { restArray.push('Salads') }
        if (prop.showSushi === true) { restArray.push('Sushi') }
        if (prop.showDessert === true) { restArray.push('Dessert') }
        console.log(restArray);
        
        if(restArray.length > 0){
            fetch('https://go-order-api.herokuapp.com/rests_list', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    restTypes: restArray
                })
            })
            .then(response => response.json())
            .then(rests => {
                this.props.loadRestaurant(rests);
            })
        } else {
            fetch('https://go-order-api.herokuapp.com/rests', {
                method: 'get',
                headers: {'Content-type': 'application/json'}
            })
            .then(response => response.json())
            .then(rests => {
                this.props.loadRestaurant(rests);
            })
        }
    }
    
    onChineseClick = () => { this.setState({showChinese: true}, function() {this.updateRArr()}); }
    closeChinese = () => { this.setState({showChinese: false}, function() {this.updateRArr()}); }
    onAmericanClick = () => { this.setState({showAmerican: true}, function() {this.updateRArr()}); }
    closeAmerican = () => { this.setState({showAmerican: false}, function() {this.updateRArr()}); }
    onMexicanClick = () => { this.setState({showMexican: true}, function() {this.updateRArr()}); }
    closeMexican = () => { this.setState({showMexican: false}, function() {this.updateRArr()}); }
    onPizzaClick = () => { this.setState({showPizza: true}, function() {this.updateRArr()}); }
    closePizza = () => { this.setState({showPizza: false}, function() {this.updateRArr()}); }
    onSandwichesClick = () => { this.setState({showSandwiches: true}, function() {this.updateRArr()}); }
    closeSandwiches = () => { this.setState({showSandwiches: false}, function() {this.updateRArr()}); }
    onChickenClick = () => { this.setState({showChicken: true}, function() {this.updateRArr()}); }
    closeChicken = () => { this.setState({showChicken: false}, function() {this.updateRArr()}); }
    onSaladsClick = () => { this.setState({showSalads: true}, function() {this.updateRArr()}); }
    closeSalads = () => { this.setState({showSalads: false}, function() {this.updateRArr()}); }
    onSushiClick = () => { this.setState({showSushi: true}, function() {this.updateRArr()}); }
    closeSushi = () => { this.setState({showSushi: false}, function() {this.updateRArr()}); }
    onDessertClick = () => { this.setState({showDessert: true}, function() {this.updateRArr()}); }
    closeDessert = () => { this.setState({showDessert: false}, function() {this.updateRArr()}); }
    

    
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