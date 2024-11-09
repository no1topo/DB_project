import React,{Fragment} from 'react';
import './App.css';
import logo from '../src/images/Flex.PNG'


function App() {





  return (
    <Fragment>
      <div class = "container-fluid">
        <div class="row">
            <div class="col-md-4">
                <br></br>
                <br></br>
                <br></br>
                <div class="text-center">
                <img src={logo} alt=""></img>
                </div>
                <br></br>
                {/* sign in text */}
                <div class="text-center">
                <h1 class="animate-charcter">SIGN UP</h1>
                </div>
                
                   <br></br><br></br>
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-8">
                        <form>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Roll No</label>
                              <div class="input-group">
                                <div class="input-group-addon" style={{padding: "10px"}}>
                                <span class="fa fa-user-o"></span> 
                            </div>
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll Number i.e (17I-1234)"></input>
                            </div>
                              <small id="emailHelp" class="form-text text-muted">Roll Number i.e (17I-1234)</small>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <div class="input-group">
                                <div class="input-group-addon" style={{padding: "10px"}} >
                                 <span class="fa fa-lock"></span> 
                                </div>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                              </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label class="form-check-label" for="defaultCheck1">
                                  Remember Me
                                </label>
                            </div>
                            <br></br><br></br>
                            <div class="text-center">
                            <button type="submit" class="btn btn-primary" id="SignIn">Sign In</button></div>
                        </form>
                    </div>
                    <div class="col-md-2">
    
                    </div>
                </div>
                
            </div>
            <div class="col-md-8 text-center" id="test" >
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 class="text-center" style={{color: "white"}}>Welcome to Flex-Student</h1>
                <div class="text-center" style={{color: "white"}}>For Password related queries contact concerned Academic Officer on <a  style={{color: "white"}} href="Login.html">nu.edu.pk</a></div>
                
            </div>
        </div>
    </div>


    </Fragment>
  );
}

export default App;
