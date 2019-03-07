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

import hospital.model.Medicament;
import hospital.service.HospitalTwoManyMedicamentWithSameNameException;
import hospital.service.MedicamentService;

@RestController
@RequestMapping("/medicaments")
public class PharmacieController {

	@Autowired
	private MedicamentService medicamentService;
	
	@GetMapping("/")
	public List<Medicament> getPharmacie() {
		return medicamentService.getMedicaments();
	}
	
	@GetMapping("/search/{name}")
	public List<Medicament> getMedicamentByName(@RequestParam String name) {
		return medicamentService.getMedicamentByName(name);
	}
	
	@PostMapping("/create")
	public Medicament createMedicament(@RequestBody Medicament medoc) throws HospitalTwoManyMedicamentWithSameNameException {
		return medicamentService.addMedicament(medoc);
	}
	
	//return 0 if ok 
	@PostMapping("/delete")
	public Integer deleteMedicament(@RequestBody HashMap<String,String> body) {
		try {
			if(body.containsKey("id")) {
				medicamentService.deleteMedicament(Integer.parseInt(body.get("id")));
				return 0;
			}else {
				return 1;//uncorrect entry
			}
		}catch(Exception e) {
			return 2;
		}
	}
}
