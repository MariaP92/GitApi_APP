import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'
import './Battle.css';
import './GitHubApi';
import {battle, fetchPopularRepos} from './GitHubApi';

class Battle extends Component {

    constructor(props) {
        super(props);
        this.inputValue = undefined;
        this.inputValue2 = undefined;
        this.userID = undefined;
        this.userAvatar = undefined;
        this.state = {
            completed1: false,
            completed2: false,
            div1: false
        }
    }
    inputChange(e) {

        this.inputValue = e.target.value;
        if (e.target.value != "") {
            this.setState({
                completed1: true
                
            });
        } else {
            this.setState({
                completed1: false
            });
        }
    }
    inputChange2(e) {
   
        this.inputValue2 = e.target.value;

        if (e.target.value != "") {
            this.setState({
                completed2: true
            });
        } else {
            this.setState({
                completed2: false
            });
        }
    }
    valueAlert(){
        battle([
            this.inputValue.toString()]  // https://github.com/honcheng
          ).then((results) => {
            if (results === null){
               console.log ('Looks like there was an error!\nCheck that both users exist on github.');
            }
            alert(results[0].profile.login);
            this.userID = results[0].profile.login;
            this.userAvatar = results[0].profile.avatar;
            console.log("battle result:", results[0].profile.login, results[0].profile.avatar, results[1]);
         });
        this.setState({
            div1:true
        });
    }
    valueAlert2(){
        console.log(this.inputValue.toString());
    }

    render() {
        const UserInfo = () =>{
            return(
                <div>
                    <img src={this.userAvatar}/>
                    <h4>{this.userID}</h4>
                </div>
            );
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                        <h1>PLAYER ONE</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.valueAlert();
                        }}>
                            <div>
                                <input placeholder="github username"
                                    value={this.inputValue}
                                    onChange={(e) => { this.inputChange(e) }} />
                                {this.state.completed1 ?
                                    <Button className="colorBtn" type="submit" >Submit</Button>
                                    :
                                    <Button className="btnDisabled" type="submit" disabled>Submit</Button>
                                }
                            </div>
                            {this.state.div1?
                                <UserInfo />
                                :
                                <div>usuario</div>
                                
                            }
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 text-center">
                        <h1>PLAYER TWO</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.valueAlert2();
                        }}>
                            <div>
                                <input placeholder="github username"
                                    value={this.inputValue2}
                                    onChange={(e) => { this.inputChange2(e) }} />
                                {this.state.completed2 ?
                                    <Button className="colorBtn" type="submit" >Submit</Button>
                                    :
                                    <Button className="btnDisabled" type="submit" disabled>Submit</Button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Battle;