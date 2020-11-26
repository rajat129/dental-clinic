import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
    return(
        <div class="row">
            <div class="col-md-12">

            <footer class="page-footer font-small indigo">

                <div class="container">
              
                  
                  <div   class="row text-center d-flex justify-content-center pt-4">
              
                    
                    <div class="col-md-2 mb-2">
                      <h6 class="text-uppercase font-weight-bold">
                        <a href="#!">About us</a>
                      </h6>
                    </div>
                    
                    <div class="col-md-2 mb-2">
                      <h6 class="text-uppercase font-weight-bold">
                        <a  href="#!">Products</a>
                      </h6>
                    </div>
                    
                    <div class="col-md-2 mb-2">
                      <h6 class="text-uppercase font-weight-bold">
                        <a  href="#!">Help</a>
                      </h6>
                    </div>
                    
                    <div class="col-md-2 mb-2">
                      <h6 class="text-uppercase font-weight-bold">
                        <a  href="#!">Contact</a>
                      </h6>
                    </div>
                    
                  </div>
              
                  
                  <hr />
                  
                  <div class="row pb-1 abc">
              
                  
                    <div class="col-md-12" >
              
                      <div class="mb-2 flex-center">
              
                        
              
                        <a href="#" class="fa fa-facebook fa-2x mr-5">Facebook</a> 
              
                        <a href="#" class="fa fa-twitter fa-2x mr-5">Twitter</a>
              
                        <a href="#" class="fa fa-instagram fa-2x mr-5">Instagarm</a>
              
                        <a href="#" class="fa fa-google-plus fa-2x mr-5">Google</a>
              
                        <a href="#" class="fa fa-linkedin fa-2x mr-5 ">Linkedin</a>
                      </div>
              
                    </div>
                   
                  </div>
                  
                </div>
               
                <div class="footer-copyright text-center py-3">© 2020 Copyright: Dr Goyal Dental Clinic and Implant Center
                </div>
                
              
              </footer>
            </div>


        </div>
    );
}

export default Footer;
