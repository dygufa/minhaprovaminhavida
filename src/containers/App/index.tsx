import * as React from "react";
import {Button, IconButton} from "react-toolbox/lib/button";
import FacebookLogin from "react-facebook-login";

const s = require("./App.scss");

export interface Props extends React.Props<App> {

}

class App extends React.Component<Props, {}> {

    responseFacebook(res: any) {
        console.log(res);
    }

    render() {
        return (
            <div className={s.site}>
                <header className={s.header}>
					<div className="container">
                        <div className={s.headerContent}>
                            <h1>Minha prova minha vida</h1>
                            <div>
                                <Button raised primary>
                                    <i className="fa fa-facebook" aria-hidden="true"></i> Login Facebook
                                </Button>

                                {/*}
                                <FacebookLogin
                                    appId="1599405403704130"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook.bind(this)} 
                                />*/}
                            </div>
                        </div>
					</div>
                </header>
                <main className={s.main}>
                    {this.props.children}
                </main>
            </div>
        );

    }
}

export default App;