import React from 'react';
import Slider from '../slider/slider';
import StatsCount from '../stats-count/stats-count';
import CartBar from '../cart-bar/cartBar';
import Menu from '../menu/menu';
import axios from 'axios';
import { connect } from 'react-redux';
    class Home extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                menu: undefined
            }
        }

        componentDidMount() {
            axios.get('http://localhost:3000/menu')
                .then(menus => {
                    let menu = menus.data.menus
                    this.setState({
                        ...this.state,
                        menu
                    });
                    this.props.addMenu(menu);
                    localStorage.setItem('menu',JSON.stringify(menu))
                })
                .catch(error=>{
                    console.error(error);
                    const menu = JSON.parse(localStorage.getItem('menu') && localStorage.getItem('menu'));
                    if(menu){
                    this.setState({
                        ...this.state,
                        menu
                    });
                    this.props.addMenu(menu);
                    }
                    else{
                        this.setState({
                            ...this.state,
                            menu:{}
                        });
                        this.props.addMenu({});
                            
                    } 
                })

        }

        render() {
            return (

                <div style={{ marginTop: '64px' }}>
                    <Slider />
                    <StatsCount />
                    <Menu menus={this.state.menu}/>
                    <CartBar/>
                </div>
            )
        }


    }
const mapStateToProps = (state) => {
    return {
        // testData: state.testData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMenu: (obj) => { dispatch({ type: "ADD_MENU", payload: obj }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);