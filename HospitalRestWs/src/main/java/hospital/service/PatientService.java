package hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import hospital.model.Patient;
import hospital.mybatis.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	@Qualifier("PatientRepository")
	private PatientRepository patientRepository;
	
	
	public List<Patient> getPatients() {
		return patientRepository.getPatients();
	}
	
	public List<Patient> getPatientByName(String name) {
		return patientRepository.getPatientByName(name);
	}
	
	public void deletePatient(Integer id) {
		patientRepository.deletePatient(id);;
	}
	
	public Patient addPatient(Patient patient) {
		patientRepository.addPatient(patient);
		List<Patient> retours = patientRepository.getPatientByName(patient.getNom());
		Patient result = patient;
		if(retours.size() > 0) {
			for(Patient patientItem: retours) {
				result = patient.getNosecu().equalsIgnoreCase(patientItem.getNosecu())?patientItem:patient;
			}
		}
		return result;
	}
	
}
