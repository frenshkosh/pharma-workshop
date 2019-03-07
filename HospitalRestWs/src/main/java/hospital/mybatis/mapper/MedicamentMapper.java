package hospital.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import hospital.model.Medicament;

public interface MedicamentMapper {
	
	public List<Medicament> getMedicaments();
	
	public void addMedicament(@Param("medicament") Medicament medicament);
	
	public void deleteMedicament(@Param("id") Integer id);

	public List<Medicament> getMedicamentByName(@Param("name") String name);
	
}
