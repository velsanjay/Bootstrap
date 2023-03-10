
import './App.css';

function App() {
  return (
    <div className="App ">
      <div className='first'>
        <Detail
          storage="5GB Storage"
          top="FREE"
          middle="$0"
          right="✔"
          right1="❌"
          right3="❌"
          user="Single User"
        />

      </div>
      <div className='first'>
        <Detail
          right1="❌"
          storage="50GB Storage"
          right="✔"
          right3="✔"
          user1="5 User"
          top="PLUS"
          middle="$9"
        />
      </div>
      <div className='first'>
        <Detail
          storage="150GB Storage"
          right="✔"
          right1="✔"
          right3="✔"
          user1="Unlimited Users"
          top="PRO"
          middle="$49"
          limit="Unlimited"
        />
      </div>

    </div>
  );
}

export default App;

function Detail(props) {
  return (
    <div className='f'>
      <h6 className='some'>{props.top}</h6>
      <h2>{props.middle}</h2>
      <span>/month</span>
      <hr></hr>
      <p><span>{props.right}</span> {props.user}<b>{props.user1}</b></p>
      <p><span>{props.right}</span> {props.storage}</p>
      <p><span>{props.right}</span> Unlimited Public Project</p>
      <p><span>{props.right}</span> Community Access</p>
      <p><span>{props.right3}</span> Unlimited Private Project</p>
      <p><span className='x '>{props.right3}</span> Dedicated Phone Support</p>
      <p><span className='x '>{props.right3}</span> <b>{props.limit}</b> Free Subdomains</p>
      <p ><span className='x'>{props.right1}</span> Monthly Status Reports</p>
      <button>Submit</button>
    </div>
  );
}

