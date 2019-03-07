package hospital.mybatis.repository;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import hospital.model.Patient;
import hospital.mybatis.mapper.PatientMapper;

@Repository("PatientRepository")
public class PatientRepository {

	@Autowired
	@Qualifier("primarySqlSessionTemplate")
	private SqlSessionTemplate sqlSessionTemplate;
	
	public PatientMapper getMapper() {
		return sqlSessionTemplate.getMapper(PatientMapper.class);
	}
	
	public List<Patient> getPatients() {
		return getMapper().getPatients();
	}
	
	public void addPatient(Patient patient) {
		getMapper().addPatient(patient);;
	}
	
	public List<Patient> getPatientByName(String name) {
		return getMapper().getPatientByName(name);
	}
	
	public void deletePatient(Integer id) {
		getMapper().deletePatient(id);
	}
}
