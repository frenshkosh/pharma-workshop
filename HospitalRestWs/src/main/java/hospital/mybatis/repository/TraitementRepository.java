package hospital.mybatis.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import hospital.model.Medicament;
import hospital.model.Traitement;
import hospital.mybatis.mapper.TraitementMapper;

@Repository("TraitementRepository")
public class TraitementRepository {

	@Autowired
	@Qualifier("primarySqlSessionTemplate")
	private SqlSessionTemplate sqlSessionTemplate;
	
	public TraitementMapper getMapper() {
		return sqlSessionTemplate.getMapper(TraitementMapper.class);
	}
	
	public void addTraitement(Traitement traitement) {
		getMapper().addTraitement(traitement);
		Integer traitementId = getMapper().getIdTraitementByClef(traitement.getClef());
		for(Medicament medoc : traitement.getMedicaments()) {
			getMapper().addRelTraitementMedicament(traitementId, medoc.getId());
		}
	}
	
	public void deleteTraitement(Integer id) {
		getMapper().deleteTraitement(id);
	}
	
	public List<Traitement> getTraitements() {
		return getMapper().getTraitements();
	}
	
	public List<Traitement> getTraitementByClef(String clef) {
		return getMapper().getTraitementByClef(clef);
	}
	
}
