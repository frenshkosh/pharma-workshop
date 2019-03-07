package hospital.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hospital.model.Traitement;
import hospital.service.HospitalTwoManyMedicamentWithSameNameException;
import hospital.service.TraitementService;

@RestController
@RequestMapping("/traitements")
public class ConsultationController {

	@Autowired
	private TraitementService traitementService;
	
	@GetMapping("/")
	public List<Traitement> getOrdonnances() {
		return traitementService.getTraitements();
	}
	
	@GetMapping("/search/{clef}")
	public List<Traitement> getTraitementByName(@RequestParam String clef) {
		return traitementService.getTraitementByClef(clef);
	}
	
	@PostMapping("/create")
	public Traitement createTraitement(@RequestBody Traitement traitement) throws HospitalTwoManyMedicamentWithSameNameException {
		return traitementService.addTraitement(traitement);
	}
	
	//return 0 if ok 
	@PostMapping("/delete")
	public Integer deleteMedicament(@RequestBody HashMap<String,String> body) {
		try {
			if(body.containsKey("id")) {
				traitementService.deleteTraitement(Integer.parseInt(body.get("id")));
				return 0;
			}else {
				return 1;//uncorrect entry
			}
		}catch(Exception e) {
			return 2;
		}
	}
	
}
