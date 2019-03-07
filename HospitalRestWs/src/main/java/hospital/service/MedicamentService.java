package hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import hospital.model.Medicament;
import hospital.mybatis.repository.MedicamentRepository;

@Service
public class MedicamentService {

	@Autowired
	@Qualifier("MedicamentRepository")
	private MedicamentRepository medicamentRepository;
	
	public List<Medicament> getMedicaments() {
		return medicamentRepository.getMedicaments();
	}
	
	public List<Medicament> getMedicamentByName(String name) {
		return medicamentRepository.getMedicamentByName(name);
	}
	
	public void deleteMedicament(Integer id) {
		medicamentRepository.deleteMedicament(id);
	}
	
	public Medicament addMedicament(Medicament medicament) throws HospitalTwoManyMedicamentWithSameNameException {
		medicamentRepository.addMedicament(medicament);
		List<Medicament> retours = medicamentRepository.getMedicamentByName(medicament.getNom());
		if(retours.size() == 1)
			return retours.get(0);
		throw new HospitalTwoManyMedicamentWithSameNameException(medicament.getNom());
	}
}
