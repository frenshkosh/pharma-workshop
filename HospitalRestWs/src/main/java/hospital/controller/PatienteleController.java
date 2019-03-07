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
import hospital.model.Patient;
import hospital.service.PatientService;

@RestController
@RequestMapping("/patients")
public class PatienteleController {

	@Autowired
	private PatientService patienteleService;
	
	@GetMapping("/")
	public List<Patient> getPatientele() {
		return patienteleService.getPatients();
	}
	
	@GetMapping("/search/{name}")
	public List<Patient> getPatientByName(@RequestParam String name) {
		return patienteleService.getPatientByName(name);
	}
	
	@PostMapping("/create")
	public Patient createPatient(@RequestBody Patient patient) {
		return patienteleService.addPatient(patient);
	}
	
	//return 0 if ok 
	@PostMapping("/delete")
	public Integer deletePatient(@RequestBody HashMap<String,String> body) {
		try {
			if(body.containsKey("id")) {
				patienteleService.deletePatient(Integer.parseInt(body.get("id")));
				return 0;
			}else {
				return 1;//uncorrect entry
			}
		}catch(Exception e) {
			return 2;
		}
	}
}
