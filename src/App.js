import { useState , React } from "react";
import "./App.css";



function App() {

  const[formData, setFormData] = useState({firstName:"", lastName:"", email:"",
country:"India", streetAddress:"",city:"" , state:"",postalCode:"",
comments:false,candidates:false,offers:false, pushNotification:""})


function changeHandler(event){
  const{name,value,checked, type} = event.target;

  setFormData( (prev) => ({
    ...prev,
    [name]: type === 'checked' ? checked : value
  }));
}

function submitHandler(event){
  event.preventDefault();

  console.log("Printing the form data");
  console.log(formData)
}

  return(
    <div className="flex flex-col items-center mt-2 bg-slate-200">
      <h1 class="block w-full text-center text-grey-darkest mb-6 text-2xl font-semibold text-red-500">React Form</h1>
      <form onSubmit={submitHandler}>
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="firstName">First Name</label>
        <br/>
        <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Yogesh"
        value={formData.firstName}
        onChange={changeHandler}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline hover:border-gray-500"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="lastName">Last Name</label>
        <br/>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Patidar"
        value={formData.lastName}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">Email Address</label>
        <br/>
        <input
        type="email"
        name="email"
        id="email"
        placeholder="yogeshpatidar2023@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="country">Country</label>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
        >
          <option value="india">India</option>
          <option value="United States">Unites States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="streetAddress">street Address</label>
        <br/>
        <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="279-b"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="oshadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="city">City</label>
        <br/>
        <input
        type="text"
        name="city"
        id="city"
        placeholder="Mumbai"
        value={formData.city}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="state">State</label>
        <br/>
        <input
        type="text"
        name="state"
        id="state"
        placeholder="Maharashtra"
        value={formData.state}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>

        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="postalCode">Postal-Code</label>
        <br/>
        <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="400 062"
        value={formData.postalCode}
        onChange={changeHandler}
        className="shadow appearance-none border rounded hover:border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <br/>
        <br/>

      <fieldset>
        <legend className="mb-2 uppercase font-bold text-lg text-grey-darkest">By Email</legend>

        <div className="flex">
        <input 
        type="checkbox"
        id="comments"
        name="comments"
        checked={formData.comments}
        onChange={changeHandler}></input>

        <div>
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>
        </div>
        </div>
     
      <br/>

        <div className="flex">
        <input 
        type="checkbox"
        id="candidates"
        name="candidates"
        checked={formData.candidates}
        onChange={changeHandler}></input>

        <div>
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
        </div>
        </div>
      <br/>

        <div className="flex">
        <input 
        type="checkbox"
        id="offers"
        name="offers"
        checked={formData.offers}
        onChange={changeHandler}></input>

        <div>
          <label htmlFor="offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
        </div>
        </fieldset>

        <br/>
        <br/>
        <fieldset>
          <legend className="mb-2 uppercase font-bold text-lg text-grey-darkest">Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
          type="radio"
          name="pushNotification"
          id="pushEverything" 
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>

          <br/>
          <input
          type="radio"
          id="pushEmail" 
          name="pushNotification"
          value="Same as email"
          onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br/>
          <input
          type="radio"
          id="pushNothing" 
          name="pushNotification"
          value="No push notifications"
          onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push notifications</label>
          <br/>

        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounde py-2 px-4"> Save </button>
      </form>
    </div>
  );
}


export default App;
