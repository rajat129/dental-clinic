
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return(
        
        <div className="header jumbotron">
            <div className="row pt-3">
                <div className="col-md-2">
                    <img src="https://apollowhitedental.com/wp-content/uploads/2019/03/dental-clinic-830x553.jpg"></img>
                </div>
                <div className="col-md-7 title">
                    <h1>Dr goyals dental clinic and implant center</h1>
                    <p>The best you can get</p>
                </div>
                <div className="col-md-3 " >
                    <div className=" row btn btn-danger tags" >Email id</div>
                    <div className="row btn btn-danger tags" >Phone</div>
                    <div className="row btn btn-danger tags" >Address</div>
                </div>
            </div>
        </div>

    );
}

export default Header;