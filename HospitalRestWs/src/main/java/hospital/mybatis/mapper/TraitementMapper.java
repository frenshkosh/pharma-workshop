package hospital.mybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import hospital.model.Traitement;

public interface TraitementMapper {
	
	public List<Traitement> getTraitements();
	
	public void addTraitement(@Param("traitement") Traitement traitement);
	
	public void addRelTraitementMedicament(@Param("idTraitement") Integer idTraitement,@Param("idMedicament") Integer idMedicament);
	
	public void deleteTraitement(@Param("id") Integer id);

	public List<Traitement> getTraitementByClef(@Param("clef") String clef);

	public Integer getIdTraitementByClef(@Param("clef") String clef);

}
