package com.db.grad.javaapi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.exception.ResourceNotFoundException;

@RestController
@CrossOrigin
public class TradeController {
  
	@Autowired
	private TradeRepository tradeRepository;
	
	@Autowired
	private SecurityRepository securityRepository;
	
	//	Get all Trades
	@GetMapping("/trade/getall")
    public List < Trade > getAllTrades() {
        return tradeRepository.findAll();
    }
	
	//	Get trade by trade_id
    @GetMapping("/trade/{trade_id}")
    public ResponseEntity < Trade > getTradeById(@PathVariable(value = "trade_id") Long trade_id)
    throws ResourceNotFoundException {
        Trade trade = tradeRepository.findById(trade_id)
            .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + trade_id));
        return ResponseEntity.ok().body(trade);
    }
    
    // Get security by trade_id
    @GetMapping("/securityfromtrade/{trade_id}")
	public ResponseEntity <Security> getSecurityfromTrade(@PathVariable(value="trade_id") Long trade_id)
    throws ResourceNotFoundException{
		Trade trade = tradeRepository.findById(trade_id)
				.orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + trade_id));
		Security security = securityRepository.findById(trade.getSecurityid())
				.orElseThrow(() -> new ResourceNotFoundException("Security not found for this trade id :: " + trade_id));
		return ResponseEntity.ok().body(security);
	}
    
    // Create a trade
    @PostMapping("/trade")
    public Trade createTrade(@Valid @RequestBody Trade trade) {
//    	Trade last_element = tradeRepository.findTopByOrderByIdDesc();
//    	trade.setId(last_element.getId() + 1);
    	return tradeRepository.saveAndFlush(trade);
    }
    
    // Update a trade
    @PutMapping("/trade/{trade_id}")
    public ResponseEntity <Trade> updateTrade(@PathVariable(value = "trade_id") long trade_id,
    		@Valid @RequestBody Trade update_trade_details)
    	throws ResourceNotFoundException {
    		Trade trade = tradeRepository.findById(trade_id)
    				.orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + trade_id));
    		trade.setBookid(update_trade_details.getBookid());
    		trade.setBuysell(update_trade_details.getBuysell());
    		trade.setCounterpartyid(update_trade_details.getCounterpartyid());
    		trade.setPrice(update_trade_details.getPrice());
    		trade.setQuantity(update_trade_details.getQuantity());
    		trade.setSecurityid(update_trade_details.getSecurityid());
    		trade.setSettlementdate(update_trade_details.getSettlementdate());
    		trade.setStatus(update_trade_details.getStatus());
    		trade.setTradedate(update_trade_details.getTradedate());
    		
    		final Trade new_trade_details = tradeRepository.save(trade);
    		return ResponseEntity.ok(new_trade_details);
    }

	@DeleteMapping("/trade/delete/{id}")
	public Map< String, Boolean > deleteSecurity(@PathVariable(value = "id") Long id)
			throws Exception {
		Trade trade = tradeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

		tradeRepository.delete(trade);
		Map < String, Boolean > response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
