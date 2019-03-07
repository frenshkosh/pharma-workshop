package hospital.model;

import hospital.common.AdministrationType;

public class Medicament {

	private Integer id;
	
	
	private String nom;
	
	private String indication;
	
	private AdministrationType typeAdministration;
	
	private boolean compatible;
	
	public Medicament() {
		super();
	}
	
	public Medicament(Integer id, String nom, String indication, AdministrationType typeAdministration, boolean compatible) {
		super();
		this.id = id;
		this.nom = nom;
		this.indication = indication;
		this.typeAdministration = typeAdministration;
		this.compatible = compatible;
	}
	
	
	

	public Integer getId() {
		return id;
	}


	public String getNom() {
		return nom;
	}


	public String getIndication() {
		return indication;
	}


	public AdministrationType getTypeAdministration() {
		return typeAdministration;
	}


	public boolean isCompatible() {
		return compatible;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public void setIndication(String indication) {
		this.indication = indication;
	}


	public void setTypeAdministration(AdministrationType typeAdministration) {
		this.typeAdministration = typeAdministration;
	}


	public void setCompatible(boolean compatible) {
		this.compatible = compatible;
	}



	

}
