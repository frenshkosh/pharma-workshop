package hospital.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import hospital.model.Patient;

public interface PatientMapper {

	public List<Patient> getPatients();
	
	public void addPatient(@Param("patient") Patient patient);
	
	public void deletePatient(@Param("id") Integer id);

	public List<Patient> getPatientByName(@Param("name") String name);
	
}
