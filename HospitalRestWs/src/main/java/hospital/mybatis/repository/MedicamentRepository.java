package hospital.mybatis.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import hospital.model.Medicament;
import hospital.mybatis.mapper.MedicamentMapper;

@Repository("MedicamentRepository")
public class MedicamentRepository {

	@Autowired
	@Qualifier("primarySqlSessionTemplate")
	private SqlSessionTemplate sqlSessionTemplate;
	
	private MedicamentMapper getMapper() {
		return sqlSessionTemplate.getMapper(MedicamentMapper.class);
	}
	
	public List<Medicament> getMedicaments() {
		return getMapper().getMedicaments();
	}
	
	public void addMedicament(Medicament medicament) {
		getMapper().addMedicament(medicament);
	}
	
	public List<Medicament> getMedicamentByName(String name) {
		return getMapper().getMedicamentByName(name);
	}
	
	public void deleteMedicament(Integer id) {
		getMapper().deleteMedicament(id);
	}
}
