import logo from './logo.svg';
import './App.css';
import { Orbis } from "@orbisclub/orbis-sdk";
import LitJsSdk from "@lit-protocol/sdk-nodejs";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Utilizing Lit Action and PKP, when a user followingor is followers on a SNS application, the data is signed and stored.

And here is where it gets unique.

Count the number of times a user is connected (i.e. Multuals) with the same DID or walletAddress and different applications.
I believe that by doing so, the depth of the relationship will show up as a graph.

The use case for this graph could be leveraged for Proof of personhood and voting.

Proof of personhood:

A deep connection with the same person could prove that they are human, and the more Mutuals, the more likely the person is human.

Vote: 
A close relationship could lead to collusion or the same ideology. Reduce the power of voting among those who are close.        </p>
        
      </header>
    </div>
  );
}

export default App;
