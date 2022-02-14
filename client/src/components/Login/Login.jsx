import React from 'react'

function Login() {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5 col-xl-4">
            <div class="main-block py-25">
              <div class="form-title text-center">
                <h2 class="title gr-text-2 mb-9">Login</h2>
                <p class="gr-text-8 mb-13">To get started, you need to sign in here.</p>
              </div>
              <div class="login-form bg-white border rounded-10 px-8 py-8 shadow-1 mb-11">
                <form action="./">
                  <div class="form-group">
                    <label for="email" class="gr-text-11 font-weight-bold text-blackish-blue">Email</label>
                    <input class="form-control gr-text-11 border" type="email" id="email" placeholder="i.e. john@mail.com" />
                  </div>
                  <div class="form-group forget-block">
                    <div class="d-flex justify-content-between">
                      <label for="password" class="gr-text-11 font-weight-bold text-blackish-blue">Password</label>
                      <a class="forget-link" href="#">Forgot Password?</a>
                    </div>
                    <input id="password" class="form-control gr-text-11 border" type="password" placeholder="********" />
                  </div>

                  <div class="form-group  mb-7">
                    <label for="terms-check" class="gr-check-input mb-7 d-flex">
                      <input class="d-none" type="checkbox" id="terms-check" />
                      <span class="checkbox mt-1 mr-2"></span>
                      <p class="gr-text-11 text-blackish-blue mb-0">Remember me</p>
                    </label>
                  </div>
                  <div class="form-group button-block mb-2">
                    <button class="form-btn btn btn-primary gr-hover-y w-100">Sign In</button>
                  </div>
                </form>
              </div>
              <div class="form-bottom excerpt text-center">
                <p class="sign-up-text gr-text-9 gr-text-color">Don’t have an account? <a href="sign-up.html" class="text-primary">Create an account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login