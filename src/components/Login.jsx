import "../assets/Forms.css";

const Login = ({ showLogin }) => {
  return (
    <main className={`${showLogin ? "active" : ""} blanket`}>
      <form>
        <section className="input-box">
          <h3>Login as a MHP</h3>
          <div>
            <label>Email</label>
            <input type="email" placeholder="example@info.com" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="###########" />
          </div>
          <button className="login">Login</button>
        </section>
        <section className="login-options">
          <p className="social-text">OR use your Social</p>
          <button className="socials">Login with Google</button>
          <button className="redirect">
            {" "}
            Don't have an account <span>Sign here</span>
          </button>{" "}
        </section>
        <button className="dismiss-btn" onClick={() => showLogin(false)}>
          Dismiss
        </button>
      </form>
    </main>
  );
};

export default Login;
