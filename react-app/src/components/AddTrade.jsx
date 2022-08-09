import React ,{useState} from "react";
import axios from "axios";

import TradeServices from "../services/TradeServices";

const AddTrade =()=>{
    const [trade,setTrade]=useState({
      id:"",
      Bookid:"",
      Counterpartyid:"",
      Securityid:"",
      Quantity:"",
      Status:"",
      Price:"",
      buysell:"",
      TradeDate:"",
      SettlementDate:""
    });
    const {id,Bookid,Counterpartyid,Securityid,Quantity,Status,Price,buysell,TradeDate,SettlementDate}=trade;
    const onInputChange = e =>{
      setTrade({...trade,[e.target.id]:e.target.value});
    };
    const onSubmit = async e => {
      e.preventDefault();
      // await axios.post("http://localhost:3000/viewtrades",trade);
      TradeServices.addTrade(trade).then((res)=>{
        window.location.href = "/viewtrades"
        alert('Data Inserted');
      })
    };
    return(
    
    <form onSubmit={e => onSubmit(e)}>
      <div class="form-group">
        <label for="Tradeid">Tradeid</label>
        <input type="number" class="form-control" id="id" placeholder="Enter Tradeid" value={id}
        onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Bookid">Bookid</label>
        <input type="number" class="form-control" id="Bookid" placeholder="Enter Bookid"value={Bookid}
        onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Counterpartyid">Counterpartyid</label>
        <input type="number" class="form-control" id="Counterpartyid" placeholder="Enter Counterpartyid" value={Counterpartyid}
        onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Securityid">Securityid</label>
        <input type="number" class="form-control" id="Securityid" placeholder="Enter Securityid" value={Securityid}
        onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Quantity">Quantity</label>
        <input type="number" class="form-control" id="Quantity" placeholder="Enter Quantity" value={Quantity}
        onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Status">Status</label>
        <input type="text" class="form-control" id="Status" value="active" placeholder="Active/Closed" value={Status} onChange={e =>onInputChange(e)}/>  
      </div>
      <div class="form-group">
        <label for="Price">Price</label>
        <input type="number" class="form-control" id="Price" placeholder="Enter Price" value={Price} onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="Trade">Trade</label>
        <input type="text" class="form-control" id="buysell" placeholder="Buy/Sell" value={buysell} onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="TradeDate">TradeDate</label>
        <input type="date" class="form-control" id="TradeDate" placeholder="Select TradeDate" value={TradeDate} onChange={e =>onInputChange(e)}/>
      </div>
      <div class="form-group">
        <label for="SettlementDate">Settlement Date</label>
        <input type="date" class="form-control" id="SettlementDate" placeholder="Enter SettlementDate" value={SettlementDate} onChange={e =>onInputChange(e)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
    }
export default AddTrade;