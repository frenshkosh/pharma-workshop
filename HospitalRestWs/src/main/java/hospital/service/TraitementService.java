package hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import hospital.model.Traitement;
import hospital.mybatis.repository.TraitementRepository;

@Service
public class TraitementService {

	@Autowired
	@Qualifier("TraitementRepository")
	private TraitementRepository traitementRepository;
	
	public List<Traitement> getTraitements() {
		return traitementRepository.getTraitements();
	}
	
	public List<Traitement> getTraitementByClef(String clef) {
		return traitementRepository.getTraitementByClef(clef);
	}
	
	public void deleteTraitement(Integer id) {
		traitementRepository.deleteTraitement(id);
	}
	
	public Traitement addTraitement(Traitement traitement) throws HospitalTwoManyMedicamentWithSameNameException {
		traitementRepository.addTraitement(traitement);;
		List<Traitement> retours = traitementRepository.getTraitementByClef(traitement.getClef());
		if(retours.size() == 1)
			return retours.get(0);
		throw new HospitalTwoManyMedicamentWithSameNameException(traitement.getClef());
	}
}
